sourceFolder="beeesssimg"
destinationFolder="img"

if [ ! -d "$sourceFolder" ]; then
    echo "Source folder '$sourceFolder' does not exist."
    exit 1
fi

if [ ! -d "$destinationFolder" ]; then
    mkdir "$destinationFolder"
fi

cp -r "$sourceFolder"/* "$destinationFolder/"

echo "Contents of '$sourceFolder' have been successfully copied to '$destinationFolder'."
exit 0
