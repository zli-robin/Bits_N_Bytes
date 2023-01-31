function changeImageAPI() {
  let img = document.getElementById("imgClickAndChangeAPI");
  if (img.src.match("../images/appDevAc.png")) {
    img.src = "../images/appDev.png";
  } else {
    img.src = "../images/appDevAc.png";
  }
}

function changeImagePLA() {
  let img = document.getElementById("imgClickAndChangePLA");
  if (img.src.match("../images/platformDevAc.png")) {
    img.src = "../images/platformDev.png";
  } else {
    img.src = "../images/platformDevAc.png";
  }
}

document.getElementById("imgClickAndChangeAPI").addEventListener("click", changeImageAPI);
document.getElementById("imgClickAndChangePLA").addEventListener("click", changeImagePLA);