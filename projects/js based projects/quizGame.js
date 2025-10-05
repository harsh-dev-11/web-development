// working of this quiz game is at the end as the comments

// creating question array
let questions = [];

// question 1
const question1 = {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2"],
    answer: "H2O"
};

// question 2
const question2 = {
    category: "History",
    question: "Who was the first person to step on the Moon?",
    choices: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
    answer: "Neil Armstrong"
};

// question 3
const question3 = {
    category: "Geography",
    question: "What is the capital city of Japan?",
    choices: ["Beijing", "Seoul", "Tokyo"],
    answer: "Tokyo"
};

// question 4
const question4 = {
    category: "Mathematics",
    question: "What is the value of Pi (π) to two decimal places?",
    choices: ["3.14", "2.71", "3.00"],
    answer: "3.14"
};

// question 5
const question5 = {
    category: "Literature",
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare"
};

questions.push(question1, question2, question3, question4, question5);

// retrieving random function object
function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

// console.log(getRandomQuestion(questions))

// random choice maker function
function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

const q = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(q.choices);

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}


//  It defines a list of question objects, each containing a category, the question text, multiple choices,
//  and the correct answer. A function selects a random question from the list, and another function randomly
//  picks one choice from that question’s choices. The chosen question and the computer’s picked choice are
//  then passed to a result-checking function, which compares the choice to the question’s correct answer
//  and returns a message indicating whether the computer’s choice was correct or, if not, what the correct
//  answer is.