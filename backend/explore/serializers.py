from rest_framework import serializers
from .models import Notification
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

User = get_user_model()

from rest_framework import serializers
from .models import TrendingPost, Recommendation

class TrendingPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrendingPost
        fields = '__all__'

class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = '__all__'
