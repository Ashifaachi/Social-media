from django.contrib import admin
from .models import TrendingPost,Recommendation

# Register your models here.
admin.site.register(TrendingPost)
admin.site.register(Recommendation)