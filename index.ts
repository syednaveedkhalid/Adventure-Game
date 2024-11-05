#! /usr/bin/env node
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
}

let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Please Enter Your Name: ",
  },
]);

let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Alien", "Zombie"],
  },
]);

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do {
    // Sketeton
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Drink Potion", "Run For Your Life.."],
      },
    ]);

    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name}'s fuel is ${p1.fuel}`);
        console.log(`${o1.name}'s fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Lose, Better Luck Next Time");
          process.exit();
        }
      } else {
        o1.fuelDecrease();
        console.log(`${p1.name}'s fuel is ${p1.fuel}`);
        console.log(`${o1.name}'s fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log("You Win!");
          process.exit();
        }
      }
    } else if (ask.opt == "Drink Potion") {
      p1.fuelIncrease();
      console.log(`You drank a health potion! Your fuel is ${p1.fuel}`);
    } else if (ask.opt == "Run For Your Life..") {
      console.log("You Lose, Better Luck Next Time");
      process.exit();
    }
  }

//   Alien
if (opponent.select == "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Drink Potion", "Run For Your Life.."],
      },
    ]);

    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name}'s fuel is ${p1.fuel}`);
        console.log(`${o1.name}'s fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Lose, Better Luck Next Time");
          process.exit();
        }
      } else {
        o1.fuelDecrease();
        console.log(`${p1.name}'s fuel is ${p1.fuel}`);
        console.log(`${o1.name}'s fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log("You Win!");
          process.exit();
        }
      }
    } else if (ask.opt == "Drink Potion") {
      p1.fuelIncrease();
      console.log(`You drank a health potion! Your fuel is ${p1.fuel}`);
    } else if (ask.opt == "Run For Your Life..") {
      console.log("You Lose, Better Luck Next Time");
      process.exit();
    }
  }

//   Zombie
if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Drink Potion", "Run For Your Life.."],
      },
    ]);

    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name}'s fuel is ${p1.fuel}`);
        console.log(`${o1.name}'s fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Lose, Better Luck Next Time");
          process.exit();
        }
      } else {
        o1.fuelDecrease();
        console.log(`${p1.name}'s fuel is ${p1.fuel}`);
        console.log(`${o1.name}'s fuel is ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log("You Win!");
          process.exit();
        }
      }
    } else if (ask.opt == "Drink Potion") {
      p1.fuelIncrease();
      console.log(`You drank a health potion! Your fuel is ${p1.fuel}`);
    } else if (ask.opt == "Run For Your Life..") {
      console.log("You Lose, Better Luck Next Time");
      process.exit();
    }
  }
} while (true);
