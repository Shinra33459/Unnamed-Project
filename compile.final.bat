@echo off

:: Set working directory
pushd %~dp0
@set TWEEGO_PATH="%~dp0devTools\tweego\StoryFormats"
setlocal enabledelayedexpansion

for /f "tokens=1-3 delims=/ " %%a in ("%DATE%") do (
    set day=%%a
    set month=%%b
	set date=%%c
)
for /f "tokens=1-2 delims=: " %%a in ("%TIME%") do (
    set hour=%%a
    set minute=%%b
)

set combinedDateTime=MY TIME_ !date!_!month! !hour!_!minute!
:: Run the appropriate compiler for the user's CPU architecture.
if %PROCESSOR_ARCHITECTURE% == AMD64 (
	CALL "%~dp0devTools\tweego\tweego_win64.exe" -o "%~dp0(!combinedDateTime!) Degrees of Lewdity VERSION.html" --head "%~dp0devTools\head.html" "%~dp0game" --module "%~dp0modules"
) else (
	CALL "%~dp0devTools\tweego\tweego_win86.exe" -o "%~dp0(!combinedDateTime!) Degrees of Lewdity VERSION.html" --head "%~dp0devTools\head.html" "%~dp0game" --module "%~dp0modules"
)