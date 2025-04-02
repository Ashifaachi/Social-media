from rest_framework import serializers
from .models import PostAnalytics, UserActivity
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

User = get_user_model()

from rest_framework import serializers
from .models import PostAnalytics, UserActivity

class PostAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostAnalytics
        fields = '__all__'

class UserActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivity
        fields = '__all__'
