var cont = 0;
var line = [];
line[0] = ["Flight","Snape","Chaser","Draco Malfoy","Paladin"];
line[1] = ["Mind Control","McGonagall","Seeker","Harry Potter","Archer"];
line[2] = ["Super inteligence","Hagrid","Keeper","Rony Weasley","Mage"];
line[3] = ["Super strength","Flitwick","Beater","No One","Bard"];
var questions = [];
questions[0] = ["Pick one superpower:"];
questions[1] = ["Which professor is most likely to take house point away from you?"];
questions[2] = ["Which quidditch position would you be most proficient at?"];
questions[3] = ["And finnaly, who is the most annoying boy at hogwarts?"];
questions[4] = ["What RPG class do you prefer?"];
var questions_size = questions.length;

var title = document.getElementById("card-title");
var qst = document.getElementById("big-question");
var answers_id = ["q1-label","q2-label","q3-label","q4-label"];

var radio_id = ["q1-input","q2-input","q3-input","q4-input"];

var point = [0,0,0,0];
var img_src = ["img/gr.png","img/sly.png","img/raven.png","img/huff.png"];

var quiz_img_div = document.getElementById("img_div");
var quiz_img_house = document.getElementById("house_logo");

var last_point;
var next_text = document.getElementById("next");
var begin_button = document.getElementById("begin");
var answers_div = document.getElementById("answersdiv");

function count_points(){
    for(var i = 0 ; i < 4 ; i++){
        var choice = document.getElementById(radio_id[i]).checked;
        if(choice == true){
            point[i]++;
            last_point = i;
            i = 4;
        }
    }
}

function start(){
    begin_button.style.display = "none";
    quiz_img_div.style.display = "none";
    qst.style.display = "block";
    document.getElementById("answersdiv").style.display = "block";
    document.getElementById("previous").style.display = "none";
    title.innerHTML = "Question 1 of 4";
    qst.innerHTML = questions[0];
    generate_answers(0);
    cont++; 
}

function next(){
    document.getElementById("previous").style.display = "block";
    count_points();
    if (cont < questions_size){
        if(cont == (questions_size - 1)){
            next_text.innerHTML = "Finish";
        }
        title.innerHTML = "Question " + (cont+1) + " of " + "4";
        qst.innerHTML = questions[cont];
        generate_answers(0);
        cont++;
    }else{
        document.getElementById("answersdiv").style.display = "none";
        qst.style.display = "none";
        title.innerHTML = "Your House is:";
        result();
        begin_button.style.display = "block";
        begin_button.innerHTML = "Restart";
        next_text.innerHTML = "Next";
        cont = 0;
        point = [0,0,0,0];
    }
}

function generate_answers(next_prev){
    for(var i = 0 ; i < 4 ; i++){
        var aux = answers_id[i];
        document.getElementById(aux).innerHTML = line[i][cont - next_prev];
    }
}
   
function result(){
    var max_point = Math.max.apply(null,point);
    for(var i = 0 ; i < 4 ; i++){
        if(point[i] == max_point){
            quiz_img_house.src = img_src[i];
            quiz_img_div.style.display = "block";
            i = 4;
        }
    }
}

function previous(){
    point[last_point]--;
    cont--;
    title.innerHTML = "Question " + (cont) + " of " + "4";
    qst.innerHTML = questions[cont-1];
    generate_answers(1);
    if (next_text.innerText = "Finish"){
        next_text.innerHTML = "Next";
    }
}

