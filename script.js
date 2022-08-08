var questions = [
    {
        title: 'Which data type has only True and False as possible values?',
        choice: ['string', 'undefined', 'boolean', 'number'],
        answer: "boolean"
    },
    {
        title: 'Which of the following is an example of a webAPI?',
        choice: ['document object model', 'javascript', 'HTML', 'Google Chrome'],
        answer: "document object model"
    },
    {
        title: 'What is a person who writes computer code?',
        choice: ['a hacker', 'a programmer', 'a code artist', 'a masochist'],
        answer: "a masochist"
    },
    {
        title: 'Which describes a set of instructions that tells a computer what to do?',
        choice: ['a map', 'a driver', 'a program', 'a function set'],
        answer: "a program"
    },
    {
        title: 'Which of the following is an real coding language?',
        choice: ['LatteScript', 'HTML', 'Z++', 'Non-Binary'],
        answer: "HTML"
    },

]

var topScoresArray = [
   
]

var i=0
var time =40
var score = time


document.getElementById('start-btn').onclick = function(){
    startQuiz();
    setInterval(function(){
        if(time>0){
        time--
        document.getElementById('time').innerHTML=
        `<h3>${time}</h3>`}

    }, 1000)

}


function startQuiz() {

    if(i<questions.length){


        document.getElementById('start-btn').style.display= "none"
    
        document.getElementById('quiz-container').innerHTML=
    ` 
    <div class="btn-container" id="btn-container">
    <h3>${questions[i].title}</h3>
    <br>
        <button class="answer-btn">${questions[i].choice[0]}</button>
        <button class="answer-btn">${questions[i].choice[1]}</button>
        <button class="answer-btn">${questions[i].choice[2]}</button>
        <button class="answer-btn">${questions[i].choice[3]}</button>
    </div>
    `
    } else {
        showScore()
    }

}


document.getElementById('quiz-container').onclick =function(e){
        e.preventDefault();
        console.log(e.target.innerText);
        if(e.target.innerText===questions[i].answer){
            document.getElementById('check').innerHTML=
            '<h3>Correct<h3>'
        }else{
            document.getElementById('check').innerHTML=
            '<h3>Wrong<h3>'
            time-=10
            

        }

        i++
        startQuiz()
    }


function showScore() {
    document.getElementById('quiz-container').style.display='none'
    document.getElementById('time').style.display='none'
    document.getElementById('check').style.display='none'
    if(time >0)
    {var score =time} else{var score =0}
    document.getElementById('score').innerHTML= 
    `
    <h1 id=score-message>Game Over.</br> How did you do?</br> Score - <span>${score}</span></h1>
    
    <input type="text" name="initials" placeholder="Enter Your Initials" />
    `
}
