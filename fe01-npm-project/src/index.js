import dayjs from "dayjs";
import chalk from "chalk";

const now = dayjs().format("dddd, MMMM D, YYYY h:mm A");
console.log(chalk.green.bold("Hello from Node.js!"));
console.log(chalk.blue(`Today is ${now}`));