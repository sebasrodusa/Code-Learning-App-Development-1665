export const tutorialsData = [
  {
    id: 'python-basics',
    title: 'Python Fundamentals',
    language: 'python',
    level: 'beginner',
    duration: '2 hours',
    lessons: 8,
    description: 'Learn the basics of Python programming including variables, data types, and control structures.',
    steps: [
      {
        title: 'Hello World',
        content: 'Let\'s start with the classic "Hello, World!" program. This is traditionally the first program you write in any language.',
        code: 'print("Hello, World!")',
        explanation: 'The print() function outputs text to the console. Everything inside the quotes is displayed exactly as written.',
        expectedOutput: 'Hello, World!'
      },
      {
        title: 'Variables and Data Types',
        content: 'Variables store data that can be used throughout your program. Python has several built-in data types.',
        code: `# String variable
name = "Alice"
print(name)

# Integer variable
age = 25
print(age)

# Float variable
height = 5.6
print(height)

# Boolean variable
is_student = True
print(is_student)`,
        explanation: 'Variables are containers for storing data. Python automatically determines the data type based on the value you assign.'
      },
      {
        title: 'Basic Operations',
        content: 'Python supports various mathematical and string operations.',
        code: `# Math operations
a = 10
b = 3
print(f"Addition: {a + b}")
print(f"Subtraction: {a - b}")
print(f"Multiplication: {a * b}")
print(f"Division: {a / b}")

# String operations
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)`,
        explanation: 'Python supports standard mathematical operations and string concatenation using the + operator.'
      },
      {
        title: 'Lists',
        content: 'Lists are ordered collections of items that can be modified.',
        code: `# Creating a list
fruits = ["apple", "banana", "orange"]
print(fruits)

# Accessing elements
print(fruits[0])  # First element
print(fruits[-1])  # Last element

# Adding elements
fruits.append("grape")
print(fruits)

# List length
print(f"Number of fruits: {len(fruits)}")`,
        explanation: 'Lists use square brackets and can contain different types of data. Index 0 is the first element, -1 is the last.'
      },
      {
        title: 'Conditional Statements',
        content: 'Use if statements to make decisions in your code.',
        code: `age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Multiple conditions
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")`,
        explanation: 'Conditional statements allow your program to make decisions based on different conditions.'
      },
      {
        title: 'Loops',
        content: 'Loops let you repeat code multiple times.',
        code: `# For loop with range
for i in range(5):
    print(f"Count: {i}")

# For loop with list
colors = ["red", "green", "blue"]
for color in colors:
    print(f"Color: {color}")

# While loop
count = 0
while count < 3:
    print(f"While count: {count}")
    count += 1`,
        explanation: 'For loops iterate over sequences, while loops continue as long as a condition is true.'
      },
      {
        title: 'Functions',
        content: 'Functions are reusable blocks of code that perform specific tasks.',
        code: `def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
print(message)

# Function with multiple parameters
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(f"5 + 3 = {result}")

# Function with default parameter
def introduce(name, age=25):
    return f"Hi, I'm {name} and I'm {age} years old."

print(introduce("Bob"))
print(introduce("Charlie", 30))`,
        explanation: 'Functions help organize code and avoid repetition. They can take parameters and return values.'
      },
      {
        title: 'Putting It All Together',
        content: 'Let\'s create a simple program that uses everything we\'ve learned.',
        code: `# Simple number guessing game
import random

def number_guessing_game():
    secret_number = random.randint(1, 10)
    attempts = 0
    max_attempts = 3
    
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 10.")
    
    while attempts < max_attempts:
        guess = int(input("Enter your guess: "))
        attempts += 1
        
        if guess == secret_number:
            print(f"Congratulations! You guessed it in {attempts} attempts!")
            return
        elif guess < secret_number:
            print("Too low!")
        else:
            print("Too high!")
    
    print(f"Sorry! The number was {secret_number}")

# Note: This is a demo - input() won't work in this playground
print("This would be an interactive guessing game!")`,
        explanation: 'This example combines variables, functions, conditionals, and loops to create a complete program.'
      }
    ]
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Fundamentals',
    language: 'javascript',
    level: 'beginner',
    duration: '2.5 hours',
    lessons: 9,
    description: 'Master the basics of JavaScript including variables, functions, and DOM manipulation.',
    steps: [
      {
        title: 'Hello World',
        content: 'Let\'s start with outputting text in JavaScript.',
        code: 'console.log("Hello, World!");',
        explanation: 'console.log() prints messages to the browser\'s console, which is useful for debugging.',
        expectedOutput: 'Hello, World!'
      },
      {
        title: 'Variables and Data Types',
        content: 'JavaScript has several ways to declare variables and different data types.',
        code: `// Variable declarations
let name = "Alice";
const age = 25;
var city = "New York";

console.log(name);
console.log(age);
console.log(city);

// Data types
let isStudent = true;
let score = 95.5;
let hobbies = ["reading", "coding", "gaming"];
let person = { name: "Bob", age: 30 };

console.log(typeof isStudent);
console.log(typeof score);
console.log(typeof hobbies);
console.log(typeof person);`,
        explanation: 'Use let for variables that can change, const for constants, and avoid var in modern JavaScript.'
      },
      {
        title: 'Functions',
        content: 'Functions are fundamental building blocks in JavaScript.',
        code: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Calling functions
console.log(greet("Alice"));
console.log(add(5, 3));
console.log(multiply(4, 6));`,
        explanation: 'JavaScript has multiple ways to define functions. Arrow functions are a modern, concise syntax.'
      },
      {
        title: 'Arrays and Objects',
        content: 'Arrays and objects are essential data structures in JavaScript.',
        code: `// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
fruits.push("grape");
console.log(fruits);

// Array methods
console.log(fruits.length);
console.log(fruits.join(", "));

// Objects
let person = {
    name: "John",
    age: 25,
    city: "Boston",
    introduce: function() {
        return \`Hi, I'm \${this.name} from \${this.city}\`;
    }
};

console.log(person.name);
console.log(person["age"]);
console.log(person.introduce());`,
        explanation: 'Arrays store ordered lists, objects store key-value pairs. Both are very flexible in JavaScript.'
      },
      {
        title: 'Control Flow',
        content: 'Control the flow of your program with conditionals and loops.',
        code: `// If statements
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(\`Count: \${i}\`);
}

// For...of loop
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(\`Color: \${color}\`);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(\`While count: \${count}\`);
    count++;
}`,
        explanation: 'JavaScript provides various ways to control program flow and iterate over data.'
      },
      {
        title: 'Array Methods',
        content: 'JavaScript arrays have many useful built-in methods.',
        code: `let numbers = [1, 2, 3, 4, 5];

// Map - transform each element
let doubled = numbers.map(n => n * 2);
console.log(doubled);

// Filter - keep elements that match condition
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

// Reduce - combine all elements into single value
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(\`Sum: \${sum}\`);

// Find - get first element that matches
let found = numbers.find(n => n > 3);
console.log(\`Found: \${found}\`);

// Some and every
console.log(\`Some > 3: \${numbers.some(n => n > 3)}\`);
console.log(\`All > 0: \${numbers.every(n => n > 0)}\`);`,
        explanation: 'Array methods like map, filter, and reduce are powerful tools for data manipulation.'
      },
      {
        title: 'Error Handling',
        content: 'Handle errors gracefully with try-catch blocks.',
        code: `// Basic try-catch
try {
    let result = 10 / 0;
    console.log(result);
    
    // This will throw an error
    let obj = null;
    console.log(obj.property);
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This always runs");
}

// Function with error handling
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));`,
        explanation: 'Try-catch blocks help handle errors without crashing your program.'
      },
      {
        title: 'Async Programming Basics',
        content: 'Learn about asynchronous programming with promises and async/await.',
        code: `// Simulating async operation with setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Using promises
console.log("Starting...");
delay(1000).then(() => {
    console.log("After 1 second");
    return delay(1000);
}).then(() => {
    console.log("After 2 seconds");
});

// Using async/await
async function asyncExample() {
    console.log("Async function start");
    await delay(1000);
    console.log("Async: After 1 second");
    await delay(1000);
    console.log("Async: After 2 seconds");
}

asyncExample();

// Fetch example (simulated)
async function fetchData() {
    try {
        console.log("Fetching data...");
        // Simulated API call
        await delay(1000);
        console.log("Data fetched successfully!");
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData();`,
        explanation: 'Async programming allows you to handle operations that take time without blocking the main thread.'
      },
      {
        title: 'Complete Example',
        content: 'A todo list application that demonstrates all concepts.',
        code: `// Todo List Application
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    
    addTodo(text) {
        const todo = {
            id: this.nextId++,
            text: text,
            completed: false,
            createdAt: new Date()
        };
        this.todos.push(todo);
        console.log(\`Added: "\${text}"\`);
        return todo;
    }
    
    completeTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
            console.log(\`Completed: "\${todo.text}"\`);
        } else {
            console.log("Todo not found");
        }
    }
    
    removeTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index !== -1) {
            const removed = this.todos.splice(index, 1)[0];
            console.log(\`Removed: "\${removed.text}"\`);
        } else {
            console.log("Todo not found");
        }
    }
    
    listTodos() {
        console.log("\\n=== Todo List ===");
        if (this.todos.length === 0) {
            console.log("No todos yet!");
            return;
        }
        
        this.todos.forEach(todo => {
            const status = todo.completed ? "✓" : "○";
            console.log(\`\${status} \${todo.id}: \${todo.text}\`);
        });
        
        const completed = this.todos.filter(t => t.completed).length;
        console.log(\`\\nCompleted: \${completed}/\${this.todos.length}\`);
    }
}

// Demo usage
const todoList = new TodoList();

todoList.addTodo("Learn JavaScript");
todoList.addTodo("Build a project");
todoList.addTodo("Practice coding");

todoList.listTodos();

todoList.completeTodo(1);
todoList.listTodos();

todoList.removeTodo(2);
todoList.listTodos();`,
        explanation: 'This example combines classes, arrays, objects, and methods to create a functional todo list.'
      }
    ]
  },
  {
    id: 'html-basics',
    title: 'HTML Fundamentals',
    language: 'html',
    level: 'beginner',
    duration: '1.5 hours',
    lessons: 6,
    description: 'Learn the structure of web pages with HTML elements, attributes, and semantic markup.',
    steps: [
      {
        title: 'Basic HTML Structure',
        content: 'Every HTML document follows a basic structure with DOCTYPE, html, head, and body elements.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page!</p>
</body>
</html>`,
        explanation: 'The DOCTYPE tells the browser this is HTML5. The head contains metadata, while the body contains visible content.'
      },
      {
        title: 'Headings and Paragraphs',
        content: 'HTML provides six levels of headings and paragraph elements for text content.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Headings and Paragraphs</title>
</head>
<body>
    <h1>Main Title (H1)</h1>
    <h2>Section Title (H2)</h2>
    <h3>Subsection Title (H3)</h3>
    <h4>Sub-subsection Title (H4)</h4>
    <h5>Minor Heading (H5)</h5>
    <h6>Smallest Heading (H6)</h6>
    
    <p>This is a paragraph of text. It can contain multiple sentences and will wrap automatically when the line becomes too long for the container.</p>
    
    <p>This is another paragraph. Notice how paragraphs are separated by default spacing.</p>
</body>
</html>`,
        explanation: 'Headings create hierarchy in your content. H1 is the most important, H6 is the least. Paragraphs group related sentences.'
      },
      {
        title: 'Links and Images',
        content: 'Links connect pages together, and images make content more visual and engaging.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Links and Images</title>
</head>
<body>
    <h1>Links and Images Demo</h1>
    
    <h2>Links</h2>
    <p>Visit <a href="https://www.google.com">Google</a> for search.</p>
    <p>Learn more <a href="https://developer.mozilla.org" target="_blank">about web development</a>.</p>
    <p>Send me an <a href="mailto:hello@example.com">email</a>.</p>
    
    <h2>Images</h2>
    <img src="https://via.placeholder.com/300x200/0066cc/ffffff?text=Sample+Image" 
         alt="A sample placeholder image" 
         width="300" 
         height="200">
    
    <p>Images should always have descriptive alt text for accessibility.</p>
</body>
</html>`,
        explanation: 'Links use the href attribute to specify destinations. Images need src for the file path and alt for accessibility.'
      },
      {
        title: 'Lists',
        content: 'HTML provides ordered (numbered) and unordered (bulleted) lists to organize information.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lists</title>
</head>
<body>
    <h1>Different Types of Lists</h1>
    
    <h2>Unordered List (Bullets)</h2>
    <ul>
        <li>HTML - Structure</li>
        <li>CSS - Styling</li>
        <li>JavaScript - Interactivity</li>
    </ul>
    
    <h2>Ordered List (Numbers)</h2>
    <ol>
        <li>Plan your website</li>
        <li>Write the HTML</li>
        <li>Add CSS styling</li>
        <li>Add JavaScript functionality</li>
        <li>Test and deploy</li>
    </ol>
    
    <h2>Nested Lists</h2>
    <ul>
        <li>Frontend Technologies
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Backend Technologies
            <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP</li>
            </ul>
        </li>
    </ul>
</body>
</html>`,
        explanation: 'Use ul for bullet points, ol for numbered lists. Lists can be nested inside each other for organization.'
      },
      {
        title: 'Forms',
        content: 'Forms collect user input through various input types and controls.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forms</title>
</head>
<body>
    <h1>Contact Form</h1>
    
    <form action="#" method="post">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="1" max="120">
        </div>
        
        <div>
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Choose a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
            </select>
        </div>
        
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>
        </div>
        
        <div>
            <input type="checkbox" id="newsletter" name="newsletter">
            <label for="newsletter">Subscribe to newsletter</label>
        </div>
        
        <div>
            <button type="submit">Send Message</button>
            <button type="reset">Clear Form</button>
        </div>
    </form>
</body>
</html>`,
        explanation: 'Forms use various input types for different data. Labels improve accessibility by connecting to inputs.'
      },
      {
        title: 'Semantic HTML',
        content: 'Semantic elements provide meaning to your content structure, improving accessibility and SEO.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Welcome to Our Website</h1>
            <p>This is the main content area of our homepage.</p>
        </section>
        
        <section id="about">
            <h2>About Us</h2>
            <article>
                <h3>Our Story</h3>
                <p>We started this company with a simple mission...</p>
            </article>
            
            <aside>
                <h3>Quick Facts</h3>
                <ul>
                    <li>Founded in 2020</li>
                    <li>50+ employees</li>
                    <li>Global reach</li>
                </ul>
            </aside>
        </section>
        
        <section id="services">
            <h2>Our Services</h2>
            <article>
                <h3>Web Development</h3>
                <p>We create modern, responsive websites.</p>
            </article>
            
            <article>
                <h3>Mobile Apps</h3>
                <p>Native and cross-platform mobile applications.</p>
            </article>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <address>
            Contact us at: <a href="mailto:info@company.com">info@company.com</a>
        </address>
    </footer>
</body>
</html>`,
        explanation: 'Semantic elements like header, nav, main, section, article, aside, and footer give meaning to page structure.'
      }
    ]
  },
  {
    id: 'css-basics',
    title: 'CSS Fundamentals',
    language: 'css',
    level: 'beginner',
    duration: '2 hours',
    lessons: 7,
    description: 'Learn to style web pages with CSS including selectors, properties, layout, and responsive design.',
    steps: [
      {
        title: 'CSS Basics and Selectors',
        content: 'CSS (Cascading Style Sheets) controls the appearance of HTML elements.',
        code: `/* Basic CSS structure */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}

/* Element selector */
h1 {
    color: #333;
    text-align: center;
}

/* Class selector */
.highlight {
    background-color: yellow;
    padding: 5px;
}

/* ID selector */
#main-content {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Descendant selector */
.highlight p {
    font-weight: bold;
}

/* Multiple selectors */
h2, h3 {
    color: #2c3e50;
}`,
        explanation: 'CSS uses selectors to target HTML elements. Element selectors target tags, classes use dots, IDs use hash symbols.'
      },
      {
        title: 'Colors and Typography',
        content: 'Control colors, fonts, and text styling to create visually appealing content.',
        code: `/* Color properties */
.primary-color {
    color: #3498db;
    background-color: #ecf0f1;
}

.secondary-color {
    color: rgb(231, 76, 60);
    background-color: rgba(52, 152, 219, 0.1);
}

/* Typography */
.large-text {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.6;
}

.small-text {
    font-size: 14px;
    font-style: italic;
    text-decoration: underline;
}

/* Font families */
.serif-font {
    font-family: "Times New Roman", serif;
}

.monospace-font {
    font-family: "Courier New", monospace;
    background-color: #f8f8f8;
    padding: 10px;
    border-left: 4px solid #3498db;
}

/* Text alignment and spacing */
.centered-text {
    text-align: center;
    letter-spacing: 2px;
    word-spacing: 5px;
}

.justified-text {
    text-align: justify;
    text-indent: 30px;
}`,
        explanation: 'CSS offers many ways to specify colors (hex, rgb, rgba, named colors) and control typography for better readability.'
      },
      {
        title: 'Box Model',
        content: 'Understanding the CSS box model is crucial for layout and spacing.',
        code: `/* Box model demonstration */
.box-example {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 30px;
    border: 5px solid #3498db;
    background-color: #ecf0f1;
    
    /* Box sizing */
    box-sizing: border-box;
}

/* Different margin and padding values */
.spacing-example {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-left: 25px;
    
    /* Shorthand: top right bottom left */
    padding: 10px 20px 15px 25px;
}

/* Centered container */
.centered-container {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Border styles */
.border-examples {
    border-top: 2px solid red;
    border-right: 3px dashed blue;
    border-bottom: 4px dotted green;
    border-left: 5px double orange;
    
    /* Rounded corners */
    border-radius: 15px;
}`,
        explanation: 'The box model includes content, padding, border, and margin. Box-sizing: border-box includes padding and border in width.'
      },
      {
        title: 'Flexbox Layout',
        content: 'Flexbox provides powerful tools for creating flexible layouts.',
        code: `/* Flex container */
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
}

/* Flex items */
.flex-item {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

/* Flex properties */
.flex-grow {
    flex-grow: 1;
}

.flex-shrink {
    flex-shrink: 0;
    width: 200px;
}

/* Direction and wrap */
.flex-column {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/* Alignment options */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background-color: #ecf0f1;
}

.flex-space-around {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}`,
        explanation: 'Flexbox makes it easy to create responsive layouts with flexible item sizing and alignment options.'
      },
      {
        title: 'CSS Grid Layout',
        content: 'CSS Grid provides a powerful two-dimensional layout system.',
        code: `/* Grid container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    padding: 20px;
    background-color: #f8f9fa;
}

/* Grid items */
.grid-item {
    background-color: #e74c3c;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
}

/* Spanning multiple columns/rows */
.grid-item-large {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #2ecc71;
}

/* Named grid lines */
.grid-named {
    display: grid;
    grid-template-columns: [sidebar-start] 200px [sidebar-end main-start] 1fr [main-end];
    grid-template-rows: [header-start] 60px [header-end content-start] 1fr [content-end];
    gap: 10px;
    height: 400px;
}

.grid-header {
    grid-column: sidebar-start / main-end;
    grid-row: header-start / header-end;
    background-color: #34495e;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-sidebar {
    grid-column: sidebar-start / sidebar-end;
    grid-row: content-start / content-end;
    background-color: #95a5a6;
    color: white;
    padding: 20px;
}

.grid-main {
    grid-column: main-start / main-end;
    grid-row: content-start / content-end;
    background-color: #ecf0f1;
    padding: 20px;
}`,
        explanation: 'CSS Grid excels at creating complex layouts with precise control over rows and columns.'
      },
      {
        title: 'Responsive Design',
        content: 'Make your designs work on all screen sizes with responsive techniques.',
        code: `/* Mobile-first approach */
.responsive-container {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
}

/* Tablet styles */
@media (min-width: 768px) {
    .responsive-container {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .responsive-container {
        width: 60%;
        padding: 30px;
        font-size: 18px;
    }
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Responsive images */
.responsive-image {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: 8px;
}

/* Flexible units */
.flexible-text {
    font-size: clamp(16px, 4vw, 24px);
    line-height: 1.6;
}`,
        explanation: 'Media queries allow different styles for different screen sizes. Mobile-first design starts with mobile styles.'
      },
      {
        title: 'Animations and Transitions',
        content: 'Add smooth animations and transitions to enhance user experience.',
        code: `/* Transitions */
.smooth-transition {
    background-color: #3498db;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.smooth-transition:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Keyframe animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.pulse-animation {
    animation: pulse 2s infinite;
}

/* Loading spinner */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

/* Hover effects */
.card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}`,
        explanation: 'Transitions provide smooth changes between states. Keyframe animations create complex, repeating animations.'
      }
    ]
  },
  {
    id: 'lua-basics',
    title: 'Lua Programming Basics',
    language: 'lua',
    level: 'beginner',
    duration: '1.5 hours',
    lessons: 6,
    description: 'Learn Lua, a lightweight and powerful scripting language used in game development and embedded systems.',
    steps: [
      {
        title: 'Hello World and Variables',
        content: 'Lua is a lightweight, high-level programming language designed for embedded systems and scripting.',
        code: `-- Hello World in Lua
print("Hello, World!")

-- Variables in Lua
local name = "Alice"
local age = 25
local height = 5.6
local isStudent = true

print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", isStudent)

-- Global vs Local variables
globalVar = "I'm global"
local localVar = "I'm local"

print(globalVar)
print(localVar)`,
        explanation: 'Lua uses print() for output. Variables are global by default, use "local" for local scope. No need to declare types.'
      },
      {
        title: 'Data Types and Operations',
        content: 'Lua has several basic data types and supports various operations.',
        code: `-- Lua data types
local number = 42
local float = 3.14
local string = "Hello Lua"
local boolean = true
local nothing = nil

-- Check types
print(type(number))     -- number
print(type(string))     -- string
print(type(boolean))    -- boolean
print(type(nothing))    -- nil

-- Math operations
local a = 10
local b = 3

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Modulo:", a % b)
print("Exponentiation:", a ^ b)

-- String operations
local first = "Hello"
local second = "World"
local combined = first .. " " .. second
print("Combined:", combined)

-- String length
print("Length:", #combined)

-- Boolean operations
local x = true
local y = false
print("AND:", x and y)
print("OR:", x or y)
print("NOT:", not x)`,
        explanation: 'Lua is dynamically typed. Use .. for string concatenation and # for length. Math operations work as expected.'
      },
      {
        title: 'Tables - Lua\'s Main Data Structure',
        content: 'Tables are Lua\'s only data structure, serving as arrays, dictionaries, and objects.',
        code: `-- Array-like table
local fruits = {"apple", "banana", "orange"}
print("First fruit:", fruits[1])  -- Lua arrays start at 1
print("Second fruit:", fruits[2])
print("Third fruit:", fruits[3])

-- Add to table
fruits[4] = "grape"
table.insert(fruits, "mango")  -- Insert at end
print("Number of fruits:", #fruits)

-- Dictionary-like table
local person = {
    name = "John",
    age = 30,
    city = "New York"
}

print("Name:", person.name)
print("Age:", person["age"])  -- Alternative syntax

-- Add new key
person.job = "Developer"
person["salary"] = 75000

-- Mixed table
local mixed = {
    "first",           -- index 1
    "second",          -- index 2
    name = "Mixed",
    count = 42,
    nested = {
        x = 10,
        y = 20
    }
}

print("First item:", mixed[1])
print("Name:", mixed.name)
print("Nested x:", mixed.nested.x)

-- Iterate over table
print("\\nIterating over person:")
for key, value in pairs(person) do
    print(key, ":", value)
end

print("\\nIterating over fruits:")
for i, fruit in ipairs(fruits) do
    print(i, ":", fruit)
end`,
        explanation: 'Tables use 1-based indexing for arrays. Use pairs() for key-value iteration, ipairs() for array iteration.'
      },
      {
        title: 'Functions',
        content: 'Functions are first-class values in Lua and can be assigned to variables.',
        code: `-- Basic function
function greet(name)
    return "Hello, " .. name .. "!"
end

print(greet("Alice"))

-- Function with multiple parameters
function add(a, b)
    return a + b
end

print("5 + 3 =", add(5, 3))

-- Function with variable arguments
function sum(...)
    local total = 0
    local args = {...}
    for i, v in ipairs(args) do
        total = total + v
    end
    return total
end

print("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5))

-- Function as variable
local multiply = function(a, b)
    return a * b
end

print("4 * 6 =", multiply(4, 6))

-- Function returning multiple values
function divide(a, b)
    if b == 0 then
        return nil, "Division by zero"
    end
    return a / b, "Success"
end

local result, message = divide(10, 2)
print("Result:", result, "Message:", message)

local result2, message2 = divide(10, 0)
print("Result:", result2, "Message:", message2)

-- Higher-order function
function applyToAll(func, tbl)
    local result = {}
    for i, v in ipairs(tbl) do
        result[i] = func(v)
    end
    return result
end

local numbers = {1, 2, 3, 4, 5}
local doubled = applyToAll(function(x) return x * 2 end, numbers)

print("Original:", table.concat(numbers, ", "))
print("Doubled:", table.concat(doubled, ", "))`,
        explanation: 'Functions can return multiple values. Use ... for variable arguments. Functions are first-class values.'
      },
      {
        title: 'Control Structures',
        content: 'Lua provides if statements, loops, and other control structures.',
        code: `-- If statements
local score = 85

if score >= 90 then
    print("Grade: A")
elseif score >= 80 then
    print("Grade: B")
elseif score >= 70 then
    print("Grade: C")
else
    print("Grade: F")
end

-- While loop
local count = 1
while count <= 5 do
    print("Count:", count)
    count = count + 1
end

-- Repeat-until loop (like do-while)
local num = 1
repeat
    print("Repeat:", num)
    num = num + 1
until num > 3

-- For loop (numeric)
print("\\nNumeric for loop:")
for i = 1, 5 do
    print("i =", i)
end

-- For loop with step
print("\\nFor loop with step:")
for i = 10, 1, -2 do
    print("i =", i)
end

-- For loop with tables
local colors = {"red", "green", "blue"}
print("\\nColors:")
for i, color in ipairs(colors) do
    print(i, color)
end

-- Nested loops
print("\\nMultiplication table:")
for i = 1, 3 do
    for j = 1, 3 do
        io.write(i * j .. "\\t")
    end
    print()  -- New line
end

-- Break and continue (using goto in Lua 5.2+)
print("\\nBreak example:")
for i = 1, 10 do
    if i == 6 then
        break
    end
    print("i =", i)
end`,
        explanation: 'Lua uses then/end for if blocks. For loops can be numeric or iterate over tables. Use break to exit loops.'
      },
      {
        title: 'Practical Example - Simple Game Logic',
        content: 'Let\'s create a simple number guessing game that demonstrates Lua concepts.',
        code: `-- Simple Number Guessing Game
local math = require("math")

-- Game state
local game = {
    secretNumber = 0,
    attempts = 0,
    maxAttempts = 5,
    gameOver = false,
    won = false
}

-- Initialize game
function game:init()
    math.randomseed(os.time())
    self.secretNumber = math.random(1, 10)
    self.attempts = 0
    self.gameOver = false
    self.won = false
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 10.")
    print("You have " .. self.maxAttempts .. " attempts.")
end

-- Check guess
function game:checkGuess(guess)
    if type(guess) ~= "number" then
        return "Please enter a valid number"
    end
    
    if guess < 1 or guess > 10 then
        return "Number must be between 1 and 10"
    end
    
    self.attempts = self.attempts + 1
    
    if guess == self.secretNumber then
        self.won = true
        self.gameOver = true
        return "Congratulations! You guessed it in " .. self.attempts .. " attempts!"
    elseif guess < self.secretNumber then
        return "Too low! Attempts left: " .. (self.maxAttempts - self.attempts)
    else
        return "Too high! Attempts left: " .. (self.maxAttempts - self.attempts)
    end
end

-- Check if game is over
function game:isGameOver()
    if self.attempts >= self.maxAttempts and not self.won then
        self.gameOver = true
        return true, "Game Over! The number was " .. self.secretNumber
    end
    return self.gameOver, ""
end

-- Play game (simulation)
function playGame()
    game:init()
    
    -- Simulate some guesses
    local guesses = {3, 7, 5, 8, 6}
    
    for _, guess in ipairs(guesses) do
        if game.gameOver then
            break
        end
        
        print("\\nGuessing:", guess)
        local result = game:checkGuess(guess)
        print(result)
        
        local isOver, message = game:isGameOver()
        if isOver then
            if message ~= "" then
                print(message)
            end
            break
        end
    end
    
    if game.won then
        print("\\n🎉 You won! 🎉")
    else
        print("\\n😞 Better luck next time!")
    end
end

-- Statistics tracker
local stats = {
    gamesPlayed = 0,
    gamesWon = 0,
    totalAttempts = 0
}

function stats:addGame(won, attempts)
    self.gamesPlayed = self.gamesPlayed + 1
    self.totalAttempts = self.totalAttempts + attempts
    if won then
        self.gamesWon = self.gamesWon + 1
    end
end

function stats:getWinRate()
    if self.gamesPlayed == 0 then
        return 0
    end
    return (self.gamesWon / self.gamesPlayed) * 100
end

function stats:getAverageAttempts()
    if self.gamesPlayed == 0 then
        return 0
    end
    return self.totalAttempts / self.gamesPlayed
end

function stats:display()
    print("\\n=== Game Statistics ===")
    print("Games played:", self.gamesPlayed)
    print("Games won:", self.gamesWon)
    print("Win rate:", string.format("%.1f%%", self:getWinRate()))
    print("Average attempts:", string.format("%.1f", self:getAverageAttempts()))
end

-- Run the game
playGame()

-- Update stats
stats:addGame(game.won, game.attempts)
stats:display()`,
        explanation: 'This example shows tables as objects with methods, random numbers, string formatting, and game state management.'
      }
    ]
  }
];