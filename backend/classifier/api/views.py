from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.views import APIView
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from django.http import HttpResponse
from ..models import Prediction
from .serializers import PredictionSerializer
import torch
import clip
from PIL import Image
import json
from io import BytesIO

device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

class PredictViewSet(ModelViewSet):
    serializer_class = PredictionSerializer
    queryset = Prediction.objects.all()

    # @api_view(['POST'])
    # def post(self, request):
    #     print('hoi')
    #     labels = json.loads(request.POST["labels"])
    #     img_raw = request.FILES["image"].read()

    #     image = preprocess(Image.open(BytesIO(img_raw))).unsqueeze(0).to(device)
    #     text_labels = labels.keys()
    #     text = clip.tokenize(text_labels).to(device)

    #     with torch.no_grad():
    #         image_features = model.encode_image(image)
    #         text_features = model.encode_text(text)
            
    #         logits_per_image, logits_per_text = model(image, text)
    #         probs = logits_per_image.softmax(dim=-1).cpu().numpy()

    #     for label, prob in zip([text_labels], probs[0]):
    #         labels[label] = str(prob)

    #     print(labels)

    #     return HttpResponse(json.dumps(labels), content_type='application/json')