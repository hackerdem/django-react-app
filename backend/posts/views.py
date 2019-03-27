from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,RetrieveAPIView, RetrieveUpdateDestroyAPIView,
    CreateAPIView, UpdateAPIView)
from tags.models import Tag
from .models import Post, Category, Subscription
from .serializers import TagSerializer, PostSerializer, CategorySerializer, SubscriptionSerializer
from django.db.models import Count ,Sum
from django.shortcuts import get_object_or_404
from .permissions import IsRequestFromFrontend

class TagListView(ListAPIView):
    queryset = Tag.objects.annotate(number_of_posts = Count('post'))[:10]
    serializer_class = TagSerializer

class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'
    def get_object(self):
        queryset = self.get_queryset()
        filter = {}
        filter['slug'] = self.kwargs['slug']
        obj = get_object_or_404(queryset,**filter)
        print(obj.mainimage)
        obj.number_of_views +=1
        obj.save()
        return obj

class PostsInCategoryView(ListAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        slug = self.kwargs['slug']
        return Post.objects.filter(category=slug)

class PostsHasTagView(ListAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        tag = self.kwargs['tags']
        return Post.objects.filter(tags=tag)

class SubscriptionCreateView(CreateAPIView):
    permission_classes = (IsRequestFromFrontend,)
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
