from rest_framework import serializers
from .models import DNA

class DNASerializer(serializers.ModelSerializer):
    class Meta:
        model = DNA
        fields = (
        'id',
        'sequence',
        'matching_partner',
        'checked_at'
        )