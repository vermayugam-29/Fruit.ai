from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', getAllFruits, name='get_all_fruits'),
    path('fruit/<int:id>', getFruitById, name='get_fruit_by_id'),
    path('fruit/add', addFruit, name='add_fruit'),
    path('fruit/<int:id>/update', updateFruit, name='update_fruit'),
    path('fruit/<int:id>/delete', deleteFruit, name='delete_fruit'),
]