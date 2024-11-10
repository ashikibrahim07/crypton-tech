const readline = require("readline");

// Create a readline interface to accept user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to process the question
const processQuestion = (question) => {
  // Extract the numbers and operator from the question
  const regex = /(\d+)\s+(plus|minus|multiplied by|divided by)\s+(\d+)/;
  const match = question.match(regex);

  if (match) {
    const num1 = parseInt(match[1]);
    const operator = match[2];
    const num2 = parseInt(match[3]);

    let result;

    // Handle division by zero
    if (operator === "divided by" && num2 === 0) {
      console.log("Error: Division by zero");
      rl.close();
      return;
    }

    // Perform the operation based on the operator
    switch (operator) {
      case "plus":
        result = num1 + num2;
        break;
      case "minus":
        result = num1 - num2;
        break;
      case "multiplied by":
        result = num1 * num2;
        break;
      case "divided by":
        result = num1 / num2;
        break;
      default:
        console.log("Unsupported operation");
        rl.close();
        return;
    }

    console.log(`${num1} ${operator} ${num2} is ${result}`);
    askNextQuestion(); // Ask the next question after displaying the result
  } else {
    console.log(
      'Invalid question format. Please ask in the format "What is 5 plus 7?"'
    );
    askNextQuestion(); // Ask the next question even if the format is invalid
  }
};

// Function to prompt the user for the next question
const askNextQuestion = () => {
  rl.question(
    'Enter a calculation (e.g., "What is 5 plus 7?") or type "exit" to quit: ',
    (question) => {
      if (question.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
      } else {
        processQuestion(question); // Process the current question
      }
    }
  );
};

// Start the first question prompt
askNextQuestion();
