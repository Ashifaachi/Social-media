from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostAnalyticsViewSet,UserActivityViewSet

router = DefaultRouter()
router.register(r'post_analytics', PostAnalyticsViewSet, basename='post_analytics')
router.register(r'user_activity', UserActivityViewSet, basename='user_activity')

urlpatterns = [
    path('', include(router.urls)),
]
