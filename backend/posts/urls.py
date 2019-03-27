from django.urls import path

from .views import (PostListView,PostDetailView, SubscriptionCreateView,
                    CategoryListView,TagListView,PostsHasTagView,PostsInCategoryView)

urlpatterns = [
    path('subscribe', SubscriptionCreateView.as_view()),
    path('posts',PostListView.as_view()),
    path('detail/<slug>',PostDetailView.as_view(),name='post-detail'),
    path('tags',TagListView.as_view()),
    path('categories',CategoryListView.as_view()),
    path('category-filter/<slug>',PostsInCategoryView.as_view()),
    path('tag-filter/<tags>',PostsHasTagView.as_view()),
    #path('popular/',PopularListView.as_view()),
    #path('recent/',RecentListView.as_view()),
    #path('profile/', ProfileDetailView.as_view()),
    #path('subscribe/',SubscribeView.as_view()),
    
]   