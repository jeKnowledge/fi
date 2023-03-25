from django.urls import path
from . import views


urlpatterns = [
    path('getall', views.get_all_podcasts, name='podcast get all'),
    path('post', views.post_a_podcast, name='podcast post')
]