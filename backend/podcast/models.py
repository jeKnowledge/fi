from django.db import models

# Create your models here.

class Podcast(models.Model):
    name = models.CharField(max_length=255)
    image_link = models.CharField(null = True, max_length=255)
    description = models.TextField()
    time = models.DateTimeField()
    youtube_link = models.CharField(max_length=255)
    spotify_link = models.CharField(max_length=255)
    guests = models.CharField(max_length=255)

    def __str__(self):
        return self.name