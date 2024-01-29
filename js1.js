function generate() {
  var num1 = document.getElementById("num_color").value;
   var num2 = document.getElementById("Type_color").value;
  if (num2 == 1) {
    for (var i = 0; i < num1; i++) {
      createDivHex();
    }
  } else {
    for (var i = 0; i < num1; i++) {
      createDivRgb();
    }
  }
}

function createDivHex() {
  var div = document.createElement("div");
  var hexColors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#FFC0CB",
    "#008000",
    "#FF4500",
    "#8B0000",
    "#1E90FF",
    "#FFD700",
    "#FF1493",
    "#228B22",
    "#4B0082",
    "#FFFFE0",
    "#9932CC",
    "#00CED1",
  ];
  var ranNum = hexColors[Math.floor(Math.random() * 20)];
  div.innerHTML = ranNum;

  div.style.color = "white";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.fontSize = "30px";
  div.style.width = "5cm";
  div.style.height = "5cm";
  div.style.margin= "2px";
  div.style.backgroundColor = ranNum;
  div.style.borderRadius = "3px";

  document.getElementById("Colors").appendChild(div);
  
}

function createDivRgb() {
  var div = document.createElement("div");
  var rgbColors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 165, 0)",
    "rgb(128, 0, 128)",
    "rgb(255, 192, 203)",
    "rgb(0, 128, 0)",
    "rgb(255, 69, 0)",
    "rgb(139, 0, 0)",
    "rgb(30, 144, 255)",
    "rgb(255, 215, 0)",
    "rgb(255, 20, 147)",
    "rgb(34, 139, 34)",
    "rgb(75, 0, 130)",
    "rgb(255, 255, 224)",
    "rgb(153, 50, 204)",
    "rgb(0, 206, 209)",
  ];
  var ranNum = rgbColors[Math.floor(Math.random() * 20)];
  div.innerHTML = ranNum;

  div.style.color = "white";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.fontSize = "23px";
  div.style.width = "5cm";
  div.style.height = "5cm";
  div.style.backgroundColor = ranNum;
  div.style.borderRadius = "3px";

  document.getElementById("Colors").appendChild(div);
}
function refreshSite() {
  location.reload();
}