from django.shortcuts import render,get_object_or_404,redirect

# Create your views here.
import operator
from .models import DNA
from .serializers import DNASerializer
from rest_framework import generics
from django.http import HttpResponse, HttpResponseRedirect
from django.db.models import Q
from functools import reduce



# class DNAListCreate(generics.ListCreateAPIView):
#     def post(self, request):
#         dna = DNA(request.POST)
#         dnas=['NC_000852','NC_007346','NC_008724','NC_009899','NC_014637','NC_020104','NC_023423','NC_023640','NC_023719','NC_027867']
#         for choices in dnas:
#             if choices==dna.sequence:
#                 html = '<html><body>Sequence found</body></html>'
#                 return HttpResponse(html)

#     def get(self, request):
#         queryset = DNA.objects.all()
#         serializer_class = DNASerializer

class DNAListCreate(generics.ListCreateAPIView):
    dnas=[
        'NC_000852', 
        'NC_007346',
        'NC_008724', 
        'NC_009899', 
        'NC_014637', 
        'NC_020104', 
        'NC_023423', 
        'NC_023640', 
        'NC_023719',
        'NC_027867'
        ]
    #queryset = DNA.objects.all()
    queryset = DNA.objects.filter(sequence__in=dnas)
    serializer_class = DNASerializer




def DNADelete(request,id):
    dna=get_object_or_404(DNA,id=id)
    dna.delete()
    html = '<html><body>DNA has been deleted</body></html>'
    return HttpResponse(html)