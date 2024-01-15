# import cv2
# import numpy as np
# from keras.models import model_from_json
# from flask import Flask, render_template, request, jsonify

# app=Flask(__name__)
# emotion_dict = {0: "Angry", 1: "Disgusted", 2: "Fearful", 3: "Happy", 4: "Neutral", 5: "Sad", 6: "Surprised"}

# # load json and create model
# json_file = open('model/emotion_model.json', 'r')
# loaded_model_json = json_file.read()
# json_file.close()
# emotion_model = model_from_json(loaded_model_json)

# # load weights into new model
# emotion_model.load_weights("model/emotion_model.h5")
# print("Loaded model from disk")

# # start the webcam feed
# cap = cv2.VideoCapture(0)

# # pass here your video path
# # you may download one from here : https://www.pexels.com/video/three-girls-laughing-5273028/
# # cap = cv2.VideoCapture("C:\\JustDoIt\\ML\\Sample_videos\\emotion_sample6.mp4")

# while True:
#     # Find haar cascade to draw bounding box around face
#     ret, frame = cap.read()
#     frame = cv2.resize(frame, (1280, 720))
#     if not ret:
#         break
#     face_detector = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')
#     gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

#     # detect faces available on camera
#     num_faces = face_detector.detectMultiScale(gray_frame, scaleFactor=1.3, minNeighbors=5)

#     # take each face available on the camera and Preprocess it
#     for (x, y, w, h) in num_faces:
#         cv2.rectangle(frame, (x, y-50), (x+w, y+h+10), (0, 255, 0), 4)
#         roi_gray_frame = gray_frame[y:y + h, x:x + w]
#         cropped_img = np.expand_dims(np.expand_dims(cv2.resize(roi_gray_frame, (48, 48)), -1), 0)

#         # predict the emotions
#         emotion_prediction = emotion_model.predict(cropped_img)
#         maxindex = int(np.argmax(emotion_prediction))
#         cv2.putText(frame, emotion_dict[maxindex], (x+5, y-20), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)

#     cv2.imshow('Emotion Detection', frame)
#     if cv2.waitKey(5) & 0xFF == ord('q'):
#         break

# cap.release()
# cv2.destroyAllWindows()import cv2
import numpy as np
import io
from PIL import Image
from keras.models import model_from_json
from flask import Flask, request, jsonify, render_template, Response
import base64
from io import BytesIO
import cv2
from flask_cors import CORS
app = Flask(__name__)
cors=CORS(app,resources={r"/*":{"origin":"*"}})
emotion_dict = {0: "Angry", 1: "Disgusted", 2: "Fearful", 3: "Happy", 4: "Neutral", 5: "Sad", 6: "Surprised"}
text2=[]
@app.route('/get_text', methods=['GET'])
def get_text_data():
    global text2
    print("gettext",text2)
    return jsonify(text2)
# Load the emotion detection model
json_file = open('model/emotion_model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
emotion_model = model_from_json(loaded_model_json)

# Load weights into the new model
emotion_model.load_weights("model/emotion_model.h5")
print("Loaded model from disk")

def predict_emotion(frame):
    # print("hi")
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.3, minNeighbors=5)

    emotions = []
    for (x, y, w, h) in faces:
        roi_gray_frame = gray_frame[y:y + h, x:x + w]
        cropped_img = np.expand_dims(np.expand_dims(cv2.resize(roi_gray_frame, (48, 48)), -1), 0)

        emotion_prediction = emotion_model.predict(cropped_img)
        maxindex = int(np.argmax(emotion_prediction))
        emotion = emotion_dict[maxindex]
        emotions.append(emotion)

    return emotions

@app.route('/')
def index():
    return render_template('index.html')


def generate_frames():
    print("1")
    cap = cv2.VideoCapture(0)
    while True:
        success, frame = cap.read()
    
        if not success:
            break
        else:
            emotions = predict_emotion(frame)
            print(emotions)
            frame = cv2.putText(frame, ", ".join(emotions), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            

@app.route('/predict_emotion',methods=['POST'])
# def video_feed():
#     print("2")
#     return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')
def predict_emotion_route():
    print("hi hello")
    # try:
        # Receive the image data
    image_data = request.data
    # print(type(image_data))
    image_array = np.frombuffer(image_data, np.uint8)

    # Decode the image
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
    # print(image)
    text1=(predict_emotion(image))
    text2=text1
    print(text2)
    return jsonify(text2)

        
    # except Exception as e:
    #     return str(e), 500
    
if __name__ == '__main__':
    app.run(debug=True)
