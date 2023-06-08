var signaturePad = new SignaturePad(document.getElementById("signature-pad"), {
  backgroundColor: "rgba(255, 255, 255, 0)",
  penColor: "rgb(0, 0, 0)",
  dotSize: 1,
});
var saveButton = document.getElementById("save");
var cancelButton = document.getElementById("clear");

saveButton.addEventListener("click", function () {
  //   var data = signaturePad.toDataURL("image/png");
  if (signaturePad.isEmpty()) {
    alert("Please enter a signature");
  } else {
    var data = signaturePad
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    var link = document.createElement("a");
    link.download = "employee.png";
    link.href = data;
    link.click();
  }
});

cancelButton.addEventListener("click", function (event) {
  signaturePad.clear();
});
