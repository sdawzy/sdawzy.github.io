import os

# Set your target directory
directory = '/'

# Make sure the directory exists
if not os.path.isdir(directory):
    raise Exception(f"Directory {directory} does not exist.")

# Go through each file in the directory
for filename in os.listdir(directory):
    filepath = os.path.join(directory, filename)

    # Only process files (skip folders)
    if os.path.isfile(filepath):
        # Skip files that already have '-fr' before the extension
        name, ext = os.path.splitext(filename)
        if name.endswith('-fr'):
            continue

        # Read the file content
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()

        # Replace "site.locale" with "fr"
        new_content = content.replace('site.locale', 'fr')

        # Create new filename by appending "-fr" before the extension
        new_filename = f"{name}-fr{ext}"
        new_filepath = os.path.join(directory, new_filename)

        # Write the new content into the new file
        with open(new_filepath, 'w', encoding='utf-8') as new_file:
            new_file.write(new_content)

print("Duplication and substitution complete, skipping '-fr' files.")
