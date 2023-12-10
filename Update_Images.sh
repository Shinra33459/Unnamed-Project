#!/system/bin/sh  # Adjust this line based on your Android device

mainMenu() {
    echo "Choose an action:"
    echo "1. Choose an image pack"
    echo "2. Preview image pack"
    echo "3. Exit"

    read -p "Enter the number of your choice: " action

    case $action in
        1) chooseImagePack ;;
        2) previewImagePack ;;
        3) echo "Exiting..." ; exit 0 ;;
        *) echo "Invalid choice. Please enter a number from the list." ;;
    esac

    mainMenu
}

chooseImagePack() {
    echo "Choose an image pack:"
    echo "1. Vanilla"
    echo "2. BEEESSS"
    echo "3. BEEESSS + Hikari Female"
    echo "4. BEEESSS + Hikari Male"
    echo "5. BEEESSS + Paril + Hairstyle Extended"

    read -p "Enter the number of your choice: " choice
    destinationFolder="img"

    [ ! -d "$destinationFolder" ] && mkdir "$destinationFolder"

    case $choice in
        1) sourceFolder="vanillaimg" ;;
        2) sourceFolder="beeesssimg" ;;
        3) sourceFolder="beeessshikarifemaleimg" ;;
        4) sourceFolder="beeessshikarimaleimg" ;;
        5) sourceFolder="beeesssparilhairstyleextendedimg" ;;
        *) echo "Invalid choice. Please enter a number from the list." ; return ;;
    esac

    [ ! -d "$sourceFolder" ] && { echo "Source folder \"$sourceFolder\" does not exist." ; exit 1 ; }

    cp -r "$sourceFolder"/* "$destinationFolder"/
    echo "Contents of \"$sourceFolder\" have been successfully copied to \"$destinationFolder\"."
}

previewImagePack() {
    echo "Choose an image pack to preview:"
    echo "1. Vanilla"
    echo "2. BEEESSS"
    echo "3. BEEESSS + Hikari Female"
    echo "4. BEEESSS + Hikari Male"
    echo "5. BEEESSS + Paril + Hairstyle Extended"

    read -p "Enter the number of the image pack to preview: " previewChoice

    case $previewChoice in
        1) previewFolder="vanillaimg" ;;
        2) previewFolder="beeesssimg" ;;
        3) previewFolder="beeessshikarifemaleimg" ;;
        4) previewFolder="beeessshikarimaleimg" ;;
        5) previewFolder="beeesssparilhairstyleextendedimg" ;;
        *) echo "Invalid choice. Please enter a number from the list." ; return ;;
    esac

    previewImage="$previewFolder/SampleImage.png"

    if [ -f "$previewImage" ]; then
        echo "Opening preview of \"$previewFolder\"..."
        am start -a android.intent.action.VIEW -d "file://$previewImage"
    else
        echo "No preview image found for \"$previewFolder\"."
    fi
}

mainMenu
