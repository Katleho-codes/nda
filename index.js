require("dotenv").config();


window.jsPDF = window.jspdf.jsPDF;


const signaturePad = new SignaturePad(
  document.getElementById("signature-pad"),
  {
    backgroundColor: "rgba(255, 255, 255, 0)",
    penColor: "rgb(0, 0, 0)",
    dotSize: 1,
  }
);
// const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("clear");

// saveButton.addEventListener("click", function () {
//   //   const data = signaturePad.toDataURL("image/png");
//   if (signaturePad."") {
//     alert("Please enter a signature");
//   } else {
//     const data = signaturePad
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     const link = document.createElement("a");
//     link.download = "employee.png";
//     link.href = data;
//     link.click();
//   }
// });

cancelButton.addEventListener("click", function (event) {
  signaturePad.clear();
});

// function saveCanvas() {
//   if (signaturePad."") {
//     alert("Please enter a signature");
//   } else {
//     const data = signaturePad
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     const link = document.createElement("a");
//     link.download = "employee.png";
//     link.href = data;
//     link.click();
//   }
// }

// Form begins here

// const form = document.getElementById("form");
const submit = document.getElementById("submit");
const doc = new jsPDF();

submit.addEventListener("click", function () {
  doc.setTextColor(255, 0, 0);
  doc.setFontSize(22);
  doc.setFont(undefined, "bold");
  doc.text("Non-disclosure Agreement", 52.5, 20);

  doc.setTextColor(13, 13, 0);
  doc.setFontSize(11);
  doc.text(
    "During the period of my employment with the Company and for a period of 1 year following",
    21,
    30
  );
  doc.setFont(undefined, "bold");
  doc.text(
    "The termination of my employment with the Company, I agree as follows:",
    21,
    35
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "1.  I will fully comply with all procedures, policies and rules of the Company relating to",
    21,
    48
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "the use and protection of confidential information, including but not limited to",
    21,
    53
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "information relating to the Company and Samsung Electronics Co.,Ltd.",
    21,
    58
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "2.  I will not alter or modify information disclosed to me by Samsung Electronics or",
    21,
    63
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "relating to Samsung Electronics except as may be required during the course of",
    21,
    68
  );
  doc.setFont(undefined, "normal");
  doc.text("normal business operations", 21, 73);
  doc.setFont(undefined, "normal");
  doc.text(
    "3.  I will not disclose confidential information provided to me by Samsung Electronics to",
    21,
    78
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "unauthorized personnel or third parties who do not need to know the information,",
    21,
    83
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "whether they may are Company employees, Samsung employees, customers or",
    21,
    88
  );
  doc.setFont(undefined, "normal");
  doc.text("temporary employee, etc.", 21, 93);
  doc.setFont(undefined, "normal");
  doc.text(
    "4.  I will not attempt to access any information of Samsung Electronics if I do not have",
    21,
    98
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "written authorization from the Company or Samsung Electronics to do so, and I will",
    21,
    103
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "only access such information that is related to my position or function.",
    21,
    108
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "5.  I will use G-SPN system issued to me by the Company only for the purpose of",
    21,
    113
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "conducting business relating to the Company or Samsung Electronics and for no other",
    21,
    118
  );
  doc.setFont(undefined, "normal");
  doc.text("purpose.", 21, 123);
  doc.setFont(undefined, "normal");
  doc.text(
    "6.  I will consent to a random inspection of user authority for G-SPN system if they find",
    21,
    128
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "confidential information of the Company, I agree to delete immediately or transfer to",
    21,
    133
  );
  doc.setFont(undefined, "normal");
  doc.text("inspector.", 21, 138);
  doc.setFont(undefined, "normal");
  doc.text(
    "7.  I fully understand that my ID and password are for my personnel use only, and I will.",
    21,
    143
  );
  doc.setFont(undefined, "normal");
  doc.text(
    "not disclose them to a third party or permit any other person to use them.",
    21,
    148
  );
  doc.setFont(undefined, "bold");
  doc.text(
    "I have carefully read all of the Agreement and agree that all of the foregoing restrictions",
    21,
    156
  );
  doc.setFont(undefined, "bold");
  doc.text(
    "are reasonable and fair, and I further agree to abide by them faithfully. I understand",
    21,
    161
  );
  doc.setFont(undefined, "bold");
  doc.text(
    "that I may be subject to civil or criminal penalties in the event that I am found to be in",
    21,
    166
  );
  doc.setFont(undefined, "bold");
  doc.text(
    "violation of the terms of this agreement, and I agree to provide compensation for any",
    21,
    171
  );
  doc.setFont(undefined, "bold");
  doc.text(
    "loss or damage I may cause the Company or Samsung Electronics due to unauthorized",
    21,
    176
  );
  doc.setFont(undefined, "bold");
  doc.text("disclosure of information.", 21, 181);

  doc.setDrawColor(0);
  doc.setFillColor(13, 13, 13);
  doc.rect(21, 186, 175, 10, "F");
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text(
    "NB: ID’s will not be created without below details (block letters). Scan file must have one NDA only",
    24,
    192
  );

  const day = document.getElementById("dd").value;
  const month = document.getElementById("mm").value;
  const year = document.getElementById("yyyy").value;
  const accountCode = document.getElementById("account_code").value;
  const accountCompanyName = document.getElementById(
    "account_company_name"
  ).value;
  const userName = document.getElementById("user_name").value;
  const userEmail = document.getElementById("user_email").value;
  const select = document.getElementById("role").value;

  // Check for full name
  const regexPattern = /^[\p{L}]([-']?[\p{L}]+)*( [\p{L}]([-']?[\p{L}]+)*)+$/;
  // Check for email address

  const error = document.querySelector(".error");

  doc.setFontSize(12);
  doc.setFont(undefined, "normal");
  doc.setTextColor(13, 13, 13);

  doc.text(`(DD) ${day}`, 21, 208);
  doc.text(`(MM) ${month}`, 39, 208);
  doc.text(`(YYYY) ${year}`, 56, 208);
  doc.text(`Account Code: ${accountCode}`, 21, 216);
  doc.text(`Account/Company Name: ${accountCompanyName}`, 21, 224);
  doc.text(`Users full Name: ${userName}`, 21, 232);
  doc.text(`Users Email: ${userEmail}`, 21, 240);
  doc.text(`Role of the User: ${select}`, 21, 248);

  // canvas integration
  doc.rect(120, 216, 80, 50, "S");
  doc.text("Signature", 152, 208);
  const data = signaturePad
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  doc.addImage(`${data}`, "image/png", 128, 220, 80, 50);

  if (day.length > 1 || day === "" || day.length < 1) {
    error.style.display = "block";
    error.innerHTML = "Please enter a day";
    return false;
  } else if (month.length > 2 || month === "" || month.length === "0") {
    error.style.display = "block";
    error.innerHTML = "Please enter a month";
    return false;
  } else if (year === "" || year.length < 4) {
    error.style.display = "block";
    error.innerHTML = "Please enter a valid year";
    return false;
  } else if (accountCode === "") {
    error.style.display = "block";
    error.innerHTML = "Please enter a valid account code";
    return false;
  } else if (regexPattern.test(userName)) {
    error.style.display = "block";
    error.innerHTML = "Please enter a valid full name";
    return false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail)) {
    error.style.display = "block";
    error.innerHTML = "Please enter a valid email address";
    return false;
  } else if (signaturePad.isEmpty()) {
    error.style.display = "block";
    error.innerHTML = "Please enter a signature";
    return false;
  } else {
    doc.save(`${userName}.pdf`);

  

  // doc.save("a4.pdf");
});
