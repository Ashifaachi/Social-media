from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import PostAnalytics, UserActivity
from .serializers import PostAnalyticsSerializer, UserActivitySerializer

class PostAnalyticsViewSet(viewsets.ModelViewSet):
    queryset = PostAnalytics.objects.all()
    serializer_class = PostAnalyticsSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserActivityViewSet(viewsets.ModelViewSet):
    queryset = UserActivity.objects.all().order_by('-timestamp')
    serializer_class = UserActivitySerializer
    permission_classes = [permissions.IsAuthenticated]
