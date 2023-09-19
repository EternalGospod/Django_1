from django.shortcuts import render
from .models import  Articles
# Create your views here.
def news_home(request):
    news = Articles.objects.order_by('-date') # обращаемся к обьектам и получаем их все и сортируем по дате
    return render(request, 'news/news_home.html', {'news' : news}) #по ключу ньюс передаем обьект ньюс

def create (request):
    return render(request, 'news/create.html') # возвращает определенный шаблон
