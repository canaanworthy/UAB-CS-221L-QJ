window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
const weatherImage = document.getElementById("weatherImage");
   const errorMessage = document.getElementById("errorMessage");
cInput.addEventListener("input", function() {
   fInput.value = "";
});

fInput.addEventListener("input", function() {
   cInput.value = "";
});

   convertButton.addEventListener("click", function() {
      if (cInput.value !== "") {
         const celsius = parseFloat(cInput.value);

if (isNaN(celsius)) {
   errorMessage.textContent = cInput.value + " is not a number";
   return;
}

errorMessage.textContent = "";
fInput.value = convertCtoF(celsius);
         if (fInput.value < 32) {
   weatherImage.src = "images/cold.png";
}
else if (fInput.value <= 50) {
   weatherImage.src = "images/cool.png";
}
else {
   weatherImage.src = "images/warm.png";
}
      }
      else if (fInput.value !== "") {
         const fahrenheit = parseFloat(fInput.value);

if (isNaN(fahrenheit)) {
   errorMessage.textContent = fInput.value + " is not a number";
   return;
}

errorMessage.textContent = "";
cInput.value = convertFtoC(fahrenheit);
         if (fahrenheit < 32) {
   weatherImage.src = "images/cold.png";
}
else if (fahrenheit <= 50) {
   weatherImage.src = "images/cool.png";
}
else {
   weatherImage.src = "images/warm.png";
}
      }
   });
}


function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}
