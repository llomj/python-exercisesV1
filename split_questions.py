import re
import os

with open("src/questionsBank.ts", "r") as f:
    content = f.read()

# The file has imports at the top
import_block = "import { PersonaStage } from '../../types';\n\n"

# We split the file by 'const levelXPatterns = ['
for i in range(1, 11):
    level_name = f"level{i}Patterns"
    # Find the start of the block
    start_match = re.search(f"// --- LEVEL {i}:.*?\nconst {level_name} = \\[\n", content, re.IGNORECASE | re.DOTALL)
    if not start_match:
        start_match = re.search(f"const {level_name} = \\[\n", content)
    
    if not start_match:
        print(f"Could not find {level_name}")
        continue
        
    start_idx = start_match.start()
    
    # Find the end of this block by finding the start of the next block or GENERATOR ENGINE
    if i < 10:
        next_level = f"level{i+1}Patterns"
        end_match = re.search(f"// --- LEVEL {i+1}:", content[start_idx:])
        if not end_match:
            end_match = re.search(f"const {next_level} = \\[\n", content[start_idx:])
    else:
        end_match = re.search(f"// GENERATOR ENGINE", content[start_idx:])
        
    if end_match:
        end_idx = start_idx + end_match.start()
        file_content = import_block + content[start_idx:end_idx].strip()
        # write to file
        with open(f"src/data/questions/level{i}.ts", "w") as out_f:
            # We want to export the patterns variable
            file_content = file_content.replace(f"const {level_name} =", f"export const {level_name} =")
            out_f.write(file_content + "\n")
            print(f"Wrote src/data/questions/level{i}.ts")

    else:
        print(f"Could not find end for {level_name}")

print("Done")
