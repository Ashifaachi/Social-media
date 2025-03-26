from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import Recommendation,TrendingPost
from .serializers import RecommendationSerializer,TrendingPostSerializer

class RecommendationViewSet(viewsets.ModelViewSet):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    permission_classes = [permissions.IsAuthenticated]

class TrendingPostViewSet(viewsets.ModelViewSet):
    queryset = TrendingPost.objects.all()
    serializer_class = TrendingPostSerializer
    # permission_classes = [permissions.IsAuthenticated]




# from rest_framework import viewsets, permissions
# from .models import Story, StoryView
# from .serializers import StorySerializer, StoryViewSerializer

# class StoryViewSet(viewsets.ModelViewSet):
#     queryset = Story.objects.all()
#     serializer_class = StorySerializer
#     permission_classes = [permissions.IsAuthenticated]

# class StoryViewViewSet(viewsets.ModelViewSet):
#     queryset = StoryView.objects.all()
#     serializer_class = StoryViewSerializer
#     permission_classes = [permissions.IsAuthenticated]
