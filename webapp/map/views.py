from django.shortcuts import render
from .models import AboutPlace
from django.views.generic import DetailView
# Create your views here.
def map_home(request):
    return render(request, 'map/map_home.html')

class CheckAbout(DetailView):
    model = AboutPlace
    template_name = 'map/check_about.html'
    context_object_name = 'about'

