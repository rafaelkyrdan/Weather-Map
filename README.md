WeatherMap
==========

Not finished. WeatherMap free weather map

##English

*About Application*

WeatherMap is a desktop application that provides free weather data.
WeatherMap wide range of weather data - map with current weather, quantity of precipitation,
wind speed, clouds cover, sea level pressure maps, temperature, snow precipitation,
data from weather stations, data from radars, data for cities.
Weather data is recieved from OpenWeatherMap api.

*How to install?*

**Windows**

You can download application.

1. Unzip the archive.
2. Directory consist of application and required files.
3. Run the file cypher.

Versions:

**cooming soon**

**or** create application from source (for advanced users). You should download
project node-webkit https://github.com/rogerwang/node-webkit .
There are some commands for console.


1. Go to your project directory  cd ~/Projects/my_app
2. Create a zip file (this is built into XP, Vista and 7)
3. Copy all of your files into the zip file, retaining directory
structure and making sure that the package.json file is in the root directory
(if you make a zip file containing a folder with your stuff in it, then it's not going to work)
4. Rename the file extension from .zip to .nw. By default, file extensions may be hidden.
You need to (press alt), go to folder options and uncheck "Hide extensions for known file types" to be able to rename the zip.
5. On Windows, the easiest way to run the app is to drag the folder onto nw.exe.

Making an executable file out of a .nw file

1. copy /b nw.exe+app.nw app.exe

Then, all you have to do is zip app.exe and required DLLs, and distribute them.
And please also note that the nw.pak must also be distributed along with the app.exe.


**Mac**

**cooming soon**

**Linux**

You can download application.

1. Unzip the application.
2. Run the file cypher. Do not delete file nw.pak , it is part of application.

Versions:

**cooming soon**

**or** create application from source (for advanced users). You should download
project node-webkit https://github.com/rogerwang/node-webkit .
There are some commands for console.


1. Go to your project directory a la cd ~/Projects/my_app
2. Run zip -r ../${PWD##*/}.nw *
3. Your fully-prepared .nw file shall be located right outside of your project directory
4. Move it to directory of node-webkit project.
5. Run ./nw app.nw

Making an executable file out of a .nw file

1. cat /usr/bin/nw app.nw > app && chmod +x app

*Licence*

Read the text of licence.
