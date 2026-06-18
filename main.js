// ប្រភពទិន្នន័យសំណួរ បែងចែកដាច់ដោយឡែកតាម Category
const allQuestions = {
  Programming: [
    {
      q: "HTML stands for?",
      choices: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyperlinks Text Mark Language",
        "Home Tool Markup Language",
      ],
      answer: 0,
    },
    {
      q: "CSS stands for?",
      choices: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: 0,
    },
    {
      q: "JavaScript is a ___ language?",
      choices: ["Programming", "Markup", "Styling", "Database"],
      answer: 0,
    },
    {
      q: "Which HTML attribute is used to define inline styles?",
      choices: ["style", "class", "font", "styles"],
      answer: 0,
    },
    {
      q: "Which property is used to change text color in CSS?",
      choices: ["text-color", "fgcolor", "color", "font-color"],
      answer: 2,
    },
    {
      q: "Which company developed JavaScript?",
      choices: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
      answer: 0,
    },
    {
      q: "The <a> tag in HTML defines a ___?",
      choices: ["Link", "Button", "Paragraph", "Image"],
      answer: 0,
    },
    {
      q: "Which HTML element is used for the largest heading?",
      choices: ["<h1>", "<h6>", "<header>", "<head>"],
      answer: 0,
    },
    {
      q: "Which symbol is used for comments in JavaScript?",
      choices: ["//", "/* */", "#", ""],
      answer: 0,
    },
    {
      q: "What does API stand for?",
      choices: [
        "Application Programming Interface",
        "Applied Program Internet",
        "Advanced Programming Instruction",
        "Application Process Integration",
      ],
      answer: 0,
    },
    {
      q: "Which CSS property controls element width?",
      choices: ["width", "size", "length", "weight"],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to define a table row?",
      choices: ["<tr>", "<td>", "<table>", "<row>"],
      answer: 0,
    },
    {
      q: "Which HTML tag is used for an unordered list?",
      choices: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: 0,
    },
    {
      q: "In JavaScript, what is NaN?",
      choices: [
        "Not a Number",
        "Null and None",
        "Number Array Node",
        "New a Number",
      ],
      answer: 0,
    },
    {
      q: "Which method is used to find an element by ID in JavaScript?",
      choices: [
        "getElementById()",
        "getElementsByName()",
        "querySelectorAll()",
        "findById()",
      ],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to include an image?",
      choices: ["<img>", "<image>", "<src>", "<picture>"],
      answer: 0,
    },
    {
      q: "Which CSS property is used to change the background color?",
      choices: ["background-color", "bgcolor", "color", "back-color"],
      answer: 0,
    },
    {
      q: "What does SQL stand for?",
      choices: [
        "Structured Query Language",
        "Simple Query Language",
        "Sequential Query Language",
        "Standard Query Link",
      ],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to define a paragraph?",
      choices: ["<p>", "<para>", "<text>", "<paragraph>"],
      answer: 0,
    },
    {
      q: "Which property is used to change the font size in CSS?",
      choices: ["font-size", "text-size", "size", "font-style"],
      answer: 0,
    },
    {
      q: "Which JavaScript method is used to convert a JSON string to an object?",
      choices: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.toObject()",
      ],
      answer: 0,
    },
    {
      q: "The <form> tag in HTML is used to ___?",
      choices: [
        "Collect user input",
        "Create a table",
        "Display images",
        "Link pages",
      ],
      answer: 0,
    },
    {
      q: "Which CSS property controls the space between letters?",
      choices: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
      answer: 0,
    },
    {
      q: "Which HTML element defines the document title?",
      choices: ["<title>", "<head>", "<header>", "<meta>"],
      answer: 0,
    },
    {
      q: "Which JavaScript keyword declares a variable?",
      choices: ["var", "let", "const", "All of the above"],
      answer: 3,
    },
    {
      q: "Which HTML tag is used for a line break?",
      choices: ["<br>", "<break>", "<lb>", "<hr>"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to embed a video?",
      choices: ["<video>", "<media>", "<movie>", "<source>"],
      answer: 0,
    },
    {
      q: "What is the correct syntax for CSS comments?",
      choices: ["/* comment */", "// comment", "", "# comment"],
      answer: 0,
    },
    {
      q: "Which property is used to make text bold in CSS?",
      choices: ["font-weight", "font-style", "text-bold", "text-weight"],
      answer: 0,
    },
    {
      q: "In JavaScript, which operator is used for strict equality?",
      choices: ["===", "==", "=", "!=="],
      answer: 0,
    },
    {
      q: "Which HTML tag defines a checkbox?",
      choices: [
        "<input type='checkbox'>",
        "<checkbox>",
        "<input type='option'>",
        "<option>",
      ],
      answer: 0,
    },
    {
      q: "What is the purpose of the <head> element in HTML?",
      choices: [
        "Contains metadata",
        "Contains visible content",
        "Links to other pages",
        "Defines layout",
      ],
      answer: 0,
    },
    {
      q: "Which CSS property controls element visibility?",
      choices: ["visibility", "display", "hidden", "opacity"],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to define a table header cell?",
      choices: ["<th>", "<td>", "<tr>", "<table>"],
      answer: 0,
    },
    {
      q: "Which JavaScript function displays a message in a dialog box?",
      choices: ["alert()", "prompt()", "console.log()", "confirm()"],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to define a dropdown list?",
      choices: ["<select>", "<option>", "<input>", "<dropdown>"],
      answer: 0,
    },
    {
      q: "Which CSS property controls the float of elements?",
      choices: ["float", "position", "display", "clear"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to define a hyperlink?",
      choices: ["<a>", "<link>", "<href>", "<url>"],
      answer: 0,
    },
    {
      q: "Which HTML element is used for emphasized text?",
      choices: ["<em>", "<strong>", "<i>", "<b>"],
      answer: 0,
    },
    {
      q: "Which JavaScript method adds an item to the end of an array?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to define a list item?",
      choices: ["<li>", "<ul>", "<ol>", "<list>"],
      answer: 0,
    },
    {
      q: "Which property is used to set the font family in CSS?",
      choices: ["font-family", "font-style", "text-font", "font-type"],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to define the body content?",
      choices: ["<body>", "<head>", "<html>", "<section>"],
      answer: 0,
    },
    {
      q: "Which HTML tag defines a numbered list?",
      choices: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: 0,
    },
    {
      q: "Which JavaScript object represents the browser window?",
      choices: ["window", "document", "navigator", "screen"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to display a picture?",
      choices: ["<img>", "<picture>", "<image>", "<src>"],
      answer: 0,
    },
    {
      q: "Which CSS property controls the element's margin?",
      choices: ["margin", "padding", "border", "spacing"],
      answer: 0,
    },
    {
      q: "Which JavaScript keyword defines a constant variable?",
      choices: ["const", "let", "var", "constant"],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to create a button?",
      choices: ["<button>", "<input>", "<a>", "<link>"],
      answer: 0,
    },
    {
      q: "Which CSS property is used to create rounded corners?",
      choices: ["border-radius", "border-round", "corner-radius", "radius"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to play audio?",
      choices: ["<audio>", "<sound>", "<music>", "<media>"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to define a section in a page?",
      choices: ["<section>", "<div>", "<article>", "<span>"],
      answer: 0,
    },
    {
      q: "Which HTML element is used to define a footer?",
      choices: ["<footer>", "<bottom>", "<section>", "<div>"],
      answer: 0,
    },
    {
      q: "What is the main purpose of responsive web design?",
      choices: [
        "Adapt layout to different screen sizes",
        "Faster loading",
        "Improve colors",
        "Add animations",
      ],
      answer: 0,
    },
    {
      q: "Which HTML attribute is used to open a link in a new tab?",
      choices: ["target='_blank'", "href='_new'", "link='_tab'", "rel='tab'"],
      answer: 0,
    },
  ],
  Network: [
    {
      q: "What does IP stand for in networking?",
      choices: [
        "Internet Protocol",
        "Internal Protocol",
        "Internet Process",
        "Intranet Protocol",
      ],
      answer: 0,
    },
    {
      q: "Which device is used to connect multiple networks together?",
      choices: ["Router", "Switch", "Hub", "Repeater"],
      answer: 0,
    },
    {
      q: "What is the standard port number for HTTP?",
      choices: ["80", "443", "21", "25"],
      answer: 0,
    },
    {
      q: "What is the standard port number for HTTPS?",
      choices: ["80", "443", "22", "8080"],
      answer: 1,
    },
    {
      q: "Which layer of the OSI model is responsible for routing?",
      choices: [
        "Network Layer",
        "Transport Layer",
        "Data Link Layer",
        "Physical Layer",
      ],
      answer: 0,
    },
    {
      q: "What does DNS stand for?",
      choices: [
        "Domain Name System",
        "Dynamic Network System",
        "Digital Network Service",
        "Domain Number Protocol",
      ],
      answer: 0,
    },
    {
      q: "Which protocol is used to automatically assign IP addresses to devices on a network?",
      choices: ["DHCP", "DNS", "FTP", "SMTP"],
      answer: 0,
    },
    {
      q: "What is the standard port number for SSH?",
      choices: ["21", "22", "23", "25"],
      answer: 1,
    },
    {
      q: "Which OSI layer is responsible for end-to-end communication and error recovery (e.g., TCP)?",
      choices: [
        "Transport Layer",
        "Network Layer",
        "Session Layer",
        "Application Layer",
      ],
      answer: 0,
    },
    {
      q: "What is the main function of a Switch in a local network?",
      choices: [
        "Connects devices within the same network using MAC addresses",
        "Connects different networks together",
        "Translates domain names to IP addresses",
        "Protects the network from hackers",
      ],
      answer: 0,
    },
    {
      q: "What does LAN stand for?",
      choices: [
        "Local Area Network",
        "Large Area Network",
        "Link Access Network",
        "Logical Address Network",
      ],
      answer: 0,
    },
    {
      q: "Which of the following is a private IP address?",
      choices: ["192.168.1.1", "8.8.8.8", "142.250.190.46", "208.67.222.222"],
      answer: 0,
    },
    {
      q: "What is the standard subnet mask for a Class C IP address?",
      choices: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
      answer: 0,
    },
    {
      q: "Which protocol is used to send emails between servers?",
      choices: ["SMTP", "POP3", "IMAP", "HTTP"],
      answer: 0,
    },
    {
      q: "How many bits are there in an IPv4 address?",
      choices: ["32 bits", "64 bits", "128 bits", "16 bits"],
      answer: 0,
    },
    {
      q: "How many bits are there in an IPv6 address?",
      choices: ["32 bits", "64 bits", "128 bits", "256 bits"],
      answer: 2,
    },
    {
      q: "What does MAC stand for in 'MAC Address'?",
      choices: [
        "Media Access Control",
        "Media Architecture Connection",
        "Machine Access Code",
        "Main Address Control",
      ],
      answer: 0,
    },
    {
      q: "Which protocol is connectionless and does not guarantee packet delivery?",
      choices: ["UDP", "TCP", "HTTP", "FTP"],
      answer: 0,
    },
    {
      q: "What is the loopback IP address for the local host (your own machine)?",
      choices: ["127.0.0.1", "192.168.0.1", "10.0.0.1", "0.0.0.0"],
      answer: 0,
    },
    {
      q: "Which hardware device helps protect a network from unauthorized access?",
      choices: ["Firewall", "Hub", "Modem", "Repeater"],
      answer: 0,
    },
  ],
  Database: [
    {
      q: "What does SQL stand for?",
      choices: [
        "Structured Query Language",
        "Simple Query Language",
        "Sequential Query Language",
        "Standard Query Link",
      ],
      answer: 0,
    },
    {
      q: "Which command is used to fetch data from a database table?",
      choices: ["SELECT", "GET", "FETCH", "EXTRACT"],
      answer: 0,
    },
    {
      q: "What does DBMS stand for?",
      choices: [
        "Database Management System",
        "Database Managing System",
        "Data Base Main System",
        "Data Binary Management System",
      ],
      answer: 0,
    },
    {
      q: "Which SQL constraint uniquely identifies each record in a table?",
      choices: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "NOT NULL"],
      answer: 0,
    },
    {
      q: "Which command is used to add new data into a table?",
      choices: ["INSERT INTO", "ADD NEW", "UPDATE", "CREATE"],
      answer: 0,
    },
    {
      q: "Which command is used to modify existing records in a table?",
      choices: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
      answer: 0,
    },
    {
      q: "Which command is used to delete data from a table?",
      choices: ["DELETE", "REMOVE", "DROP", "CLEAR"],
      answer: 0,
    },
    {
      q: "What is the purpose of the WHERE clause in SQL?",
      choices: [
        "To filter records based on a specified condition",
        "To sort the query results",
        "To join two tables together",
        "To group duplicate data",
      ],
      answer: 0,
    },
    {
      q: "Which clause is used to sort the result-set in ascending or descending order?",
      choices: ["ORDER BY", "SORT BY", "GROUP BY", "ALIGN BY"],
      answer: 0,
    },
    {
      q: "Which SQL statement is used to remove an entire table structure and its data permanently?",
      choices: ["DROP TABLE", "DELETE TABLE", "TRUNCATE TABLE", "REMOVE TABLE"],
      answer: 0,
    },
    {
      q: "What does 'RDBMS' stand for?",
      choices: [
        "Relational Database Management System",
        "Regional Database Management System",
        "Rapid Database Management System",
        "Root Database Management System",
      ],
      answer: 0,
    },
    {
      q: "Which SQL constraint ensures that a column cannot have a NULL value?",
      choices: ["NOT NULL", "UNIQUE", "PRIMARY KEY", "CHECK"],
      answer: 0,
    },
    {
      q: "A field in one table that refers to the PRIMARY KEY in another table is called a ___?",
      choices: [
        "FOREIGN KEY",
        "SECONDARY KEY",
        "COMPOSITE KEY",
        "CANDIDATE KEY",
      ],
      answer: 0,
    },
    {
      q: "Which SQL keyword is used to return only distinct (different) values?",
      choices: ["DISTINCT", "UNIQUE", "DIFFERENT", "ONLY"],
      answer: 0,
    },
    {
      q: "Which wildcard character represents zero, one, or multiple characters in an SQL LIKE operator?",
      choices: ["%", "_", "*", "#"],
      answer: 0,
    },
    {
      q: "Which wildcard character represents a single character in an SQL LIKE operator?",
      choices: ["_", "%", "?", "-"],
      answer: 0,
    },
    {
      q: "Which aggregate function is used to find the total number of rows in a table?",
      choices: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"],
      answer: 0,
    },
    {
      q: "Which aggregate function returns the highest value in a selected column?",
      choices: ["MAX()", "HIGH()", "TOP()", "LARGE()"],
      answer: 0,
    },
    {
      q: "Which aggregate function returns the average value of a numeric column?",
      choices: ["AVG()", "AVERAGE()", "MEAN()", "SUM()"],
      answer: 0,
    },
    {
      q: "Which clause is often used with aggregate functions to group the result-set by one or more columns?",
      choices: ["GROUP BY", "ORDER BY", "SORT BY", "HAVING"],
      answer: 0,
    },
    {
      q: "Which operator is used to select values within a specified range?",
      choices: ["BETWEEN", "IN", "LIKE", "WITHIN"],
      answer: 0,
    },
    {
      q: "Which operator allows you to specify multiple values in a WHERE clause?",
      choices: ["IN", "BETWEEN", "LIKE", "OR"],
      answer: 0,
    },
    {
      q: "Which command is used to completely empty a table but keep its structure intact?",
      choices: ["TRUNCATE TABLE", "DROP TABLE", "DELETE TABLE", "CLEAR TABLE"],
      answer: 0,
    },
    {
      q: "Which SQL join returns all rows when there is a match in either left or right table?",
      choices: ["FULL OUTER JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
      answer: 0,
    },
    {
      q: "Which SQL join returns all records from the left table, and the matched records from the right table?",
      choices: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"],
      answer: 0,
    },
    {
      q: "What is an Index used for in a database?",
      choices: [
        "To speed up data retrieval lines",
        "To secure data from unauthorized users",
        "To prevent duplicate entries",
        "To link tables automatically",
      ],
      answer: 0,
    },
    {
      q: "What does the 'ACID' property in a database transaction guarantee?",
      choices: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Consistency, Integrity, Data",
        "Access, Control, Intelligence, Backup",
        "Automation, Concurrency, Isolation, Delivery",
      ],
      answer: 0,
    },
    {
      q: "Which command is used to save all changes made by a transaction permanently?",
      choices: ["COMMIT", "ROLLBACK", "SAVE", "UPDATE"],
      answer: 0,
    },
    {
      q: "Which command is used to undo changes made by a transaction if an error occurs?",
      choices: ["ROLLBACK", "COMMIT", "UNDO", "REVERT"],
      answer: 0,
    },
    {
      q: "Which of the following is an example of a NoSQL (Non-Relational) database?",
      choices: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
      answer: 0,
    },
  ],
};

let questions = [];
let current = 0;
let selected = null;
let score = 0;
let currentCategory = "Programming";

const totalEl = document.getElementById("total");
const currentEl = document.getElementById("current");
const scoreEl = document.getElementById("score");
const qtext = document.getElementById("qtext");
const choicesEl = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

// ចាប់ផ្តើម Quiz តាម Category
function startQuizByCategory(category) {
  currentCategory = category;
  questions = allQuestions[category] || allQuestions["Programming"];

  current = 0;
  score = 0;
  scoreEl.textContent = score;
  totalEl.textContent = questions.length;
  restartBtn.style.display = "none";

  renderQuestion();
}

// ច្របល់ចម្លើយ
function shuffleChoices(q) {
  const choicesCopy = q.choices.map((c, i) => ({ text: c, index: i }));
  for (let i = choicesCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choicesCopy[i], choicesCopy[j]] = [choicesCopy[j], choicesCopy[i]];
  }
  q.shuffledChoices = choicesCopy.map((c) => c.text);
  q.shuffledAnswer = choicesCopy.findIndex((c) => c.index === q.answer);
}

// បង្ហាញសំណួរ
function renderQuestion() {
  if (questions.length === 0) return;

  selected = null;
  checkBtn.disabled = false;
  nextBtn.disabled = true;
  feedback.textContent = "Select an answer and press Check.";
  currentEl.textContent = current + 1;

  const item = questions[current];
  shuffleChoices(item);

  qtext.textContent = item.q;
  choicesEl.innerHTML = "";

  item.shuffledChoices.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = `${String.fromCharCode(65 + i)}. ${c}`;
    btn.dataset.index = i;
    btn.addEventListener("click", () => {
      [...choicesEl.children].forEach((x) => x.classList.remove("selected"));
      btn.classList.add("selected");
      selected = i;
    });
    choicesEl.appendChild(btn);
  });
}

// ផ្ទៀងផ្ទាត់ចម្លើយ
checkBtn.addEventListener("click", () => {
  if (selected === null) {
    feedback.textContent = "Please choose an answer first.";
    return;
  }
  const q = questions[current];
  const correct = q.shuffledAnswer;

  [...choicesEl.children].forEach((el, i) => {
    el.disabled = true;
    if (i == correct) el.classList.add("correct");
    if (i == selected && selected != correct) el.classList.add("wrong");
  });

  if (selected === correct) {
    score += 2;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Wrong! Correct answer is ${String.fromCharCode(65 + correct)}.`;
  }
  scoreEl.textContent = score;
  checkBtn.disabled = true;
  nextBtn.disabled = false;
});

restartBtn.style.display = "none";

// ទៅសំណួរបន្ទាប់
nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    qtext.textContent = "Quiz complete!";
    const maxScore = questions.length * 2;
    let feedbackMsg = `You scored <strong>${score}</strong> out of <strong>${maxScore}</strong>.`;

    if (score < maxScore / 2) {
      feedbackMsg += "<br><strong>You did poorly! 😢 Try again!</strong>";
    } else {
      feedbackMsg += "<br><strong>Well done! 🎉</strong>";
    }
    choicesEl.innerHTML = `<div class="small">${feedbackMsg}</div>`;
    feedback.textContent = "Press Restart to try again.";
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    restartBtn.focus();
  }
});

// លេងឡើងវិញ
restartBtn.addEventListener("click", () => {
  startQuizByCategory(currentCategory);
});
