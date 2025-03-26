from django.db import models
from django.contrib.auth.models import User
from posts.models import Post

# Create your models here.

class ReportedPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='reports')
    reported_by = models.ForeignKey(User, on_delete=models.CASCADE)
    reason = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class ReportedUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reported_users')
    reported_by = models.ForeignKey(User, on_delete=models.CASCADE)
    reason = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class ModerationAction(models.Model):
    action_type = models.CharField(max_length=50, choices=[('ban', 'Ban User'), ('delete_post', 'Delete Post')])
    target_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    target_post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True, blank=True)
    moderator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='moderation_actions')
    created_at = models.DateTimeField(auto_now_add=True)
