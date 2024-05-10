import cv2  #openCV 데려옴
import numpy as np #numpy 데려옴
import sys

def rmbg(fileName):
    img = cv2.imread('C:/photoEditing/image/upload/'+fileName+'.jpg') #이 경로에 있는 사진을 변환할 것임.
    #imread: 이미지 읽어오는 함수 ㅡ>사진 읽어와서 img에 저장함
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) #사진 흑백으로 변환함 (노이즈 없애고 연산처리 속도 빠름, 정확도 up)
    #cvtColor: convert Color, 색을 바꿈. img를 COLOR_BGR2GRAY로 바꿨음


    mask = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY)[1] #흑백으로 이진화처리한 사진 임계값 정하기
    #threshold: 임계값은 250으로 정함. 임계값 넘으면 그냥 간단하게 255로 값 통일시킴, THRESH_BINARY는 그냥 임계값 타입임 신경X
    #BINARY 타입같은 경우 임계값 안넘으면 그냥 흰색으로 조지고, 넘으면 검은색으로 통일시킴.
    mask = 255 - mask #img에서 우리가 스티커로 만들어야하는 부분 뽑아내는중
    #255픽셀에서 우리가 임계값 넘은것만 255로 통일 시켰으니까 그거 이용해서 걸러낸걸 다시 mask에 저장했음


    #모폴로지 연산 할거임. MORPHOLOGICAL TRANSFORMATIONS: 단순화, 제거, 보정을 통해서 형태 파악하는 용도
    kernel = np.ones((1,1), np.uint8)
    #사용한 커널 크기에 따라서 외곽 픽셀 세밀한게 달라지는데 나는 (1, 1)썼음. 이래야 얇은 흰색도 세밀하게 투명화됨.
    #너무 세밀하게 투명화되는게 맘에 안들면 (5, 5)로 바꾸면됨
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
    #열림 연산 중 ㅡ> 주변보다 밝은 노이즈 제거, 맞닿은것처럼 보이는거 분리
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
    #닫힘 연산 중 ㅡ> 주변보다 어두운 노이즈 제거하고 끊어져보이는거 연결하고 구멍 메움


    finalsticker = img.copy() #finalsticker에 img복사했음(원본 냅두고 딴거 쓰려구)
    finalsticker = cv2.cvtColor(finalsticker, cv2.COLOR_BGR2BGRA) #얘도 흑백 처리 해줌
    finalsticker[:, :, -1] = mask #알파채널로 만들었음. 각 픽셀에 대해 색상표현 데이터로부터 분리한 보조 데이터

    cv2.imwrite('C:/photoEditing/image/rmbg/'+fileName+'.png', finalsticker) #finalsticker를 sticker.png라는 이름으로 저장함. 이때 경로는 지정할수 잇음 ㅇㅇ
    cv2.imshow('C:/photoEditing/image/rmbg/'+fileName+'.png', cv2.IMREAD_COLOR) #이미지 보여주기. IMREAD_COLOR는 그냥 이미지를 컬러로 읽겟다는 이야기
    
    print('over')

if __name__ == '__main__': 
    rmbg(sys.argv[1])