// // let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!');
// // console.log(10 + 10 + 33 + 88 - 44);

// const country = 'Ukraine';
// const continent = 'Europe';
// let population = 34;
// // let increasePopulation = population++;

// const isIsland = country === 'Ukraine' ? false : true;
// let language = 'candarin';
// const halfPopulation = population / 2;
// const populationOnFinland = 6;
// const checkPopulation = population > populationOnFinland;
// const averagePopulation = 33;
// const checkAvaragePopulation = population > averagePopulation;
// // console.log(increasePopulation);

// switch (language) {
//   case 'candarin':
//   case 'chinese':
//     console.log('number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log(`3rd place`);
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }

// const textAbovePopulation = `Portugal's population is above average`;
// const textBelowPopulation = `Portugal's population is below average`;

// population > 33
//   ? console.log(textAbovePopulation)
//   : console.log(textBelowPopulation);

// console.log(
//   `Island: ${isIsland}, Population: ${population}, checkAvaragePopulation: ${checkAvaragePopulation}, CheckPopulation: ${checkPopulation}, HalfPopulation: ${halfPopulation}, Country: ${country}, language: ${language}`
// );

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description);

// if (population > 33) {
//   console.log(`${country} is above average`);
// } else {
//   console.log(`${country} is ${population} million below average`);
// }

// if (population > 50 && !isIsland) {
//   console.log(`Sarah should live in ${country} :)`);
// } else {
//   console.log(`Sarah should not live in ${country} :(`);
// }

// const numNeighbours = +prompt(
//   'How many neighbour countries does your country have?'
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');`
// }

// const bmi = mass / (height * height);

// const marksWieght = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const johnsHeight = 1.95;

// const bmi = (mass, height) => {
//   return (mass / (height * height)).toFixed(0);
// };

// const markBMI = bmi(marksWieght, marksHeight);
// const JohnBMI = bmi(johnsWeight, johnsHeight);

// if (markBMI > JohnBMI) {
//   console.log('Mark has a higher BMI than John');
// } else {
//   console.log('John has a higher BMI than Mark');
// }

// console.log(`res1: ${markBMI} and res2: ${JohnBMI}`);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

console.log("test");
