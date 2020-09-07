from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Pet, VetOffice, Appointment, Reminder
from .serializers import UserSerializer, PetSerializer, VetOfficeSerializer, AppointmentSerializer, ReminderSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    authentication_classes = (TokenAuthentication, )
    # permission_classes = (IsAuthenticated, )

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user_id=self.request.user)


class VetOfficeViewSet(viewsets.ModelViewSet):
    queryset = VetOffice.objects.all()
    serializer_class = VetOfficeSerializer
    authentication_classes = (TokenAuthentication, )
    # permission_classes = (IsAuthenticated, )

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    authentication_classes = (TokenAuthentication, )
    # permission_classes = (IsAuthenticated, )

class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    authentication_classes = (TokenAuthentication, )
    # permission_classes = (IsAuthenticated, )
