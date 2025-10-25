function generatePassword(length) {
  const passwdStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIdx = Math.floor(Math.random() * passwdStr.length);
    password += passwdStr[randomIdx];
  }
  return password;
}

console.log(generatePassword(8));
