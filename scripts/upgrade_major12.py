import json
import re

# Read current labPrograms.ts to get exact original questions, codes, and metadata
with open('src/data/labPrograms.ts', 'r', encoding='utf-8') as f:
    current_content = f.read()

print("labPrograms.ts loaded, length:", len(current_content))
