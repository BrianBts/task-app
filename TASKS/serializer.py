from rest_framework import serializers
from .models import Task

#DE PYTHON A JSON <--

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done') ASI LE ASIGNO LOS VALORES QUE QUIERO CONVERTIR
        fields = '__all__' #ASIGNO TODOS LOS QUE HAYA
