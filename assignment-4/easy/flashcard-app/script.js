
const Questquestion = [{
    "question": "What is the capital of France?",
    "options": ["London", "Berlin", "Paris", "Madrid"],
    "answer": "Paris",
    "topic":"Geography"
}, {
    "question": "What is the largest planet in our solar system?",
    "options": ["Earth", "Saturn", "Jupiter", "Neptune"],
    "answer": "Jupiter",
    "topic":"Science"
}, {
    "question": "Who wrote 'Romeo and Juliet'?",
    "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    "answer": "William Shakespeare",
    "topic":"Literature"

},
{
    "question": "What is the chemical symbol for water?",
    "options": ["H2O", "CO2", "O2", "NaCl"],
    "answer": "H2O",
    "topic":"Science"
}
]


const flashcardContainer = document.querySelector('.flashCard');
const topicFilter = document.querySelector('#topicFilter');


Questquestion.forEach((item) => {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    const questionElement = document.createElement('h2');
    questionElement.textContent = item.question;
    flashcard.appendChild(questionElement);

    item.options.forEach((option) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => {
            if (option === item.answer) {
                alert('Correct!');
            } else {
                alert('Wrong! The correct answer is: ' + item.answer);
            }
        });
        flashcard.appendChild(optionElement);
    });

    flashcardContainer.appendChild(flashcard);
});


