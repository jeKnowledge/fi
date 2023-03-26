from django.urls import path
from . import views


urlpatterns = [
    path('getall', views.get_all_podcasts, name='podcast get all'),
    path('podcast/post', views.create_podcast, name='podcast post'),
    path('guest/<int:podcast_id>/post', views.create_guest, name='guest post'),
]