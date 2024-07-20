setlocal enabledelayedexpansion

set /p version=Enter the version number:

set newName[0]=vanilla
set newName[1]=beeesss
set newName[2]=beeessshikarifemale
set newName[3]=beeessshikarimale
set newName[4]=beeesssparilhairstyleextended
set newName[5]=beeessswax
set newName[6]=beeesssokbd
set newName[7]=lllysmasc
set newName[8]=susato
set newName[9]=mizz
set newName[10]=mvcr

set index=0

if defined newName[%index%] (
    set index+=1
    goto find_length
)

set array_length=index

echo The length of the array is %array_length%

cd ../../

@REM for /L %%i in (0,1,%array_length%) do (
	powershell -Command "(Get-Content -Path '.\version') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\version'"

	powershell -Command "(Get-Content -Path '.\devTools\androidsdk\image\cordova\config.xml') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\devTools\androidsdk\image\cordova\config.xml'"

	powershell -Command "(Get-Content -Path '.\devTools\apkbuilder\config.xml') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\devTools\apkbuilder\config.xml'"

	powershell -Command "(Get-Content -Path '.\devTools\apkbuilder\platforms\android\app\src\main\AndroidManifest.xml') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\devTools\apkbuilder\platforms\android\app\src\main\AndroidManifest.xml'"

	powershell -Command "(Get-Content -Path '.\devTools\apkbuilder\platforms\android\app\src\main\assets\www\index.html') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\devTools\apkbuilder\platforms\android\app\src\main\assets\www\index.html'"

	powershell -Command "(Get-Content -Path '.\devTools\apkbuilder\platforms\android\app\src\main\res\xml\config.xml') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\devTools\apkbuilder\platforms\android\app\src\main\res\xml\config.xml'"

	powershell -Command "(Get-Content -Path '.\game\01-config\sugarcubeConfig.js') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '.\game\01-config\sugarcubeConfig.js'"

	ren img img1

	ren "!newName[%%i]!img" img

	cd ./devTools/apkbuilder/

	call build_app_debug.bat

	cd ../../

	git reset --hard

	pause
@REM )

endlocal
