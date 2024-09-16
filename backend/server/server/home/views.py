from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.exceptions import NotFound


#get all fruits
@api_view(['GET'])
def getAllFruits(request):
    try:
        allfruits = Fruit.objects.all()

        serializers = FruitSerializer(allfruits, many = True)

        return Response({
            'status' : 200,
            'message' : 'Successfully fetched all the fruits',
            'data' : serializers.data,
            'success' : True
        })
    except Exception as e:
        return Response({
            'status' : 500,
            'message' : 'Something went wrong',
            'error' : e,
            'success' : False
        })


#get fruit by id
@api_view(['GET'])
def getFruitById(request, id):
    try:
        fruit = Fruit.objects.get(id=id)
        
        serializer = FruitSerializer(fruit)
        
        return Response({
            'status': 200,
            'message': 'Successfully fetched fruit details',
            'data': serializer.data,
            'success': True
        })
    except Fruit.DoesNotExist:
        return Response({
            'status': 404,
            'message': 'Fruit not found',
            'success': False
        })
    except Exception as e:
        return Response({
            'status': 500,
            'message': 'Something went wrong',
            'error': str(e),
            'success': False
        })
    

#create fruit
@api_view(['POST'])
def addFruit(request):
    try:
        serializers = FruitSerializer(data = request.data)
        
        if not serializers.is_valid():
            return Response({
                'status' : 403,
                'message' :'Something went wrong',
                'success' : False,
                'error' : serializers.errors
            })
        
        serializers.save()

        return Response({
            'status' : 200,
            'data' : serializers.data,
            'message' : 'Fruit added successfully',
            'success' : True
        })
    except Exception as e:
            return Response({
                'status' : 500,
                'message' : 'Something went wrong',
                'error' : e,
                'success' : False
            })

#update fruit
@api_view(['PUT'])
def updateFruit(request, id):
    try:
        fruit_data = Fruit.objects.get(id = id)
        serializers = FruitSerializer(fruit_data, data = request.data, partial = True)
        if not serializers.is_valid():
            return Response({
                'status' : 403,
                'message' : 'Something went wrong',
                'errors' : serializers.errors,
                'success' : False
            })
        
        serializers.save()
        return Response({
            'status' : 200,
            'data' : serializers.data,
            'message' : 'Fruit updated successfully',
            'success' : True
        })
    except Exception as e:
        return Response({
            'status' : 500,
            'message' : 'Something went wrong',
            'success' : False
        })

#delete fruit
@api_view(['DELETE'])
def deleteFruit(request, id):
    try:
        fruit_data = Fruit.objects.get(id = id)
        fruit_data.delete()

        return Response({
            'status' : 200,
            'message' : 'Fruit deleted successfully',
            'success' : True
        })
    except Exception as e :
        return Response({
            'status' : 500,
            'message' : 'Something went wrong',
            'success' : False,
            'error' : e
        })