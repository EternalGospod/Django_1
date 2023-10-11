from django.urls import path
from . import views

urlpatterns = [
    path('', views.map_home, name='map_home'),
    path('<int:pk>', views.CheckAbout.as_view(), name='greenfield')
]