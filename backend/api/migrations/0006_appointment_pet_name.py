# Generated by Django 3.0.8 on 2020-09-03 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20200902_0610'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='pet_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]