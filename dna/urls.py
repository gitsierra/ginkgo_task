from django.urls import path
from . import views

urlpatterns = [
    path('api/dna/', views.DNAListCreate.as_view() ),
    path('api/dna/<int:id>/delete/',views.DNADelete),
]