WeatherMap
==========

Weather Map. Not finished

##English

*About Application*

**cooming soon**

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

##Russian

*Про приложение.*

**cooming soon**

*Как установить?*

**Windows**

Вы можете скачать готовое приложение.

1.Разархивируйте приложение.
2.Директория содержит приложение и все библиотеки от которых зависит работа приложения.
2.Запустите файл cypher.

Версии:

**cooming soon**


**или** собрать приложение из исходников (для продвинутых пользователей). Вам необходимо скачать
проэкт node-webkit https://github.com/rogerwang/node-webkit
и вот такие команды:

1. Перейдите в папку проэкта  ~/Projects/my_app
2. Создайте .zip архив
3. Поменяйте расширение с .zip на расширение .nw
4. Переместите его в папку где находится проэкт node-webkit
5. Самый простой способ запустить приложение, это перетащить app.nw на nw.exe.

Для создания исполняемого файла с .nw файла выполните

1. copy /b nw.exe+app.nw app.exe

Помните что приложение зависит от файла nw.pak и необходимых .dll файлов.


**Mac**

**cooming soon**

**Linux**

Вы можете скачать готовое приложение.

1.Разархивируйте приложение.
2.Запустите файл cypher. Не удаляйте файл nw.pak он является частью приложения.

Версии:

**cooming soon**


**или** собрать приложение из исходников (для продвинутых пользователей). Вам необходимо скачать
проэкт node-webkit https://github.com/rogerwang/node-webkit
и вот такие команды:

1. Перейдите в папку проэкта a la cd ~/Projects/my_app
2. Выполните zip -r ../${PWD##*/}.nw *
3. Теперь во внешней директории у вас появился в файл с расширением.nw
4. Переместите его в папку где находится node-webkit
5. Выполните ./nw app.nw

Для создания исполняемого файла с .nw файла выполните

1. cat /usr/bin/nw app.nw > app && chmod +x app

*Лицензия.*

Читай текст лицензии.

