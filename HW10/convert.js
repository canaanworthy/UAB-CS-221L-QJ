window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");

   convertButton.addEventListener("click", function() {
      if (cInput.value !== "") {
         const celsius = parseFloat(cInput.value);
         fInput.value = convertCtoF(celsius);
      }
      else if (fInput.value !== "") {
         const fahrenheit = parseFloat(fInput.value);
         cInput.value = convertFtoC(fahrenheit);
      }
   });
}


function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}
