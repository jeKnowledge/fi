from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Podcast



def get_all_podcasts(request):
    podcasts = Podcast.objects.all()
    podcast_list = []
    for podcast in podcasts:
        podcast_dict = {
            'name': podcast.name,
            'description': podcast.description,
            'time': podcast.time.strftime('%Y-%m-%d %H:%M:%S'),
            'youtube_link': podcast.youtube_link,
            'spotify_link': podcast.spotify_link,
            'guest': podcast.guest
        }
        if podcast.image:
            podcast_dict['image'] = podcast.image.url
        podcast_list.append(podcast_dict)
    return JsonResponse({'podcasts': podcast_list})


def my_view(request):
    if request.user.is_authenticated:
        # User is authenticated, process the request
        # ...
        return JsonResponse({'success': True})
    else:
        # User is not authenticated, return an error response
        return JsonResponse({'error': 'User is not authenticated'}, status=403)

def post_a_podcast(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        time = request.POST.get('time')
        image = request.POST.get('image')
        youtube_link = request.POST.get('youtube_link')
        spotify_link = request.POST.get('spotify_link')
        guest = request.POST.get('guest')
        podcast = Podcast(name=name, description=description, time=time, image=image, youtube_link=youtube_link, spotify_link=spotify_link, guest=guest)
        podcast.save()
        return JsonResponse({'message': 'Podcast created successfully'})