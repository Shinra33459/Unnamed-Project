set /p version=Enter the version number:

set newName[0]=vanilla
@REM set newName[1]=beeesss
@REM set newName[2]=beeessshikarifemale
@REM set newName[3]=beeessshikarimale
@REM set newName[4]=beeesssparilhairstyleextended
@REM set newName[5]=beeessswax
@REM set newName[6]=beeesssokbd
@REM set newName[7]=lllysmasc
@REM set newName[8]=susato
@REM set newName[9]=mizz
@REM set newName[10]=mvcr

set array_length=1

cd ../../

for /L %%i in (0,1,%array_length%) do (
	for /r .\version %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	for /r .\devTools\androidsdk\image\cordova\config.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	for /r .\devTools\apkbuilder\config.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	for /r .\devTools\apkbuilder\platforms\android\app\src\main\AndroidManifest.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	for /r .\devTools\apkbuilder\platforms\android\app\src\main\assets\www\index.html %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	for /r .\devTools\apkbuilder\platforms\android\app\src\main\res\xml\config.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	for /r .\game\01-config\sugarcubeConfig.js %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"

	ren img img1

	ren "!newName[%%i]!img" img

	cd ./devTools/apkbuilder/

	call build_app_debug.bat

	cd ../../

	git reset --hard
)
