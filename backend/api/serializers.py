from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Pet, VetOffice, Appointment, Reminder


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'user_id', 'name', 'sex', 'type', 'breed', 'date_of_birth', 'microchip_no', 'passport_no', 'pet_photo')
        extra_kwargs = {'user_id': {'read_only': True}}


class VetOfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VetOffice
        fields = ('id', 'name', 'address', 'email','phone')


class AppointmentSerializer(serializers.ModelSerializer):
    # We set the value of these fields to send them to the frontend; fields do not actually exist in database
    pet_name = serializers.SerializerMethodField('get_pet_name')
    def get_pet_name(self, obj):
        return obj.pet_id.name

    vet_name = serializers.SerializerMethodField('get_vet_name')
    def get_vet_name(self, obj):
        return obj.vet_id.name

    class Meta:
        model = Appointment
        fields = ('id', 'pet_id', 'pet_name', 'vet_id', 'vet_name', 'date','time', 'notes')


class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = ('id', 'user_id', 'appointment_id', 'date','time')
