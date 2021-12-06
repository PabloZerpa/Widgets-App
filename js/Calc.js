
export class Calculator
{

  //ACTIVE / DESACTIVE CALCULATOR
  active(calcState)
  {
    let btnCalc = document.getElementById("btnCalculator");
    btnCalc.addEventListener( 'click', function() {
      calcState = !calcState
      if(calcState) 
      {
        document.getElementById("btnCalculator").style.backgroundColor = "rgb(93, 156, 238)";
        document.getElementById("calcApp").style.display = "grid";
      } 
      else 
      {
        document.getElementById("btnCalculator").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("calcApp").style.display = "none";
      }
    });
  }

  start()
  {
    let calcBody = document.getElementById("calcApp");
    let varState = false;
  
    let state = document.getElementById("checkState");
    state.addEventListener("change", function (e)
    {
      varState = !varState;
      if(varState)
      {
        calcBody.style.width = 450 + "px";
        document.getElementById("modeCalc").style.marginLeft = 80 + "px";
        document.getElementById("buttons").innerHTML = 
        `
          <tr>
            <td> <button id="C" onclick="document.calc.textview.value = ''">C</button> </td>
            <td colspan="2"> <button id="←" onclick="document.calc.textview.value = document.calc.textview.value.slice(0,-1)">←</button> </td>
            <td> <button id="divide" onclick="document.calc.textview.value += '/'">/</button> </td>
            <td> <button id="pow" onclick="document.calc.textview.value = Math.pow(document.calc.textview.value,2)">xʸ</button> </td>
            <td> <button id="sin" onclick="document.calc.textview.value = Math.sin(document.calc.textview.value)">sin</button> </td>
          </tr>
          <tr>
            <td> <button onclick="document.calc.textview.value += 7">7</button> </td>
            <td> <button onclick="document.calc.textview.value += 8">8</button> </td>
            <td> <button onclick="document.calc.textview.value += 9">9</button> </td>
            <td> <button id="multiply" onclick="document.calc.textview.value += '*'">*</button> </td>
            <td> <button id="sqrt" onclick="document.calc.textview.value = Math.sqrt(document.calc.textview.value)">√</button> </td>
            <td> <button id="cos" onclick="document.calc.textview.value = Math.cos(document.calc.textview.value)">cos</button> </td>
          </tr>
          <tr>
            <td> <button onclick="document.calc.textview.value += 4">4</button> </td>
            <td> <button onclick="document.calc.textview.value += 5">5</button> </td>
            <td> <button onclick="document.calc.textview.value += 6">6</button> </td>
            <td> <button id="minus" onclick="document.calc.textview.value += '-'">-</button> </td>
            <td> <button id="reverse" onclick="document.calc.textview.value = 1 / document.calc.textview.value">xˉ¹</button> </td>
            <td> <button id="tan" onclick="document.calc.textview.value = Math.tan(document.calc.textview.value)">tan</button> </td>
          </tr>
          <tr>
            <td> <button onclick="document.calc.textview.value += 1">1</button> </td>
            <td> <button onclick="document.calc.textview.value += 2">2</button> </td>
            <td> <button onclick="document.calc.textview.value += 3">3</button> </td>
            <td> <button id="plus" onclick="document.calc.textview.value += '+'">+</button> </td>
            <td> <button id="facto">!x</button> </td>
            <td> <button id="exp" onclick="document.calc.textview.value = Math.exp(document.calc.textview.value)">exp</button> </td>
          </tr>
          <tr>
            <td colspan="2"> <button id="zero" onclick="document.calc.textview.value += 0">0</button> </td>
            <td> <button onclick="document.calc.textview.value += '.'">.</button> </td>
            <td> <button id="equals" onclick="document.calc.textview.value = eval(document.calc.textview.value)">=</button> </td>
            <td> <button id="module" onclick="document.calc.textview.value += '%'">Mod</button> </td>
            <td> <button id="log" onclick="document.calc.textview.value = Math.log(document.calc.textview.value)">log</button> </td>
          </tr>
        `;

        let btnFactorial = document.getElementById("facto");
        btnFactorial.addEventListener( 'click', function()
        {
          let factorial = 1;
          let x = document.calc.textview.value;
          x = parseInt(x);
          for (let i = 1; i <= x; i++) 
          {
              factorial *= i;
          }
          document.calc.textview.value = factorial;
        })
      }

      else
      {
        calcBody.style.width = 270 + "px";
        document.getElementById("modeCalc").style.marginLeft = 0;
        document.getElementById("buttons").innerHTML = 
        `
          <tr>
            <td> <button id="C" onclick="document.calc.textview.value = ''">C</button> </td>
            <td colspan="2"> <button id="←" onclick="document.calc.textview.value = document.calc.textview.value.slice(0,-1)">←</button> </td>
            <td> <button id="divide" onclick="document.calc.textview.value += '/'">/</button> </td>
          </tr>
          <tr>
            <td> <button onclick="document.calc.textview.value += 7">7</button> </td>
            <td> <button onclick="document.calc.textview.value += 8">8</button> </td>
            <td> <button onclick="document.calc.textview.value += 9">9</button> </td>
            <td> <button id="multiply" onclick="document.calc.textview.value += '*'">*</button> </td>
          </tr>
          <tr>
            <td> <button onclick="document.calc.textview.value += 4">4</button> </td>
            <td> <button onclick="document.calc.textview.value += 5">5</button> </td>
            <td> <button onclick="document.calc.textview.value += 6">6</button> </td>
            <td> <button id="minus" onclick="document.calc.textview.value += '-'">-</button> </td>
          </tr>
          <tr>
            <td> <button onclick="document.calc.textview.value += 1">1</button> </td>
            <td> <button onclick="document.calc.textview.value += 2">2</button> </td>
            <td> <button onclick="document.calc.textview.value += 3">3</button> </td>
            <td> <button id="plus" onclick="document.calc.textview.value += '+'">+</button> </td>
          </tr>
          <tr>
            <td colspan="2"> <button id="zero" onclick="document.calc.textview.value += 0">0</button> </td>
            <td> <button onclick="document.calc.textview.value += '.'">.</button> </td>
            <td> <button id="equals" onclick="document.calc.textview.value = eval(document.calc.textview.value)">=</button> </td>
          </tr>
        `;
      }
    })

  }
}