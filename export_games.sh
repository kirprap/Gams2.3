#TO ARCHIT
# I HAD TO MAKE THIS JUST TO OPTIMIZE YOUR THING
# ARCH LINUX ONLY
#!/bin/bash

FOLDER="./gamefiles"
IMAGEFOLDER="./gameimages"
OUTPUT="games.js"

echo 'const games = `' > "$OUTPUT"

for file in "$FOLDER"/*.html; do
    [ -e "$file" ] || continue

    filename=$(basename "$file" .html)

    if [[ "$filename" =~ ^[a-z0-9]+$ ]]; then
        echo "Deleting: $filename.html"
        rm "$file"
        continue
    fi

    imagename=$(echo "$filename" | tr '[:upper:]' '[:lower:]' | tr -d ' ')

    imagefile=$(find "$IMAGEFOLDER" -maxdepth 1 -type f | while read -r img; do
        base=$(basename "$img")
        name="${base%.*}"

        if [[ "$name" == "$imagename" ]]; then
            echo "$base"
            break
        fi
    done)

    [ -z "$imagefile" ] && continue

    cat >> "$OUTPUT" <<EOF
<a class="game-link" href="gamefiles/${filename}.html">
    <img loading="lazy" src="gameimages/${imagefile}" alt="${filename}">
    <div>${filename}</div>
</a>

EOF

done

echo '`;' >> "$OUTPUT"
