from django.db import models
from datetime import datetime
from django.contrib.auth import get_user_model
from django.template.defaultfilters import slugify
from taggit.managers import TaggableManager
from django.urls import reverse
from django.utils import timezone
from tags.models import Tag
User = get_user_model()


class Category(models.Model):
    category=models.CharField(max_length=124,db_index=True,unique=True)
    slug=models.SlugField(max_length=124,db_index=True,unique=True)
    objects=models.Manager()
    class Meta:
        ordering=('category',)
        verbose_name='category'
        verbose_name_plural='categories'
    def __str__(self):
        return self.category
    
    def get_absolute_url(self):
        return reverse('category_filter',
        args=[self.category])

class Post(models.Model):
    STATUS_CHOICES=(
        ('draft','Draft'),
        ('published','Published')
    )
    mainimage = models.ImageField(upload_to='media/',blank=True)
    title = models.CharField(max_length=300)
    tags = models.ManyToManyField(Tag)
    slug = models.SlugField(max_length=350, unique_for_date='publish_date')
    body = models.TextField(null=True,blank=True)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES,default='draft')
    author=models.ForeignKey(User,to_field='username',on_delete=models.DO_NOTHING)
    publish_date = models.DateTimeField(timezone.now)
    category = models.ForeignKey(Category,to_field='slug',on_delete=models.DO_NOTHING,related_name='posts')
    number_of_views = models.IntegerField(default=0, null=True, blank=True)
    number_of_likes = models.IntegerField(default=0, null=True, blank=True)
    objects = models.Manager()

    class Meta:
        ordering = ('-publish_date',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post_detail',args=[self.slug])
    
class Subscription(models.Model):
    name = models.CharField(max_length=150, blank=False, null=False)
    email = models.EmailField(max_length=100, blank=False, null=False)
    objects = models.Manager()
    def __str__(self):
        return self.email
