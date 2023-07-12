async function check(letter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 0.01)
    })
}

var key;
var letter;
var fehler = 0;
document.addEventListener('keyup', (e) => {
    if (e.key != "Shift" && run === true) {
        if (e.key === letter) {
            console.log(b);
            document.getElementById("text_alt").innerHTML = text.substring(0, b);
            document.getElementById("text_aktuell").innerHTML = test_s[b];
            document.getElementById("text2").innerHTML = text.substring(b + 1);
            if (test_s[b] === " ") document.getElementById("text_aktuell").innerHTML = " ";
            if (test_s[b + 1] === " ") document.getElementById("text2").innerHTML = " " + text.substring(b + 2);
            if (test_s[b - 1] === " ") document.getElementById("text_alt").innerHTML = text.substring(0, b - 1) + " ";
            b++;
            if (b === 2) {
                seconds = new Date() / 1000;
            }
            if (b > text.length) {
                document.getElementById("text_alt").innerHTML = "";
                document.getElementById("text_aktuell").innerHTML = "";
                if (fehler != 0) {
                    document.getElementById("text2").innerHTML = "Du hattest " + text.length + " Zeichen und hast eine Fehlerquote von " + Math.round(fehler / text.length * 100, 2) + "%. Bei " + fehler + " Fehlern. Und du hast dafür " + ((Math.round((new Date() / 1000 - seconds) * 100)) / 100) + " Sekunden gebraucht. Das entspricht " + ((Math.round((text.length / ((new Date() / 1000 - seconds) / 60)) * 100)) / 100) + " Zeichen pro Minute";
                } else {
                    document.getElementById("text2").innerHTML = "Bravo du hast keine Fehler bei " + text.length + " Zeichen. Und du hast dafür " + ((Math.round((new Date() / 1000 - seconds) * 100)) / 100) + " Sekunden gebraucht. Das entspricht " + ((Math.round((text.length / ((new Date() / 1000 - seconds) / 60)) * 100)) / 100) + " Zeichen pro Minute";
                }
                run = false
            } else {
                letter = test_s[b - 1];
            }
        } else {
            fehler++;
        }
    }
});

var run = false;
var loop = false;
var b = 1;
var test_s = [];
var text;
var seconds

async function start() {
    if (document.getElementById("input_text").value === "") {
        alert("bitte gib einen Text zum schreiben an");
        return;
    }
    seconds = new Date() / 1000;
    if (run === false) {
        b = 0;
        run = true;
        fehler = 0;
        text = document.getElementById("input_text").value;
        test_s = text.split("");
        console.log(test_s);
        document.getElementById("text2").innerHTML = text.substring(1);
        document.getElementById("text_aktuell").innerHTML = test_s[0];
        letter = test_s[0];
        b++;

    }
}
