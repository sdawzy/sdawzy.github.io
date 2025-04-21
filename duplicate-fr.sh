#!/bin/bash

# Change this to your target directory
SOURCE_DIR="_pages"

# Duplicate each file
for filepath in "$SOURCE_DIR"/*; do
  filename=$(basename -- "$filepath")
  extension="${filename##*.}"
  name="${filename%.*}"
  
  cp "$filepath" "$SOURCE_DIR/${name}-fr.${extension}"
done

echo "✅ Duplicated all files in '$SOURCE_DIR' with '-fr' suffix."