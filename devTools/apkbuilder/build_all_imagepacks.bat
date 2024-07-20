cd ../../
git reset --hard

for /r .\version %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

for /r .\devTools\androidsdk\image\cordova\config.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

for /r .\devTools\apkbuilder\config.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

for /r .\devTools\apkbuilder\platforms\android\app\src\main\AndroidManifest.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

for /r .\devTools\apkbuilder\platforms\android\app\src\main\assets\www\index.html %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

for /r .\devTools\apkbuilder\platforms\android\app\src\main\res\xml\config.xml %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

for /r .\game\01-config\sugarcubeConfig.js %%f in (*) do powershell -Command "(Get-Content -Path '%%f') -replace 'DoLP version', 'DoLP v0.%CI_PIPELINE_IID%' | Set-Content -Path '%%f'"

cd ./devTools/apkbuilder/
call build_app_debug.bat
