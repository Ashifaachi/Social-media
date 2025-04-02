from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import ReportedPost, ModerationAction,ReportedUser
from .serializers import ReportedPostSerializer, ModerationActionSerializer,ReportedUserSerializer

class ReportUserViewSet(viewsets.ModelViewSet):
    queryset = ReportedUser.objects.all()
    serializer_class = ReportedUserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ModerationLogViewSet(viewsets.ModelViewSet):
    queryset = ModerationAction.objects.all()
    serializer_class = ModerationActionSerializer
    permission_classes = [permissions.IsAdminUser]


class ReportedPostViewSet(viewsets.ModelViewSet):
    queryset = ReportedPost.objects.all()
    serializer_class = ReportedPostSerializer
    permission_classes = [permissions.IsAuthenticated]