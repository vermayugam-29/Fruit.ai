from django.db import models

# Create your models here.

class Fruit(models.Model):
    name = models.CharField(max_length = 50)
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length=2500)