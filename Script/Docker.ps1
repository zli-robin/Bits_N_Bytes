# Öffne die URL im Standardbrowser
Start-Process "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe"

# Wechsle in das Download-Verzeichnis
cd $env:userprofile\Downloads

# Fordere den Benutzer auf, den Download abzuschließen
Read-Host "Wenn Docker Desktop Installer heruntergeladen ist, drücke Enter"

# Führe die beiden Befehle aus
Start-Process -Wait "Docker Desktop Installer.exe" -ArgumentList "install"
wsl --install
echo Done!