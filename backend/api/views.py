from django.shortcuts import render
from rest_framework import viewsets
from .models import Pet, VetOffice, Appointment, Reminder
from .serializers import PetSerializer, VetOfficeSerializer, AppointmentSerializer, ReminderSerializer

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

class VetOfficeViewSet(viewsets.ModelViewSet):
    queryset = VetOffice.objects.all()
    serializer_class = VetOfficeSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
