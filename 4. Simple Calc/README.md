# Simple Calc

The **Simple Calc** is a Node.js command-line application that accepts a mathematical question as a string, parses it, performs the calculation, and prints the result. The application supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Installation

Follow these steps to set up **Simple Calc** on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/ashikibrahim07/crypton-tech-assesment-by-ashik-ibrahim.git
cd crypton-tech-assesment-by-ashik-ibrahim/4. Simple Calc
```

### 2. Install Dependencies

Since this is a simple command-line app, there are no external dependencies. But if you use any in the future, install them using:

```bash
npm install
```

### 3. Run the application

To run the application, use the following command in your terminal:

```bash
node index.js "What is 5 plus 7?"
```

Replace the string with any question following the format "What is X operation Y?", where X and Y are numbers and operation can be one of plus, minus, multiplied by, or divided by.

Example questions:

"What is 5 plus 7?"
"What is 10 minus 3?"
"What is 24 multiplied by 2?"
"What is 60 divided by 5?"

### 4. Output

The program will print the result in the following format:

```bash
5 plus 7 is 12
10 minus 3 is 7
24 multiplied by 2 is 48
60 divided by 5 is 12
```

### 5. Error Handling

If an invalid operation or a division by zero is encountered, the program will handle it gracefully with a relevant error message.

Example:

```bash
What is 5 divided by 0?
Error: Division by zero is not allowed.
```
