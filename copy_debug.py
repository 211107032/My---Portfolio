import shutil
import os
import sys

src = r"C:\Users\milind rajput\.gemini\antigravity\brain\84d634bd-50b3-4cd2-b215-1a050fc97233\portfolio_background_gen_1764944011036.png"
dst = r"c:\Users\milind rajput\Desktop\Portfolio\public\generated_bg.png"

print(f"Source: {src}")
print(f"Dest: {dst}")

try:
    if not os.path.exists(src):
        print("ERROR: Source file does not exist")
        # List dir to see what is there
        print(f"Listing dir: {os.path.dirname(src)}")
        print(os.listdir(os.path.dirname(src)))
        sys.exit(1)

    if not os.path.exists(os.path.dirname(dst)):
        print("ERROR: Dest directory does not exist")
        sys.exit(1)

    shutil.copy2(src, dst)
    print("SUCCESS: File copied")
except Exception as e:
    print(f"ERROR: {e}")
