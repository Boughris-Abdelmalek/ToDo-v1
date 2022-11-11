from django.urls import path
from . import views

urlpatterns=[
    path('', views.users_overview, name='overview'),
    path('users-list/', views.users_list, name='users-list'),
    path('users-create/', views.users_create, name='users-create'),
]