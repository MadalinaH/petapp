from rest_framework import serializers
from .models import Pet, VetOffice, Appointment, Reminder

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'user_id', 'name', 'sex','breed', 'date_of_birth', 'microchip_no', 'passport_no')

class VetOfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VetOffice
        fields = ('id', 'name', 'address', 'email','phone')

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('id', 'pet_id', 'vet_id', 'date','time', 'notes')

class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = ('id', 'user_id', 'appointment_id', 'date','time')
