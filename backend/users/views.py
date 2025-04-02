# # from rest_framework import generics, status
# # from rest_framework.response import Response
# # from .models import UserProfile,BlockedUser,Follower
# # from rest_framework.permissions import AllowAny
# # from .serializers import UserSerializer, LoginSerializer
# # from rest_framework_simplejwt.tokens import RefreshToken
# # from rest_framework.views import APIView
# # from rest_framework.permissions import IsAuthenticated
# # User = UserProfile

# # class RegisterView(generics.CreateAPIView):
# #     queryset = User.objects.all()
# #     serializer_class = UserSerializer
# #     permission_classes = [AllowAny]

# # class LoginView(generics.GenericAPIView):
# #     serializer_class = LoginSerializer
# #     permission_classes = [AllowAny]

# #     def post(self, request):
# #         serializer = self.get_serializer(data=request.data)
# #         serializer.is_valid(raise_exception=True)
# #         return Response(serializer.validated_data, status=status.HTTP_200_OK)

# # class LogoutView(APIView):
# #     def post(self, request):
# #         try:
# #             refresh_token = request.data["refresh"]
# #             token = RefreshToken(refresh_token)
# #             token.blacklist()
# #             return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
# #         except Exception as e:
# #             return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)




# # class HomeView(APIView):
# #     permission_classes = [IsAuthenticated]  # Ensure login is required

# #     def get(self, request):
# #         return Response({"message": "Hello World"}, status=200)


from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserProfile, Follower, BlockedUser
from .serializers import (
    UserSerializer, LoginSerializer, UserProfileSerializer, 
    FollowerSerializer, BlockedUserSerializer
)

User = get_user_model()

### ✅ USER REGISTRATION VIEW
class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

### ✅ LOGIN VIEW (JWT Token Based)
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ### ✅ USER PROFILE VIEW (Retrieve & Update Profile)
# class UserProfileView(generics.RetrieveUpdateAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]

#     def get_object(self):
#         return self.request.user.userprofile  # Fetch the profile of the logged-in user

from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Retrieve the user's profile or create it if it doesn’t exist."""
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        return profile

    def get(self, request, *args, **kwargs):
        """Show user profile if exists, else create and return new profile."""
        profile = self.get_object()
        serializer = self.get_serializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK if not profile else status.HTTP_201_CREATED)

    def put(self, request, *args, **kwargs):
        """Update the entire profile."""
        profile = self.get_object()
        serializer = self.get_serializer(profile, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):
        """Partially update the profile."""
        profile = self.get_object()
        serializer = self.get_serializer(profile, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


### ✅ FOLLOW USER
class FollowUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            user_to_follow = User.objects.get(id=user_id)
            if request.user == user_to_follow:
                return Response({"error": "You cannot follow yourself."}, status=status.HTTP_400_BAD_REQUEST)

            # Check if already following
            if Follower.objects.filter(user=user_to_follow, follower=request.user).exists():
                return Response({"error": "Already following this user."}, status=status.HTTP_400_BAD_REQUEST)

            Follower.objects.create(user=user_to_follow, follower=request.user)
            return Response({"message": "Followed successfully"}, status=status.HTTP_201_CREATED)

        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

### ✅ UNFOLLOW USER
class UnfollowUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            user_to_unfollow = User.objects.get(id=user_id)
            follow_relation = Follower.objects.filter(user=user_to_unfollow, follower=request.user)

            if not follow_relation.exists():
                return Response({"error": "You are not following this user."}, status=status.HTTP_400_BAD_REQUEST)

            follow_relation.delete()
            return Response({"message": "Unfollowed successfully"}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

### ✅ BLOCK USER
class BlockUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            user_to_block = User.objects.get(id=user_id)
            if request.user == user_to_block:
                return Response({"error": "You cannot block yourself."}, status=status.HTTP_400_BAD_REQUEST)

            # Check if already blocked
            if BlockedUser.objects.filter(user=request.user, blocked_user=user_to_block).exists():
                return Response({"error": "User is already blocked."}, status=status.HTTP_400_BAD_REQUEST)

            BlockedUser.objects.create(user=request.user, blocked_user=user_to_block)
            return Response({"message": "User blocked successfully"}, status=status.HTTP_201_CREATED)

        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

### ✅ UNBLOCK USER
class UnblockUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            user_to_unblock = User.objects.get(id=user_id)
            block_relation = BlockedUser.objects.filter(user=request.user, blocked_user=user_to_unblock)

            if not block_relation.exists():
                return Response({"error": "User is not blocked."}, status=status.HTTP_400_BAD_REQUEST)

            block_relation.delete()
            return Response({"message": "User unblocked successfully"}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        

class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)



