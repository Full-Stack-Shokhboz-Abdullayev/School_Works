from django.shortcuts import render
from .models import *
from .useful_defs import *


def home(request):
    grades = all(GradeNum)
    
    return render(request, 'full_crud/home.html', {'grades': grades})



def about(request):
    return render(request, 'full_crud/about.html')