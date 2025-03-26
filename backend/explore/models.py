from django.db import models
from django.contrib.auth.models import User
from posts.models import Post

# Create your models here.
class TrendingPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    trend_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

class Recommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recommendations')
    recommended_post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
