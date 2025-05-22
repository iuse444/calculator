
document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('inputbox');
  let buttons = document.querySelectorAll('button');
  let string = "";
  let displayString = "";
  let arr = Array.from(buttons);

  arr.forEach(button =>{
    button.addEventListener('click', (e) => {
      const btn = e.target.innerHTML;

      // Justera font storlek beroende på antal chars
      if (displayString.length > 10) {
        input.style.fontSize = '16px';
      } else {
          input.style.fontSize = '40px';
      }

      if (btn === "="){
        try{
          string = eval(string).toString();
          displayString = string;
          input.value = displayString;
        } catch (error) {
            string ="";
            displayString = "Error";
            input.value = displayString;

        }
      
      } else if (btn === "AC"){
          string ="";
          displayString = "";
          input.value = displayString;
          input.style.fontSize = '40px';

      } else if (btn === "DEL") {
          string = string.slice(0, -1);
          displayString = displayString.slice(0, -1);
          input.value = displayString;
      
      } else if (btn === "π") {
          string += Math.PI.toString();
          displayString += "π";
          input.value = displayString;
      
      } else if (btn === "√") {
          try {
              const sqrtValue = Math.sqrt(parseFloat(string));
              string = sqrtValue.toString();
              displayString = string;
              input.value = displayString;
              
          }  catch {
              string ="";
              displayString = "Error";
              input.value = displayString;
          }

      } else if (btn === "^"){
          string += "**";
          displayString += "^";
          input.value = displayString;
      
      } else if (btn === "÷"){
          string += "/";
          displayString += "÷";
          input.value = displayString;

      } else {
          string += btn;
          displayString += btn;
          input.value = displayString;
      }

    });
  });

  document.getElementById('plus_min').addEventListener('click', () => {
      if (string) {
          const number = parseFloat(string);
          string = (number * -1).toString();
          displayString = string;
          input.value = displayString;
      }  

  });

});
