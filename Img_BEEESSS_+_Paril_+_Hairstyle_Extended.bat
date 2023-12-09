@echo off
set "sourceFolder=beeesssparilhairstyleextendedimg"
set "destinationFolder=img"

if not exist "%sourceFolder%" (
    echo Source folder "%sourceFolder%" does not exist.
    exit /b 1
)

if not exist "%destinationFolder%" (
    mkdir "%destinationFolder%"
)

xcopy /E /Y "%sourceFolder%\*" "%destinationFolder%\"

echo Contents of "%sourceFolder%" have been successfully copied to "%destinationFolder%".
exit /b 0
