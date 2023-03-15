/*function displayfile(file, placeid) {
    console.log("FILENAME: " + file.name + " PLACEID: " + placeid)
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const marked = require('marked');
        const html = marked(text);
        document.getElementById("MarkdownText").innerHTML = html;
    }
    reader.readAsText(file);
}*/

function displayfile(file, placeid) {
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
  }
  var $ = function (id) { return document.getElementById(id); };
  new Editor($("file"), $("placeid"));