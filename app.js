// hometask1
const userInput = prompt("Metn daxil edin");
function containsNumbers(text) {
  const digits = "0123456789";
  for (let i = 0; i < text.length; i++) {
    if (digits.includes(text[i])) {
      return true;
    }
  }
  return false;
}

if (containsNumbers(userInput)) {
  console.log("Metn de reqem var");
} else {
  console.log("Metn de reqem yoxdur");
}
// hometask2
function Index1(text) {
    return text.indexOf(',');
  }
  
  // Misal mətn
  let text = "Hel,lo wo,rld";
  let index = Index1(text);
  
  if (index !== -1) {
    console.log("',' hərfi ilk dəfə indeks " + index + " yerləşir.");
  } else {
    console.log("',' hərfi mətndə yoxdur.");
  }
  