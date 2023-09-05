from django.shortcuts import render

def index(request):
    data = {
        'title': 'MAIN PAGE'

    }
    return render(request, 'main/index.html', data) #вызов нужного html шаблона


def about(request):
    return render(request, 'main/about.html')
