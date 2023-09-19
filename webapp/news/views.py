from django.shortcuts import render
from .models import  Articles
# Create your views here.
def news_home(request):
    news = Articles.objects.all() # обращаемся к обьектам и получаем их все
    return render(request, 'news/news_home.html', {'news' : news}) #по ключу ньюс передаем обьект ньюс