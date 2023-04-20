echo stelle sicher, dass Docker Desktop gestarted ist.
set /p MYNAME="Zum Bestätigen Enter drücken!"
docker pull linuxserver/snapdrop
docker run -d -p 8080:80 linuxserver/snapdrop
ipconfig
set /p MYNAME="Zum Beenden Enter drücken!"