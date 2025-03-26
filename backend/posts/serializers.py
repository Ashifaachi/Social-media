from rest_framework import serializers
from .models import Post, Comment, Like,PostMedia
from django.contrib.auth.models import User
# from users.models import User

# class CommentSerializer(serializers.ModelSerializer):
#     author_username = serializers.ReadOnlyField(source='author.username')
    
#     class Meta:
#         model = Comment
#         fields = ['id', 'author_username', 'content', 'created_at']

# class PostSerializer(serializers.ModelSerializer):
#     author_username = serializers.ReadOnlyField(source='author.username')
#     comments = CommentSerializer(many=True, read_only=True)
#     likes_count = serializers.SerializerMethodField()

#     class Meta:
#         model = Post
#         fields = ['id', 'author_username', 'content', 'created_at', 'comments', 'likes_count']

#     def get_likes_count(self, obj):
#         return obj.likes.count()

# class LikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Like
#         fields = ['id', 'post', 'user', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class PostMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostMedia
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
