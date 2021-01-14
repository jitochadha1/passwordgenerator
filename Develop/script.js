// Assignment code here
function userInput() {
  var charLength = window.prompt("How many characters would you like youre password to be? Enter a number from 8-128");
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert('Must input a number that is from 8-128');

  } else {
    alert('Input OK');
  }
  var charType = window.prompt("What character types would you like to include? Enter one or more of the following types seperated by a space: 'lowercase', 'uppercase', 'numeric', and/or 'specialcharacters'");
  var charTypeArr = charType.split(" ");
  var charTypeArrayCheck = ['lowercase', 'uppercase', 'numeric', 'specialcharacters'];
  let charTypeValidator = charTypeArr.some((val) => charTypeArrayCheck.indexOf(val) !== -1);
  if (charTypeValidator) {
    alert('Input Ok');
  } else {
    alert("Must inlcude at least one of the following seperated by a space: 'lowercase', 'uppercase', 'numeric', 'specialcharacters'");
  }
  var password = generatePassword(charType, charLength);
  writePassword(password);
}

function generatePassword(charType, charLength) {
  var lowerCasepw = 'abcdefghigklmnopqrstuvwxyz';
  var upperCasepw = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericpw = '0123456789';
  var specialCharacterspw = '@#$%^&*';
  var password = '';

  if (charType === 'lowercase') {
    for (i = 0; i < charLength; i++) {
      password += lowerCasepw.charAt(Math.floor(Math.random() * lowerCasepw.length));
    }
    return password;
  }
  else if (charType === 'uppercase') {
    for (i = 0; i < charLength; i++) {
      password += upperCasepw.charAt(Math.floor(Math.random() * upperCasepw.length));
    }
    return password;
  }
  else if (charType === 'numeric') {
    for (i = 0; i < charLength; i++) {
      password += numericpw.charAt(Math.floor(Math.random() * numericpw.length));
    }
    return password;
  }
  else if (charType === 'specialcharacters') {
    for (i = 0; i < charLength; i++) {
      password += specialCharacterspw.charAt(Math.floor(Math.random() * specialCharacterspw.length));
    }
    return password;
  }
  else if (charType === 'lowercase uppercase') {
    for (i = 0; i < charLength; i++) {
      var lu = lowerCasepw.concat(upperCasepw);
      password += lu.charAt(Math.floor(Math.random() * lu.length));
    }
    return password;
  }
  else if (charType === 'lowercase numeric') {
    for (i = 0; i < charLength; i++) {
      var ln = lowerCasepw.concat(numericpw);
      password += ln.charAt(Math.floor(Math.random() * ln.length));
    }
    return password;
  }
  else if (charType === 'lowercase specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var ls = lowerCasepw.concat(specialCharacterspw);
      password += ls.charAt(Math.floor(Math.random() * ls.length));
    }
    return password;
  }
  else if (charType === 'uppercase numeric') {
    for (i = 0; i < charLength; i++) {
      var un = upperCasepw.concat(numericpw);
      password += un.charAt(Math.floor(Math.random() * un.length));
    }
    return password;
  }
  else if (charType === 'uppercase specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var us = upperCasepw.concat(specialCharacterspw);
      password += us.charAt(Math.floor(Math.random() * us.length));
    }
    return password;
  }
  else if (charType === 'numeric specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var ns = numericpw.concat(specialCharacterspw);
      password += ns.charAt(Math.floor(Math.random() * ns.length));
    }
    return password;
  }
  else if (charType === 'lowercase uppercase numeric') {
    for (i = 0; i < charLength; i++) {
      var lun = lowerCasepw.concat(upperCasepw).concat(numericpw);
      password += lun.charAt(Math.floor(Math.random() * lun.length));
    }
    return password;
  }
  else if (charType === 'lowercase uppercase specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var lus = lowerCasepw.concat(upperCasepw).concat(specialCharacterspw);
      password += lus.charAt(Math.floor(Math.random() * lus.length));
    }
    return password;
  }
  else if (charType === 'uppercase numeric specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var uns = upperCasepw.concat(numericpw).concat(specialCharacterspw);
      password += uns.charAt(Math.floor(Math.random() * uns.length));
    }
    return password;
  }
  else if (charType === 'lowercase numeric specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var lns = lowerCasepw.concat(numericpw).concat(specialCharacterspw);
      password += lns.charAt(Math.floor(Math.random() * lns.length));
    }
    return password;
  }
  else if (charType === 'lowercase uppercase numeric specialcharacters') {
    for (i = 0; i < charLength; i++) {
      var luns = lowerCasepw.concat(upperCasepw).concat(numericpw).concat(specialCharacterspw);
      password += luns.charAt(Math.floor(Math.random() * luns.length));
    }
    return password;
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", userInput);


