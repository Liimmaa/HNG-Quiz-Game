var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
var option1 = document.getElementById('opt1');
var option2 = document.getElementById('opt2');
var option3 = document.getElementById('opt3');
var option4 = document.getElementById('opt4');


var app = {
    questions: [
        { q: 'First China War was fought between ?', options: ['China and Britain', 'China and France', 'China and Egypt', 'China and Greek'], answer: 1 },

        { q: 'Exposure to sunlight helps a person improve his health because ?', options: ['the infrared light kills bacteria in the body', 'resistance power increases', 'the pigment cells in the skin get stimulated and produce a healthy tan', 'the ultraviolet rays convert skin oil into Vitamin D'], answer: 4 },

        { q: 'Friction can be reduced by changing from ?', options: ['sliding to rolling', 'rolling to sliding', 'potential energy to kinetic energy', 'dynamic to static'], answer: 1 },

        { q: 'During World War II, when did Germany attack France ?', options: ['1940', '1941', '1942', '1943'], answer: 1 },

        { q: 'The ozone layer restricts ?', options: ['Visible light', 'Infrared radiation', 'X-rays and gamma rays', 'Ultraviolet radiation'], answer: 4 }
    ],
    index: 0,
    load: function () {
        if (this.index <= this.questions.length - 1) {
            quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
            option1.innerHTML = this.questions[this.index].options[0];
            option2.innerHTML = this.questions[this.index].options[1];
            option3.innerHTML = this.questions[this.index].options[2];
            option4.innerHTML = this.questions[this.index].options[3];
            this.scoreCard();
        }
        else {

            quizBox.innerHTML = "Quiz Over......!!!"
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            btn.style.display = "none";
        }
    },
    next:function() {
        this.index++;
        this.load();
    },
    check:function(data) {

        var id = data.id.split('');

        if (id[id.length - 1] == this.questions[this.index].answer) {
            this.score++;
            data.className = "correct";
            data.innerHTML = "Correct";
            this.scoreCard();
        }
        else {
            data.className = "wrong";
            data.innerHTML = "Wrong";
        }
    },
    notClickAble:function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },

    clickAble: function () {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = ''

        }
    },
    score: 0,
    scoreCard: function () {
        scoreCard.innerHTML = scoreCard.innerHTML=this.score+"/"+this.questions.length ;
    }

}

window.onload = app.load();

function button(data) {
    app.check(data);
    app.notClickAble();
}

function next() {
    app.next();
    app.clickAble();
}


