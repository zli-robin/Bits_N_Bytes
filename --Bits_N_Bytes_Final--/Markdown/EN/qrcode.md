## QR-Code
On our Dashboard, BitsNBytes you may have noticed that there is an option to create QR-Codes and read them. This Explain page should clear up all your questions regarding this. So let me endulge you in a guide to usage and modifyig of the qr-code generator.

### Guide on how to use it
As every other option on our dashboard it can be accessed through the options/tool menu. The options/tool menu is opened by `rightclicking` anywhere on the page, given that it isn't on a widget. To access the qr-code generator you must do the following click on `Tools > QR-Code-Generator`. Now you will see a new widget on your, it now prompts you to input/insert any text or url to a video or image. After you inserted what you want to transform or rather generate into a qr-code it click on `Generate QR-Code` it will then display the qr-code underneath the `Generate QR-Code` button. Now to read the QR-Code you can do the same `right-click > Tools > QR-Code-Reader` now you can upload your Generated QR-Code into the QR-Code reader and then it should read out the contents of the qr-code.

### Guide on how to modify it
Now onto how to modify the qr-code Tools. I will split these quick guides into to pieces the first will be on how to modify the qr-code generator and the second will be on how to modify the qr-code reader.

#### Modify - qr-code-generator
to modify the qr-code-generator you will need to navigate to `--Bits_N_Bytes_Final--/widgets/QRgen` there you will find the following files `qrgen.css, qrgen.html and qrgen.js` if you want to adjust how the widget looks feel free to modify/adjust the `html` and `css` to your likings, however if you want to modify/adjust the qrcode generation in itself you must modify/adjust the `qrgen.js` file, because this file actually handels the work.

#### Modify - qr-code-reader
Like the qrcode generator you can modify the qr-code-generator for this you will need to navigate to `--Bits_N_Bytes_Final--/widgets/qr-read` there you will find the following files `qr-read.css, qr-read.html and qr-read.js` if you want to adjust how the widget looks feel free to modify/adjust the `html` and `css` to your likings, however if you want to modify/adjust the qrcode generation in itself you must modify/adjust the `qr-read.js` file, because this file actually handels the work.
