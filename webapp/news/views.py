from django.shortcuts import render, redirect
from .models import  Articles
from .forms import  ArticlesForm
from django.views.generic import DetailView, UpdateView, DeleteView
# Create your views here.
def news_home(request):
    news = Articles.objects.order_by('-date')   # обращаемся к обьектам и получаем их все и сортируем по дате
    return render(request, 'news/news_home.html', {'news' : news})  #по ключу ньюс передаем обьект ньюс

class NewsDetailView(DetailView):
    model =Articles
    template_name = 'news/details_view.html'
    context_object_name = 'article' # ключ по кторому мы передаем обьект внутрь шаблона

class NewsUpdateView(UpdateView):
    model = Articles
    template_name = 'news/create.html'
    form_class = ArticlesForm

class NewsDeleteView(DeleteView):
    model = Articles
    success_url = '/news/'
    template_name = 'news/news_delete.html'

def create (request):
    error = ''
    if request.method == 'POST':            # Мы точно знаенм что будет отправляться так как указали метод пост в creat.html
        form = ArticlesForm(request.POST)   # такой же обьект как и ниже, но изза ПОСТ мв точно знаем что в нем находтся данные которые пользователь туда записал
        form.save()
        if form.is_valid():                 #метот is_valid позволяет нам проверить корректность введенных данных (внутри класса Modelform)
            form.save()                     # сохраняем новую запись в БД
            return redirect('home')         #переадресация на галвную страницу
        else:
            error = 'Неверная форма'
    form = ArticlesForm()

    data = {
        'form': form,
        'error': error
    }
    return render(request, 'news/create.html', data)    # возвращает определенный шаблон
