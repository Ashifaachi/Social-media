# from django.urls import path
# from .views import RegisterView, LoginView, LogoutView, HomeView

# urlpatterns = [
#     path("register/", RegisterView.as_view(), name="register"),
#     path("login/", LoginView.as_view(), name="login"),
#     path("logout/", LogoutView.as_view(), name="logout"),
#     path("home/", HomeView.as_view(), name="home"),
# ]


from django.urls import path
from .views import (
    RegisterUserView, LoginView, UserProfileView,
    FollowUserView, UnfollowUserView, BlockUserView, UnblockUserView,LogoutView
)

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path("logout/", LogoutView.as_view(), name="logout"),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('follow/<int:user_id>/', FollowUserView.as_view(), name='follow-user'),
    path('unfollow/<int:user_id>/', UnfollowUserView.as_view(), name='unfollow-user'),
    path('block/<int:user_id>/', BlockUserView.as_view(), name='block-user'),
    path('unblock/<int:user_id>/', UnblockUserView.as_view(), name='unblock-user'),
]




# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import UserViewSet, UserProfileViewSet, FollowerViewSet, BlockedUserViewSet

# router = DefaultRouter()
# router.register(r'users', UserViewSet, basename='user')
# router.register(r'profiles', UserProfileViewSet, basename='profile')
# router.register(r'followers', FollowerViewSet, basename='follower')
# router.register(r'blocked', BlockedUserViewSet, basename='blocked-user')

# urlpatterns = [
#     path('', include(router.urls)),
# ]
