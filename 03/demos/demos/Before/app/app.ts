//We are going to tell the compiler about the file to be included here
//player.ts file's code we need here so we create a reference path here for it in the beginning as follows:
/// <reference path="player.ts" />


function startGame() {
  // starting a new game
  let playerName: string | undefined = getInputValue('playername'); 

  logPlayer(playerName);

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';

  postScore(100, playerName);
  postScore(-5, playerName);  //for testing the function template for prototype
}

function logPlayer(name: string = 'Mutimath Player'): void {
  console.log(`New Game starting for player : ${name}`);
}

// function getInputValue(elementID: string): string | undefined {
//   const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
//   if (inputElement.value === '') {
//     return undefined;
//   }
//   else {
//     return inputElement.value;
//   }
// }

function postScore(score: number, playerName?: string): void {

  // declaring a template for reusing the function of the following type
  let logger: (value: string) => void;
  if (score < 0) {
    logger = logError;
  }
  else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score : ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

// function logMessage(message: string): void{
//   console.log(message);
// }
// Given below is the equivalent  arrow function
// can remove return type here
const logMessage = (message: string) => console.log(message);
// logMessage('Sohail')

//Taking advantage of functions types in typescript
//the above function (arrow) and the below function have same return and parameter type
function logError(err: string): void {
  // console.log(err);
  console.error(err);
}

//Interface implementation here:
// these are not compiled down to .js files
// let myResult: Results = {
//   playerName: 'Sahil',
//   score: 450,
//   problemCount: 10,
//   factor: 5
// };

// let player: Person = {
//   name: 'Manav',
//   age: 20, //optional here
//   formatName: () => 'Dan'
// };

// Class implementation here
// object declaration for a class
const firstPlayer: Player = new Player();
firstPlayer.name = 'Lana';
console.log(firstPlayer.formatName());