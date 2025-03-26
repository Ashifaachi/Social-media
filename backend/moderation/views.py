from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import ReportedPost, ModerationLog,ReportedUser
from .serializers import ReportedPostSerializer, ModerationLogSerializer,ReportedUserSerializer

class ReportUserViewSet(viewsets.ModelViewSet):
    queryset = ReportedUser.objects.all()
    serializer_class = ReportedUserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ModerationLogViewSet(viewsets.ModelViewSet):
    queryset = ModerationLog.objects.all()
    serializer_class = ModerationLogSerializer
    permission_classes = [permissions.IsAdminUser]


class ReportedPostViewSet(viewsets.ModelViewSet):
    queryset = ReportedPost.objects.all()
    serializer_class = ReportedPostSerializer
    permission_classes = [permissions.IsAuthenticated]