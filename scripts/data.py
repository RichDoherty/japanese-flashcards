# -*- coding: utf-8 -*-
import pandas as pd

# Read In Data
df = pd.read_excel("./Hiragana.xlsx", header=0)

# Create JSON String
json_string = df.to_json(orient="records", force_ascii=False)
json_string = "var data = " + json_string + ";"

# Write to file
# https://stackoverflow.com/questions/16346914/python-3-2-unicodeencodeerror-charmap-codec-cant-encode-character-u2013-i/28041598
text_file = open("Hiragana.js", "w", encoding='utf-8')
text_file.write(json_string)
text_file.close()
