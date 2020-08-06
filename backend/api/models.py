from django.contrib.auth.models import User
from django.db import models

class Pet(models.Model):

    FEMALE = 'F'
    MALE = 'M'
    PET_SEX_CHOICES = [
        (FEMALE, 'Female'),
        (MALE, 'Male'),
    ]

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False)
    sex = models.CharField(max_length=1, null=False, choices=PET_SEX_CHOICES, default='Female')
    breed = models.CharField(max_length=100, null=False)
    date_of_birth = models.DateField(null=False) # TODO add constraint date cannot be in the future
    microchip_no = models.CharField(max_length=50, null=False)
    passport_no = models.CharField(max_length=50)

class VetOffice(models.Model):
    name = models.CharField(max_length=50, null=False)
    address = models.CharField(max_length=100, null=False)
    email = models.EmailField(null=False)
    phone = models.CharField(max_length=50, null=False)

class Appointment(models.Model):
    pet_id = models.ForeignKey(Pet, on_delete=models.CASCADE)
    vet_id = models.ForeignKey(VetOffice, on_delete=models.CASCADE)
    date = models.DateField(null=False)
    time = models.TimeField(null=False)
    notes = models.TextField(null=True)

class Reminder(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    appointment_id = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    date = models.DateField(null=False)
    time = models.TimeField(null=False)
