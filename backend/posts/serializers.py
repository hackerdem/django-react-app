from rest_framework import serializers
from .models import Post, Category, Subscription
from tags.models import Tag


class TagSerializer(serializers.ModelSerializer):
    number_of_posts = serializers.IntegerField()
    class Meta:
        model = Tag
        fields = (
                'tag',
                 'slug',
                 'number_of_posts',
                 )

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = (
                'category',
                 'slug',
                 )
                
class PostSerializer(serializers.ModelSerializer):
    mainimage = serializers.SerializerMethodField('get_profile_pic_url')
    class Meta:
        model = Post
        fields = (
                  'title',
                  'tags',
                  'slug',
                  'body',
                  'status',
                  'author',
                  'publish_date',
                  'category',
                  'mainimage',
                  'number_of_views',
                  'number_of_likes',
                  )
        lookup_field = 'slug'

    def get_profile_pic_url(self, obj):
        request = self.context.get('request')
        return (request.build_absolute_uri(obj.mainimage.url)).replace('detail/','').replace('tag-filter/','')
class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = (
                'email',
                'name',
                )