from django.db import models

# Create your models here.
class AboutPlace(models.Model):
    title = models.CharField('Название', max_length=60, default='o') # pole 255 symbols
    full_text = models.TextField('Статья')
#    image = models.ImageField(upload_to= )
    def __str__(self):
        return self.title
    class Meta: # для нормального названия в панели администратора
        verbose_name = "Инф-ия о регионе"
        verbose_name_plural = "Инф-ия о регионах"