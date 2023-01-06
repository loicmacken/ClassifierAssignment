from .views import PredictViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'classifier', PredictViewSet)
urlpatterns = router.urls