from django.db import models

# Create your models here.

class Articles(models.Model):
    title = models.CharField('Название', max_length=60, default='новость') # pole 255 symbols
    anons = models.CharField('Анонс', max_length=250)
    full_text = models.TextField('Статья')
    date = models.DateTimeField('дата публикации')

    def __str__(self): # для красивого вывода записей
        return self.title #указали что будет выводиться значение из поля title
    def get_absolute_url(self): # метод переадресации после редактирования
        return f'/news/{self.id}'
    class Meta: # указали правильные названия для таблиц
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'