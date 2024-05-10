import cv2 
import numpy as np 
import sys

def rmbg(fileName):
    img = cv2.imread('C:/photoEditing/image/upload/'+fileName+'.jpg') 
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    mask = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY)[1] 
    mask = 255 - mask

    kernel = np.ones((1,1), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)

    finalsticker = img.copy() 
    finalsticker = cv2.cvtColor(finalsticker, cv2.COLOR_BGR2BGRA)
    finalsticker[:, :, -1] = mask 

    cv2.imwrite('C:/photoEditing/image/rmbg/'+fileName+'.png', finalsticker)
    cv2.imshow('C:/photoEditing/image/rmbg/'+fileName+'.png', cv2.IMREAD_COLOR) 
    
    print('over')

if __name__ == '__main__': 
    rmbg(sys.argv[1])
