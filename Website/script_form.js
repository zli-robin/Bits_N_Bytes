async function send_email(){
  var form = document.querySelector('form');
  let send_data = {};
  for (var i = 0; i < form.elements.length; i++) {
      var element = form.elements[i];
      send_data[element.name] = element.value;
  }
  const response = await fetch("../send_feedback_email.php", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(send_data),
  });
  const responseData = await response.text();
  responseData;
  alert("Erfolgreich gesendet");
}
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  send_email();
});