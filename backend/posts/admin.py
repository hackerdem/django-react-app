from django.contrib import admin
from .models import Post, Category, Subscription


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id','author','title','slug','status','publish_date')
    prepopulated_fields=({'slug':('title',)})
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','category','slug')
    prepopulated_fields=({'slug':('category',)})

@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id','email','name')