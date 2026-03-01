import os
import re

directories = ['src/components', 'src/pages']

for directory in directories:
    for filename in os.listdir(directory):
        if not filename.endswith('.jsx'):
            continue
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Fix button padding
        content = re.sub(r'py-2 px-4', 'py-3 px-6', content)
        content = re.sub(r'py-2 px-5', 'py-3 px-6', content)
        content = re.sub(r'px-8 py-4', 'px-10 py-5', content)
        content = re.sub(r'py-4 px-8', 'py-5 px-10', content)
        content = re.sub(r'px-10 py-4', 'px-12 py-5', content)
        content = re.sub(r'py-4 px-10', 'py-5 px-12', content)

        # Loosen tracking more generally 
        content = content.replace('tracking-tighter', '')
        
        with open(filepath, 'w') as f:
            f.write(content)

print('done')
