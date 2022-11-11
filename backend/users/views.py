from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .serializers import UsersSerializers
from .models import Users
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView

# Create your views here.

#Show an overview of all the available paths
@api_view(['GET'])
def users_overview(request):  
    overview_list = {
        'List': '/user-list',
        'Detail': '/user-detail/<str:pk>',
        'Create': '/user-create',
        'Update': '/user-update/<str:pk>',
        'Delete': '/user-delete/<str:pk>',
    }
    return Response(overview_list)

#Path to get all the users registered
@api_view(['GET'])
def users_list(request):
    users = Users.objects.all().order_by('-id')
    serializer = UsersSerializers(users, many=True)

    return Response(serializer.data)

#Path to send data to register users
@api_view(['POST'])
def users_create(request):
    serializer = UsersSerializers(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)