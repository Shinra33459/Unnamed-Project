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

set array_length=11

cd ../../

for /L %%i in (0,1,%array_length%) do (
	for /r .\version %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	for /r .\devTools\androidsdk\image\cordova\config.xml %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	for /r .\devTools\apkbuilder\config.xml %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	for /r .\devTools\apkbuilder\platforms\android\app\src\main\AndroidManifest.xml %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	for /r .\devTools\apkbuilder\platforms\android\app\src\main\assets\www\index.html %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	for /r .\devTools\apkbuilder\platforms\android\app\src\main\res\xml\config.xml %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	for /r .\game\01-config\sugarcubeConfig.js %%f in (*) do (
		powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%version% !newName[%%i]!' | Set-Content -Path '%%f'"
		echo Processed file: %%f
	)

	ren img img1

	ren "!newName[%%i]!img" img

	cd ./devTools/apkbuilder/

	call build_app_debug.bat

	cd ../../

	git reset --hard

	pause
)
