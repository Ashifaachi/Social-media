# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import StoryViewSet, StoryViewViewSet

# router = DefaultRouter()
# router.register(r'stories', StoryViewSet, basename='story')
# router.register(r'story-views', StoryViewViewSet, basename='story-view')

# urlpatterns = [
#     path('', include(router.urls)),
# ]


from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RecommendationViewSet,TrendingPostViewSet

router = DefaultRouter()
router.register(r'recommendations', RecommendationViewSet, basename='recommendation')
router.register(r'trending-posts', TrendingPostViewSet, basename='trending-post')

urlpatterns = [
    path('', include(router.urls)),
]
