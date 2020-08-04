from django.contrib import admin
from .models import Pet, VetOffice, Appointment, Reminder

admin.site.register(Pet)
admin.site.register(VetOffice)
admin.site.register(Appointment)
admin.site.register(Reminder)
