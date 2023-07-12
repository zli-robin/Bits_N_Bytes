## File Transfer (Optional)
🇬🇧 **English** - Fühlen dich frei, die Sprache des Markdowns zu ändern, indem du deine bevorzugte Sprache in der Navigationsleiste drückst!

ℹ️ This guide is optimized for Windows 10!

---

**WSL2 Install (if not existing)**

1. search for the program "Enable and Disable Windows Features
2. activate the option "Windows Subsystem for Linux (WSL)". Click on "OK".
3. wait until the installation is completed. Restart your computer after the installation is complete. 
4. Open the Microsoft Store and search for "WSL2". Install it.
5. open the Settings app and click "System". 6.
6. click on "About." Scroll down until you see "Windows Subsystem for Linux".
7. click the hyperlink and select the WSL2 operating system you installed.
8. restart your computer to apply the changes.

**Docker Desktop Install (if not available)**.

1. go to the Docker website and download the latest version of Docker Desktop. [Docker site](https://www.docker.com/products/docker-desktop/)
2. run the downloaded installation file and follow the on-screen instructions to install.
3. During the installation, you will be prompted to install the required services. Select the option to install them.
4. when the installation is complete, open Docker Desktop and log in with your account.
5. After successfully logging in, you will be prompted to enable the required services. Enable them and follow the on-screen instructions.
6. when all the services are successfully enabled, you can manage them on the Docker Desktop interface.
7. To test the Docker desktop, you can use the existing sample application.
8. Finally, restart Docker Desktop to ensure that all settings and services are enabled properly. You are now ready to use Docker Desktop.

**Set up file transfer**.

1. open the following path: `Bits_N_Bytes/AirDrop`.
2. right click in the file explorer and select `"Git Bash Here"`.
3. type the following command: `docker-compose up -d`.

ℹ️ To exit this enter the command `docker-compose down`.

On the Bits N Bytes side, it is the SnapDrop widget.
If everything worked, you should see something in the widget.
In this case, you can now access it with your mobile device or another client using the URL IP:8080. Below is an explanation of how to find your IP address.

---

**How to Determine Your IP Address**

1. Press the Windows + R key combination or go to the Windows search.
2. Type "cmd" and press Enter to open the command prompt.
3. Type "ipconfig" and press Enter.
4. Look for "Wireless LAN adapter Wi-Fi" or "Ethernet adapter Ethernet" in the list.
5. In this section, look for the "IPv4 Address."
6. This series of four numbers separated by periods is your IP address.

---