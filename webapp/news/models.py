from django.db import models

# Create your models here.

class Articles(models.Model):
    title = models.CharField('Название', max_length=60, default='новость') # pole 255 symbols
    anons = models.CharField('Анонс', max_length=250)
    full_text = models.TextField('Статья')
    date = models.DateTimeField('дата публикации')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'