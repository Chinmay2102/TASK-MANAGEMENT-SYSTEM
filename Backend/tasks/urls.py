from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import taskviewset

router=DefaultRouter()
router.register('tasks',taskviewset,basename='tasks')

urlpatterns=router.urls