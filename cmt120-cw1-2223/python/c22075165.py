import copy
import math

# Exercise 1 - Iris Species Classifier
def exercise1(SepalLen,SepalWid,PetalLen,PetalWid):
    FLOWERS = {"SETOSA":"setosa", "VERSICOLOR":"versicolor", "VIRGINCA":"virginica"};
    if PetalLen < 2.5: return FLOWERS["SETOSA"]
    if PetalWid < 1.8: 
        if PetalLen < 5:
            if PetalWid < 1.7: return FLOWERS["VERSICOLOR"]
            return FLOWERS["VIRGINCA"]
        if PetalWid < 1.6: return FLOWERS["VIRGINCA"]
        if SepalLen < 7: return FLOWERS["VERSICOLOR"]
        return FLOWERS["VIRGINCA"]
    if PetalLen >= 4.9: return FLOWERS["VIRGINCA"]
    if SepalLen < 6: return FLOWERS["VERSICOLOR"]
    return FLOWERS["VIRGINCA"]

# Exercise 2 - Dog Breeds Standards
def exercise2(breed,height,weight,male):
    STANDARD = {"Bulldog": { 1: { "h": 15, "w": 50 }, 0: { "h": 14, "w": 14 } }, "Dalmatian": { 1: { "h": 24, "w": 70 }, 0: { "h": 19, "w": 45 } }, "Maltese": { 1: { "h": 9, "w": 7 }, 0: { "h": 7, "w": 6 } }}
    std_h, std_w = STANDARD[breed][male]["h"], STANDARD[breed][male]["w"]
    if std_h*0.9 <= height <= std_h*1.1 and std_w*0.9 <= weight <= std_w*1.1: return True
    return False

# Exercise 3 - Basic Statistics
def exercise3(l):
    def cal_stat(nums):
        half_idx = math.floor(len(nums)/2)
        median = nums[half_idx] if len(nums) % 2 else (nums[half_idx]+nums[half_idx-1]) / 2
        return [min(nums), sum(nums)/len(nums), median, max(nums)]
    l.sort()
    return [tuple(cal_stat(l)), tuple(cal_stat([int(i**2) for i in l]))]

# Exercise 4 - Finite-State Machine Simulator
def exercise4(trans,init_state,input_list):
    output =  []
    for input in input_list:
        result = trans[init_state + "/" + input].split("/")
        init_state = result[0]
        output.append(result[1])
    return output

# Exercise 5 - Document Stats
def exercise5(filename):
    is_number = lambda char: (48 <= ord(char) <= 57)
    is_letter = lambda char: (65 <= ord(char) <= 90 or 97 <= ord(char) <= 122)
    is_endline = lambda char: (ord(char) in (10, 13))
    count = {"letters": 0, "numbers":0, "symbols": 0, "words": 0, "sentences": 0, "paragraphs": 0, "last_line_len": 0, "last_symbols":False}
    for line in open(filename, mode="r", encoding="utf-8").readlines():
        if count["last_line_len"] > 1: count["last_line_len"] += 1
        if len(line) > 1 :
            if (count["last_line_len"] <= 1): count["paragraphs"] += 1 
            for word in line.split(" "):
                if not (len(word) == 1 and not (is_letter(word[0]) or is_number(word[0]))): count["words"], count["last_symbols"] = count["words"]+1, False # eg. "-" not counted as word
                for idx, char in enumerate(word):
                    if char in (".", "?", "!"): count["sentences"] += 1
                    if is_number(char): 
                        count["numbers"] += 1
                        if count["last_symbols"]: count["words"], count["last_symbols"] = count["words"] + 1, False
                    elif is_letter(char):
                        count["letters"] += 1
                        if count["last_symbols"]: count["words"], count["last_symbols"] = count["words"] + 1, False
                    elif not is_endline(char): # exclude Line Feed \n & Carriage Return \r
                        count["symbols"] += 1
                        if not idx==0: count["last_symbols"] = True # ensure the symbol is in the middle of the word
        count["last_line_len"] = len(line)  
    return tuple([count["letters"], count["numbers"], count["symbols"], count["words"], count["sentences"], count["paragraphs"]])

# Exercise 6 - List Depth
def exercise6(l):
    return None

# Exercise 7 - Change, please
def exercise7(amount,coins):
    return None

# Exercise 8 - Five Letter Unscramble
def exercise8(s):
    return None

# Exercise 9 - Wordle Set
def exercise9(green,yellow,gray):
    return None

# Exercise 10 - One Step of Wordle
def exercise10(green,yellow,gray):
    return None
