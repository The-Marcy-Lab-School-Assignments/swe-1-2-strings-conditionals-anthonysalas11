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
    return 'Hiss Hiss'
  }
  else if (breed === 'cat' && age < 5) {
    return `Mew Mew!`
  } else if (breed === 'cat' && age > 5) {
    return 'Meow Meow'
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

const formatName = () => {
};

const extractDomain = () => {
};

const startsWithVowel = () => {
};

const rotate = () => {
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
