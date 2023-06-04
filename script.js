var savedPassword;
// Function to generate a random password
function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Function to generate a memorable password
function generateMemorablePassword(length) {
  const words = ['0','1','2','3','4','5','6','7','8','9','!','@','#','$','&', 'aroma','bagel','batter','beans','beer','carrot','biscuit','bread','broth','burger','burrito','butter','cake','candy','caramel','cider','cobbler','cocoa','coffee','cookie','cream','croissant  ','crumble','cuisine','curd','dessert','dish','drink','eggs','empanada','enchilada','entree','filet','fish','flour','caviar','cheese','meat','milk','mousse','muffin','mushroom','noodle','nut','oil','olive','omelette','pan','pasta','paste','pastry','pie','pizza','plate','pot','poutine','pudding','queso','raclette','recipe','rice','salad','salsa','sandwich','sauce','seasoning','skillet','soda','soup','soy','spice','steak','stew','syrup','taco','taquito','tartar','taste','tea','toast','tostada','vinegar','waffle','water','wheat','wine','wok','yeast','yogurt'];
  let password = '';
  let passwordLength = 0;

  while (passwordLength < length) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    const remainingLength = length - passwordLength;

    if (word.length <= remainingLength) {
      password += word;
      passwordLength += word.length; // Add 1 for the space between words
    } else {
      password += generateMemorablePassword(remainingLength);
      break;
    }
  }
  savedPassword = password;
  return password.trim();
}

const form = document.getElementById('generatorform');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const passwordLength = parseInt(document.getElementById('password-length').value);
  const memorablePassword = document.getElementById('memorable-password').value === 'yes';

  let password = '';

  if (memorablePassword) {
    password = generateMemorablePassword(passwordLength);
  } else {
    password = generateRandomPassword(passwordLength);
  }


  var outputElement = document.getElementById("output");

  outputElement.textContent = password;
});





function copy(){
  var output2 = document.getElementById("output").innerHTML;
  navigator.clipboard.writeText(output2);
}