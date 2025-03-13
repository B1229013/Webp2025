#from django.http import HttpResponse 
# myhello/views.py

#def myIndex(request):
#    my_name=request.GET.get('name',"CGU")
#    return HttpResponse ("Hello "+my_name)
# from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status 
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging 
from .models import Post
from .models import Course

logger = logging.getLogger('django')


#class HelloApiView(APIView):
#def get(self, request):
        #my_name = request.GET.get('name', None)
        #if my_name:  
           #retValue = {}
           #retValue['data'] = "Hello" + my_name 
           #return Response(retValue, status=status.HTTP_200_OK)
        #else:
            #return Response(
                #{"res": "parameter: name is None"}, 
                 #status=status.HTTP_400_BAD_REQUEST
            #)
#@api_view(['GET'])
#def add_post(request):
    #title = request.GET.get('title', '')
    #content = request.GET.get('content', '')
    #photo = request.GET.get('photo', '')
    #location = request.GET.get('location', '')

    #new_post = Post()
    #new_post.title = title
    #new_post.content = content
    #new_post.photo = photo
    ##new_post.save()

    #logging.debug("********** myhello_api: " + title)

   # if title:
       # return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    #else:
        #return Response({"res": "parameter name is None"},
               # status=status.HTTP_400_BAD_REQUEST
        #)
    
#@api_view(['GET'])
#def list_post(request):
    #posts = Post.objects.all().values()
    #return JsonResponse(list(posts), safe=False)
#def list_users(request):
    #users = User.objects.all().values()
    #return JsonResponse(list(posts), safe=False)
    #return Response(
        #{
            #"data": json.dumps(
                #list(posts),
                #sort_keys=True,
                #indent=1,
                #cls=DjangoJSONEncoder
        #)
        #},
        #status=status.HTTP_200_OK
    #)

@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all().values('course_unit', 'course_name', 'instructor')
    return JsonResponse(list(courses), safe=False)

@api_view(['POST'])
def add_course(request):
    course_unit = request.data.get('course_unit', '')
    course_name = request.data.get('course_name', '')
    instructor = request.data.get('instructor', '')

    # Check if all fields are provided
    if not course_unit or not course_name or not instructor:
        return Response(
            {"res": "All fields (course_unit, course_name, instructor) are required."},
            status=status.HTTP_400_BAD_REQUEST
        )
    new_course = Course(course_unit=course_unit, course_name=course_name, instructor=instructor)
    new_course.save()

    return Response(
        {"data": f"Course '{course_name}' added successfully!"},
        status=status.HTTP_201_CREATED
    )