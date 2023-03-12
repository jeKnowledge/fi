from django.db import models

# Create your models here.

class Podcast(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='podcast/images',blank=True, null=True)
    description = models.TextField()
    time = models.DateTimeField()
    youtube_link = models.CharField(max_length=255)
    spotify_link = models.CharField(max_length=255)
    guest = models.CharField(max_length=255)

    def __str__(self):
        return self.name