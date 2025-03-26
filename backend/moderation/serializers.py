from rest_framework import serializers
from .models import ReportedPost,ReportedUser,ModerationAction
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

User = get_user_model()

class ReportedPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportedPost
        fields = '__all__'

class ReportedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportedUser
        fields = '__all__'

class ModerationActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModerationAction
        fields = '__all__'