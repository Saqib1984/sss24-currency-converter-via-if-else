#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency_conversion = {
  PKR: {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0033,
    INR: 0.3,
  },
  USD: {
    USD: 1,
    PKR: 277.86,
    EUR: 0.92,
    INR: 83.29,
  },
  EUR: {
    EUR: 1,
    PKR: 302.02,
    USD: 1.08,
    INR: 89.95,
  },
  INR: {
    INR: 1,
    PKR: 3.34,
    EUR: 0.011,
    USD: 0.012,
  },
};
console.log(chalk.yellow.bold("\t WELCOME TO SSS MONEY EXCHANGE \t"));
let condition = true;
while (condition) {
  let answer: {
    from: "PKR" | "USD" | "EUR" | "INR";
    to: "PKR" | "USD" | "EUR" | "INR";
    amount: number;
  } = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      message: chalk.green.bold("Please Select Currency You Want To Convert"),
      choices: ["USD", "EUR", "PKR", "INR"],
    },
    {
      type: "list",
      name: "to",
      message: chalk.cyan.bold("Please Select Currency You Want To Get"),
      choices: ["USD", "EUR", "PKR", "INR"],
    },
    {
      type: "number",
      name: "amount",
      message: chalk.white.bold("Please Enter Amount"),
    },
  ]);
  let { from, to, amount } = answer;

  if (from && to && amount) {
    let result = currency_conversion[from][to] * amount;
    console.log(
      chalk.magenta.bold(
        `Your Converted Amount ${from} to ${to} is ${result.toFixed(2)}.${
          answer.to
        }`
      )
    );
  } else {
    console.log(chalk.bgRed("You Timed Out, Please Try Again Letter"));
  }
  console.log(
    chalk.yellow.bold("\t THANKS YOU FOR USING SSS MONEY EXCHANGE\t")
  );
  let answer_2 = await inquirer.prompt({
    name: "exit",
    type: "confirm",
    message: chalk.bgRed(
      `If You Want To Perform Another Transaction, Please Enter "Y", For Exit Enter "N"`
    ),
    default: false,
  });
  condition = answer_2.exit;
}
