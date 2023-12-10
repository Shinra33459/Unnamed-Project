@echo off

:mainMenu
echo Choose an action:
echo 1. Choose an image pack
echo 2. Preview image pack
echo 3. Exit

set /p action=Enter the number of your choice:

if "%action%"=="1" (
    call :chooseImagePack
) else if "%action%"=="2" (
    call :previewImagePack
) else if "%action%"=="3" (
    echo Exiting...
    exit /b 0
) else (
    echo Invalid choice. Please enter a number from the list.
)

goto mainMenu

:chooseImagePack
echo Choose an image pack:
echo 1. Vanilla
echo 2. BEEESSS
echo 3. BEEESSS + Hikari Female
echo 4. BEEESSS + Hikari Male
echo 5. BEEESSS + Paril + Hairstyle Extended

set /p choice=Enter the number of your choice:

set "destinationFolder=img"

if not exist "%destinationFolder%" (
    mkdir "%destinationFolder%"
)

if "%choice%"=="1" (
    echo You chose Vanilla.
    set "sourceFolder=vanillaimg"
) else if "%choice%"=="2" (
    echo You chose BEEESSS.
    set "sourceFolder=beeesssimg"
) else if "%choice%"=="3" (
    echo You chose BEEESSS + Hikari Female.
    set "sourceFolder=beeessshikarifemaleimg"
) else if "%choice%"=="4" (
    echo You chose BEEESSS + Hikari Male.
    set "sourceFolder=beeessshikarimaleimg"
) else if "%choice%"=="5" (
    echo You chose BEEESSS + Paril + Hairstyle Extended.
    set "sourceFolder=beeesssparilhairstyleextendedimg"
) else (
    echo Invalid choice. Please enter a number from the list.
    exit /b 1
)

if not exist "%sourceFolder%" (
    echo Source folder "%sourceFolder%" does not exist.
    exit /b 1
)

xcopy /E /Y "%sourceFolder%\*" "%destinationFolder%\"

echo Contents of "%sourceFolder%" have been successfully copied to "%destinationFolder%".
exit /b 0

:previewImagePack
echo Choose an image pack to preview:
echo 1. Vanilla
echo 2. BEEESSS
echo 3. BEEESSS + Hikari Female
echo 4. BEEESSS + Hikari Male
echo 5. BEEESSS + Paril + Hairstyle Extended

set /p previewChoice=Enter the number of the image pack to preview:

if "%previewChoice%"=="1" (
    set "previewFolder=vanillaimg"
) else if "%previewChoice%"=="2" (
    set "previewFolder=beeesssimg"
) else if "%previewChoice%"=="3" (
    set "previewFolder=beeessshikarifemaleimg"
) else if "%previewChoice%"=="4" (
    set "previewFolder=beeessshikarimaleimg"
) else if "%previewChoice%"=="5" (
    set "previewFolder=beeesssparilhairstyleextendedimg"
) else (
    echo Invalid choice. Please enter a number from the list.
    goto previewImagePack
)

set "previewImage=%previewFolder%\SampleImage.png"

if exist "%previewImage%" (
    echo Opening preview of "%previewFolder%"...
    start "" "%previewImage%"
) else (
    echo No preview image found for "%previewFolder%".
)

goto mainMenu
