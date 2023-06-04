var outputElement = document.getElementById("output");
outputElement.textContent = "???";

function strengthRater(){  
    var passwordM = document.getElementById('textbox').value;
    var strength = calculateStrength(passwordM);

    var output = document.getElementById("output");
    output.textContent = strength;
    if (strength === "Weak") 
    {
        output.style.color = "red";
    } 
    else if (strength === "Medium")
    {
        output.style.color = "orange";
    }
    else if (strength === "Strong") 
    {
        output.style.color = "green";
    } 
    else if (strength === "Very strong")
    {
        output.style.color = "darkgreen";
    }
    else {}
}

function calculateStrength(passwordM) {
    let totalStrength = "Weak";
    let score = 0;
    let passwordLength = passwordM.length;



    for(let i = 0; i < passwordLength; i++){

    //0 -9
    var special = ['!','@','#','$',"&","^","*","(",")","%"];

    if (passwordM.indexOf(special[i]) != -1)
    {
        score += 10;
    }
    }




    if (passwordLength >8 && passwordLength<12)
    {

        score += 10;
    }
    else if(passwordLength>=12 && passwordLength<20)
    {

        score += 20;

    }else if(passwordLength>= 20){
        
        score +=30;
    }



// totalstrength is weak if less than 20
    if(score >= 10 && score < 20){
        totalStrength = "Medium";
    }
    else if(score >= 20 && score< 30)
    {
        totalStrength = "Strong";
    }
    else if (score >= 30)
    {
        totalStrength = "Very strong";
    }

    return totalStrength;
}


function togglePasswordVisibility() {
    const passwordInput = document.getElementById('textbox');
    const toggleEye = document.querySelector('.toggle-eye');
    if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
        toggleEye.innerHTML = '&#x1f441;'; 
      } else {
        passwordInput.type = 'text';
        toggleEye.innerHTML = '&#x1f441;'; 
      }

      
    // if (passwordInput.type === 'password') {
    //   passwordInput.type = 'text';
    //   toggleEye.innerHTML = '&#x1f441;'; 
    // } else {
    //   passwordInput.type = 'password';
    //   toggleEye.innerHTML = '&#x1f441;'; 
    // }
  }