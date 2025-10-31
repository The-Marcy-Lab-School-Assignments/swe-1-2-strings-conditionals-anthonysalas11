const measureRain = (inches) => {
  if (inches === 0) {
    return `drought`
  }
  else if (inches < 2) {
    return `dry`
  } else if (inches < 4) {
    return `average`
  }
  else if (inches < 6) {
    return `rainy`
  }
  else {
    return 'flood'
  }
};


const happyBirthdayPet = (breed, age) => {
  if (breed === "snake") {
    return 'Hiss hiss!'
  }
  else if (breed === 'cat' && age < 5) {
    return `Mew mew!`
  } else if (breed === 'cat' && age > 5) {
    return 'Meow meow'
  }
  else if (breed === dog && age < 5) {
    return
  }
  else if (breed === 'dog' && age >= 5 && age <= 10) {
    return 'Woof Woof'
  }

};

const funTypes = (jsType) => {

};

const rounder = () => {
};

const formatName = (first, last) => {

  console.log(first, last)

  let newFirst = first.slice(1).toLowerCase()
  let newLast = last.slice(1).toLowerCase()

  let firstNameStart = first[0].toUpperCase()
  let lastNameStart = last[0].toUpperCase()

  return `${firstNameStart + newFirst} ${lastNameStart + newLast}`

};
//console.log(formatName('MARY', 'JUNE'))
const extractDomain = (email) => {
  return email.split('@')[1]

};
console.log(extractDomain)




const startsWithVowel = (str) => {
  let arr = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str[0].toLowerCase()) {
      return true;
    }

  }
  return false
};

const rotate = (str, num) => {
  for (let i = 0; i < str.length; i++) {
    if ()
}
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
