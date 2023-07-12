## Dateiübertragung (Optional)

🇨🇭 **Deutsch** - Feel free to change the language of the Markdown by pressing your preferred button in the navbar!

ℹ️ Diese Anleitung ist für Windows 10 optimiert!

---

**WSL2 Installieren (falls nicht vorhanden)**

1. Suche nach dem Programm "Windows Features aktivieren und Deaktivieren".
2. Aktiviere die Option "Windows-Subsystem für Linux (WSL)". Klicke auf "OK".
3. Warte, bis die Installation abgeschlossen ist. Starte deinen Computer nach Abschluss der Installation neu.
4. Öffne den Microsoft Store und suche nach "WSL2". Installiere es.
5. Öffne die Einstellungen-App und klicke auf "System".
6. Klicke auf "Über". Scrolle nach unten, bis du "Windows-Subsystem für Linux" siehst.
7. Klicke auf den Hyperlink und wähle das WSL2-Betriebssystem aus, das du installiert hast.
8. Starte deinen Computer neu, um die Änderungen zu übernehmen.

**Docker Desktop Installieren (falls nicht vorhanden)**

1. Gehe zur Docker-Website und lade die neueste Version von Docker Desktop herunter. [Docker Seite](https://www.docker.com/products/docker-desktop/)
2. Starte die heruntergeladene Installationsdatei und folge den Bildschirmanweisungen zum Installieren.
3. Während der Installation wirst du aufgefordert, die benötigten Dienste zu installieren. Wähle die Option aus, um sie zu installieren.
4. Wenn die Installation abgeschlossen ist, öffne den Docker-Desktop und melde dich mit deinem Konto an.
5. Nach erfolgreicher Anmeldung wirst du aufgefordert, die benötigten Dienste zu aktivieren. Aktiviere sie und befolge die Anweisungen auf dem Bildschirm.
6. Wenn alle Dienste erfolgreich aktiviert sind, kannst du sie auf der Docker-Desktop-Oberfläche verwalten.
7. Um den Docker-Desktop zu testen, kannst du die vorhandene Beispielanwendung verwenden.
8. Zum Schluss starte den Docker-Desktop neu, um sicherzustellen, dass alle Einstellungen und Dienste ordnungsgemäß aktiviert sind. Du kannst nun Docker Desktop verwenden.

**Dateiübertragung einrichten**

1. Öffne den folgenden Pfad: `Bits_N_Bytes/AirDrop`.
2. Mache im Datei Explorer einen Rechtsklick und wähle `“Git Bash Here”`.
3. Gib den folgenden Befehl ein: `docker-compose up -d`.

ℹ️ Um diesen Prozess nach der Verwendung wieder zu beenden, gib den Befehl `docker-compose down` ein.

Auf der Bits N Bytes Seite ist es das Widget SnapDrop.
Wenn alles geklappt hat, sollte in dem Widget etwas angezeigt werden.
In diesem Fall kannst du nun mit deinem Mobilgerät oder einem anderen Client mit der URL `IP:8080` darauf zugreifen. Wie du deine IP-Adresse herausfindest, wird unten erklärt.

---

**IP-Adresse ermitteln**

1. Drücke die Tastenkombination Windows + R oder gehe in die Windows Suche.
2. Gib "cmd" ein und drücke die Eingabetaste,
3. Gib "ipconfig" ein und drücke die Eingabetaste.
4. Suche in der Liste nach "Wland oder Ethernet".
5. In diesem Abteil suche nach IPv4-Adresse.
6. Diese in 4 aufgeteilten zahlen Pakete ist deine gersuchte Zahl.

---