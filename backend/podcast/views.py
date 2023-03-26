import json
from django.shortcuts import render


from django.views.decorators.csrf import csrf_exempt


# Create your views here.
from django.http import JsonResponse
from .models import Guest, Podcast



def get_all_podcasts(request):
   
    podcasts = Podcast.objects.prefetch_related('guests').all()
    podcast_list = []
    print(Guest.objects.all())
    
    for podcast in podcasts:
        guest_list = []
        for guest in podcast.guests.all():

            guest_dict = {
                'name': guest.name,
                'description': guest.description,
                'socials': guest.linkedin,
                'photo_link': guest.photo_link,
            }
            guest_list.append(guest_dict)
        
        podcast_dict = {
            'name': podcast.name,
            'description': podcast.description,
            'time': podcast.time.strftime('%Y-%m-%d %H:%M:%S'),
            'youtube_link': podcast.youtube_link,
            'spotify_link': podcast.spotify_link,
            'guests': guest_list
        }
        if podcast.image_link:
            podcast_dict['image'] = podcast.image_link
        podcast_list.append(podcast_dict)
    return JsonResponse({'podcasts': podcast_list})




@csrf_exempt
def create_podcast(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        image_link = data.get('image_link')
        description = data.get('description')
        time = data.get('time')
        youtube_link = data.get('youtube_link')
        spotify_link = data.get('spotify_link')
        
        podcast = Podcast.objects.create(
            name=name,
            image_link=image_link,
            description=description,
            time=time,
            youtube_link=youtube_link,
            spotify_link=spotify_link,
        )
        
        return JsonResponse({
            'success': True,
            'message': 'Podcast created successfully',
            'podcast_id': podcast.id,
        })
    
    return JsonResponse({'error': 'Invalid request method'})


@csrf_exempt
def create_guest(request, podcast_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        description = data.get('description')
        socials = data.get('socials')
        
        podcast = Podcast.objects.get(id=podcast_id)
        guest = Guest.objects.create(
            name=name,
            description=description,
            linkedin= linkedin,
            photo_link=photo_link,
            podcast=podcast,

        )
        
        return JsonResponse({
            'success': True,
            'message': 'Guest created successfully',
            'guest_id': guest.id,
        })
    
    return JsonResponse({'error': 'Invalid request method'})