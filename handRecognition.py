import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
    '',
    api_key='{}'
)

# with open('./beagle.zip', 'rb') as beagle, open(
#         './golden-retriever.zip', 'rb') as goldenretriever, open(
#             './husky.zip', 'rb') as husky, open(
#                 './cats.zip', 'rb') as cats:
#     model = visual_recognition.create_classifier(
#         'dogs',
#         beagle_positive_examples=beagle,
#         goldenretriever_positive_examples=goldenretriever,
#         husky_positive_examples=husky,
#         negative_examples=cats)