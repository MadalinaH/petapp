from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from .views import PetViewSet, VetOfficeViewSet, AppointmentViewSet, ReminderViewSet

router = routers.DefaultRouter()
router.register('pets', PetViewSet)
router.register('vet_offices', VetOfficeViewSet)
router.register('appointments', AppointmentViewSet)
router.register('reminders', ReminderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
