from django.contrib import admin

# Register your models here.

from .models import Guest, Podcast
#register guest and podcast models
admin.site.register(Guest)
admin.site.register(Podcast)