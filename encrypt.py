#!/usr/bin/python3
import sys, os, math
import array as arr
import numpy as np

def encrypt(input, key, blocksize):
    width = len(key)
    length = math.ceil(len(content)/width)
    if(int(blocksize) < width):
        width = int(blocksize)
        length = 1
    elif((width*length) > int(blocksize)):
        length = int(blocksize)/width
    counter = 0
    x = 0
    encryptedSentence = ""
    shortBlocks = False
    arr = [[0 for x in range(width)] for y in range(int(length))]
    m = math.ceil(width * int(length))
    if(len(input) > m | m != 0):
        r = math.ceil(len(input)/m)
    else:
        r = 1

    if(width < len(key)):
        shortBlocks = True
        for j in key:
            if j < width:
                continue
            else:
                key.remove(j)
    while(x < r):
        x = x + 1
        for i in range(int(length)):
            for j in range(width):
                if(counter > len(input)):
                    #print(" ")
                    arr[i][j] = "0"
                elif(counter == len(input)):
                    #print(" ")
                    arr[i][j]= "\n"
                else:
                    arr[i][j] = input[counter]
                counter = counter + 1
        
        if(shortBlocks):
            for i in range(int(length)):
                for j in key:
                    if(arr[i][j] == "0"):
                        continue
                    else:
                        encryptedSentence = encryptedSentence + arr[i][j]
        else:
            for j in key:
                for i in range(int(length)):
                    if(arr[i][j] == "0"):
                        continue
                    else:
                        encryptedSentence = encryptedSentence + arr[i][j]
        
        
    return(encryptedSentence)
    
