from django.db import models

# Create your models here.
class DNA(models.Model):
    sequence=models.CharField(max_length=100)
    matching_partner=models.CharField(max_length=300,default="None")
    checked_at=models.DateField(auto_now_add=True)