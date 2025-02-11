let currentInput = null;
document.querySelectorAll('.numIn').forEach(input => {
  input.addEventListener('focus', () => {currentInput = input;
  })
})

function num(input) {
  if (currentInput) {
    currentInput.value += input;
  }
}

var selectedOption = 0;

function setOption(optionNumber) {
  selectedOption = optionNumber;
  
  document.getElementById("btn1").classList.remove("selected");
  document.getElementById("btn2").classList.remove("selected");
  document.getElementById("btn3").classList.remove("selected");
  document.getElementById("btn4").classList.remove("selected");
  
  if (selectedOption == 1) {
    // tab colors
    document.getElementById("btn1").style.backgroundColor = "#8B0000";
    document.getElementById("btn2").style.backgroundColor = "";
    document.getElementById("btn3").style.backgroundColor = "";
    document.getElementById("btn4").style.backgroundColor = "";
    // container1 color
    document.getElementById("box1").style.backgroundColor = "#0000";
    document.getElementById("box2").style.backgroundColor = "#8B0000";
    document.getElementById("box3").style.backgroundColor = "#8B0000";
    document.getElementById("container1").style.backgroundColor = "#8B0000";
    document.getElementById("formula").innerText = "Displacement with velocity";
    // placeholder
    document.getElementById('A1').placeholder = "Enter Initial Velocity";
    document.getElementById('A2').placeholder = "Enter Acceleration";
    document.getElementById('A3'). placeholder = "Enter Time";
  }
  else if (selectedOption == 2) {
    //tab colors
    document.getElementById("btn1").style.backgroundColor = "";
    document.getElementById("btn2").style.backgroundColor = "#00008B";
    document.getElementById("btn3").style.backgroundColor = "";
    document.getElementById("btn4").style.backgroundColor = "";
    // container 1 color
    document.getElementById("box1").style.backgroundColor = "#00008B";
    document.getElementById("box2").style.backgroundColor = "#00008B";
    document.getElementById("box3").style.backgroundColor = "#00008B";
    document.getElementById("container1").style.backgroundColor = "#00008B";
    document.getElementById("formula").innerText = "Velocity-displacement relation";
    // placeholder
    document.getElementById('A1').placeholder = "Enter Initial Velocity";
    document.getElementById('A2').placeholder = "Enter Acceleration";
    document.getElementById('A3'). placeholder = "Enter Distance";
  }
  else if (selectedOption == 3) {
    // tab colors
    document.getElementById("btn1").style.backgroundColor = "";
    document.getElementById("btn2").style.backgroundColor = "";
    document.getElementById("btn3").style.backgroundColor = "#006400";
    document.getElementById("btn4").style.backgroundColor = "";
    // container1 color
    document.getElementById("box1").style.backgroundColor = "#006400";
    document.getElementById("box2").style.backgroundColor = "#006400";
    document.getElementById("box3").style.backgroundColor = "#006400";
    document.getElementById("container1").style.backgroundColor = "#006400";
    document.getElementById("formula").innerText = "Final velocity with time";
    // placeholder
    document.getElementById('A1').placeholder = "Enter Initial Velocity";
    document.getElementById('A2').placeholder = "Enter Acceleration";
    document.getElementById('A3'). placeholder = "Enter Time";
  }
  else if (selectedOption == 4) {
    // tab colors
    document.getElementById("btn1").style.backgroundColor = "";
    document.getElementById("btn2").style.backgroundColor = "";
    document.getElementById("btn3").style.backgroundColor = "";
    document.getElementById("btn4").style.backgroundColor = "#4B0082";
    // container1 color
    document.getElementById("box1").style.backgroundColor = "#4B0082";
    document.getElementById("box2").style.backgroundColor = "#4B0082";
    document.getElementById("box3").style.backgroundColor = "#4B0082";
    document.getElementById("container1").style.backgroundColor = "#4B0082";
    document.getElementById("formula").innerText = "Displacement using average time";
    // placeholder
    document.getElementById('A1').placeholder = "Enter Initial Velocity";
    document.getElementById('A2').placeholder = "Enter Final Velocity";
    document.getElementById('A3'). placeholder = "Enter Time";
  }
  
  
  console.log(selectedOption);
}

function calculate() {
  if (selectedOption == 1) {
    var vi = parseFloat(document.getElementById('A1').value);
    var a = parseFloat(document.getElementById('A2').value);
    var t = parseFloat(document.getElementById('A3').value);
    
    finalAns = (vi)*(t) + (1/2)*(a)*((t)*(t));
    document.getElementById('answer').value = "Answer: The car travels " + finalAns.toFixed(2) + " meters.";
    
    document.getElementById('problem').innerText = "A bike starts at " + vi + " m/s and accelerates at " + a + " m/s² for " + t + " seconds. How far does it travel?";
    
    document.getElementById('given1').innerText = "vi = " + vi + " m/s (initial velocity)";
    document.getElementById('given2').innerText = "a = " + a + " m/s² (acceleration)";
    document.getElementById('given3').innerText = "t = " + t + " seconds (time)";
    
    document.getElementById('sol1').innerText = "d = (" + vi + ")(" + t + ") + 1/2 (" + a + ")(" + t + "²)";
    document.getElementById('sol2').innerText = "d = " + vi*t + " + 1/2 (" + a + ")(" + t + "²)";
    document.getElementById('sol3').innerText = "d = " + (vi*t) + " + " + (0.5*a) + " × " + (t*t) + " = " + finalAns;
  }
  
  else if (selectedOption == 2) {
    var vi = parseFloat(document.getElementById('A1').value);
    var a = parseFloat(document.getElementById('A2').value);
    var d = parseFloat(document.getElementById('A3').value);
    
    ans1 = vi + 2*(a)*(d);
    finalAns = Math.sqrt(ans1);
    document.getElementById('answer').value = "The final velocity is approximately " + finalAns.toFixed(2) + " m/s.";
    
    document.getElementById('problem').innerText = "A motorcycle moves at " + vi + " m/s and accelerates at " + a + " m/s² over " + d + " meters. What is the final velocity?";
    
    document.getElementById('given1').innerText = "vi = " + vi + " m/s (initial velocity)";
    document.getElementById('given2').innerText = "a = " + a + " m/s² (acceleration)";
    document.getElementById('given3').innerText = "d = " + d + " meters (distance)";
    
    document.getElementById('sol1').innerText = "vf = " + vi + " + 2 (" + a + ")(" + d + ")";
    document.getElementById('sol2').innerText = "vf = " + vi + " + " + 2*(a*d);
    document.getElementById('sol3').innerText = "vf = √" + (vi+(2*(a*d))) + " = " + finalAns;
  }
  
  else if (selectedOption == 3) {
    var vi = parseFloat(document.getElementById('A1').value);
    var a = parseFloat(document.getElementById('A2').value);
    var t = parseFloat(document.getElementById('A3').value);
    
    finalAns = vi + (a)*(t);
    document.getElementById('answer').value = "The final velocity is " + finalAns.toFixed(2) + " m/s.";
    
    document.getElementById('problem').innerText = "A runner starts at " + vi + " m/s and accelerates at " + a + " m/s² for " + t + " seconds. What is the final velocity?";
    
    document.getElementById('given1').innerText = "vi = " + vi + " m/s (initial velocity)";
    document.getElementById('given2').innerText = "a = " + a + " m/s² (acceleration)";
    document.getElementById('given3').innerText = "t = " + t + " seconds (time)";
    
    document.getElementById('sol1').innerText = "vf = vi + at";
    document.getElementById('sol2').innerText = "vf = " + vi + " + (" + a + ")(" + t + ")";
    document.getElementById('sol3').innerText = "vf = " + vi + " + " + (a*t) + " = " + finalAns;
  }
  
  else if (selectedOption == 4) {
    var vi = parseFloat(document.getElementById('A1').value);
    var vf = parseFloat(document.getElementById('A2').value);
    var t = parseFloat(document.getElementById('A3').value);
    
    ans1 = vi + vf;
    ans2 = (ans1/2);
    finalAns = ans2 * t;
    document.getElementById('answer').value = "The train travels " + finalAns.toFixed(2) + " meters.";
    
    document.getElementById('problem').innerText = "A train moves from " + vi + " m/s to " + vf + " m/s over " + t + " seconds. What is the distance traveled?";
    
    document.getElementById('given1').innerText = "vi = " + vi + " m/s (initial velocity)";
    document.getElementById('given2').innerText = "vf = " + vf + " m/s² (final velocity)";
    document.getElementById('given3').innerText = "t = " + t + " seconds (time)";
    
    document.getElementById('sol1').innerText = "d = " + vi + " + " + vf + " / 2 (" + t + ")";
    document.getElementById('sol2').innerText = "d = " + (vi+vf) + " / 2 × " + t;
    document.getElementById('sol3').innerText = "d = " + ((vi+vf)/2) + " × " + t + " = " + finalAns;
  }
}

function clearK() {
  document.getElementById('A1').value = null;
  document.getElementById('A2').value = null;
  document.getElementById('A3').value = null;
  document.getElementById('answer').value = null;
  document.getElementById('problem').innerText = null;
  document.getElementById('given1').innerText = null;
  document.getElementById('given2').innerText = null;
  document.getElementById('given3').innerText = null;
  document.getElementById('sol1').innerText = null;
  document.getElementById('sol2').innerText = null;
  document.getElementById('sol3').innerText = null;
}
