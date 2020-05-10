const questions = [{ // 1
    question: `Ces dernières 48 heures, quelle a été votre température la plus élevée ?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 2
    question: `quelle est votre température?`,
    input: `<input  class ="test2__input"  type="number" id="number" name="temperature-degre" aria-describedby="text-suffix" min="34" max="42"
    step="0.1" placeholder="37.0" value = "" required=""> <label>température</label><br>`,
    type: 2

},
{ // 3
    question: `Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1

},
{ // 4
    question: `Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},

{ // 5
    question: `Avez-vous un mal de gorge apparu ces derniers jours ? `,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 6
    question: `Ces dernières 24 heures, avez-vous de la diarrhée ?Avec au moins 3 selles molles.`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 7
    question: `Ces derniers jours, avez-vous une fatigue inhabituelle ?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 8
    question: `Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 9
    question: `Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 10
    question: `Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?`,
    input: `<input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 11
    question: `Comment vous sentez-vous ?`,
    input: `
    <input type="radio" name="qst" value="non">
    <label>Mal</label><br>
    <input type="radio" name="qst" value="non">
    <label>Très mal</label><br>
    <input type="radio"name="qst" value="oui">
    <label>Assez bien</label><br>
    <input type="radio" name="qst" value="oui">
    <label>bien</label><br>`,
    type: 1
},
{ // 12
    question: `Quelle est votre taille ?`,
    input: `
    <input  class ="test2__input" id="number" type="number" name="age" aria-describedby="text-suffix" 
    step="0.1"  required="">
    <label>cm</label><br>`,
    type: 2
},

{ // 13
    question: `Quel est votre âge ?`,
    input: `
    <input  class ="test2__input" id="number" type="number" name="age" aria-describedby="text-suffix" 
    step="0.1"  required=""> 
    <label>ans</label><br>`,
    type: 2
},
{ // 14
    question: `Quel est votre poids ? `,
    input: `
    <input  class ="test2__input" id="number" type="number" name="age" aria-describedby="text-suffix" 
    step="0.1"  required="">
    <label>Kgs</label><br>`,
    type: 1

},
{ // 15
    question: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>
    <input type="radio" name="qst" value="jsp" >
    <label>Ne sait pas</label><br>`,
    type: 1

},
{ // 16
    question: `Êtes-vous diabétique ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 17
    question: `Avez-vous ou avez-vous eu un cancer ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
}, { // 18
    question: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
}, { // 19
    question: `Avez-vous une insuffisance rénale chronique dialysée ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
}, { // 20
    question: `Avez-vous une maladie chronique du foie ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>`,
    type: 1
},
{ // 21 à vérifier
    question: `Êtes-vous enceinte ?`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>
    <input type="radio" name="qst"  >
    <label>Non applicable</label><br>`,
    type: 1
},
{ // 22
    question: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>
    <input type="radio" name="qst">
    <label>Ne sait pas</label><br>`,
    type: 1
},
{ // 23 à vérifier
    question: `Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
    input: `
    <input type="radio" name="qst" value="oui">
    <label>Oui</label><br>
    <input type="radio" name="qst" value="non">
    <label>Non</label><br>
    <input type="radio" name="qst">
    <label>Ne sait pas</label><br>`,
    type: 1
},







];

let currentQuestion = 0;
const totalQuestions = questions.length;
let progress = document.querySelector("#progress");
const preambule = document.querySelector("#preambule");
const start = document.querySelector("#start");
const qst = document.querySelector("#qst");
const form = document.querySelector("#form");
const info = document.querySelector("#test-info");
const btnPrevious = document.querySelector("#btn-previous");
const btnNext = document.querySelector("#btn-next");
let answers = [];





info.style.display = "none";
btnPrevious.style.display = "none";
btnNext.style.display = "none";


// function bar(progression) {
//     progress.firstElementChild.style.width = `${100/23*progression}%`;
//     progress.firstElementChild.style.backgroundColor = 'blue';
// } 

// function retrieveAnswer(name) {
//     return document.querySelector("input[name=" + name + "]:checked");
// }



function loadQuestion(questionIndex) {
let q = questions[questionIndex];
qst.textContent = q.question;
form.innerHTML = q.input;

}



function startTest() {
currentQuestion = 0;
preambule.style.display = "none";
loadQuestion(0);
btnNext.style.display = "";
btnPrevious.style.display = "none";
qst.style.display = "";
form.style.display = "";
btnNext.textContent = " la question suivante";
info.style.display = "block";

}

function loadNextQuestion() {

const inputNumber = document.querySelector("#number");
const inputs = document.querySelector("input");

if (inputs.id === 'number') { // oui if (questions[currentQuestion].type === 2) 

    answers.push(parseFloat(inputNumber.value));
    console.log(answers);

} else if (questions[currentQuestion].type === 1) {
    var valeur = document.querySelector('input[name=qst]:checked');
    if (valeur === null) {
        alert("please enter your answer");
        return;
    } else {
        answers.push(valeur.value);
        console.log(answers);
    }

}
//    var q = questions[currentQuestion];
//    if(retrieveAnswer(q.name) == null) {
//     alert("please enter your answer");
//     return;
//    } else {
//      answers.push(retrieveAnswer(q.name).value == "true");
//      console.log(answers);
//    }

currentQuestion++;
btnPrevious.style.display = "block"; //ou bien = "" pour annuler le display none
info.style.display = "none";
if (currentQuestion == totalQuestions - 1) {
    btnNext.textContent = "terminer";
}
if (currentQuestion == totalQuestions) {
    preambule.style.display = "block";
    qst.style.display = "none";
    form.style.display = "none";
    btnNext.style.display = "none";
    btnPrevious.style.display = "none";
} else {
    loadQuestion(currentQuestion);
}


}


function loadPreviousQuestion() {
currentQuestion--;
btnNext.textContent = " la question suivante";
if (currentQuestion == 0) {
    btnPrevious.style.display = "none";
    info.style.display = "block";
}
loadQuestion(currentQuestion);
answers.pop();
}

// facteur pronostique 

function facteurPronostique(age, hypertensionCardio, diabetique, cancer, maladieRespir, insuffisanceRenale, maladieFoie, enceinte, defenseImmuno, traitementImmuno, ) {
var calculFacteurPronostique = 0
if (age >= 70) {
    calculFacteurPronostique++;
}
if (hypertensionCardio == "oui") {
    calculFacteurPronostique++;
}
if (diabetique == "oui") {
    calculFacteurPronostique++;
}
if (cancer == 'oui') {
    calculFacteurPronostique++;
}
if (maladieRespir == 'oui') {
    calculFacteurPronostique++;
}
if (insuffisanceRenale == 'oui') {
    calculFacteurPronostique++;
}
if (maladieFoie == 'oui') {
    calculFacteurPronostique++;
}
if (enceinte == 'oui') {
    calculFacteurPronostique++;
}
if (defenseImmuno == 'oui') {
    calculFacteurPronostique++;
}
if (traitementImmuno == 'oui') {
    calculFacteurPronostique++;
}

return calculFacteurPronostique;

}

// facteur de gravité mineur

function facteurGraviteMineur (fievre,fatigue,malaise) {
var calculFacteurGraviteMineur = 0;
if (fievre >= 39) {
    calculFacteurGraviteMineur ++;
}
if (fatigue == 'oui') {
    calculFacteurGraviteMineur ++;
}
if (malaise == 'oui') {
    calculFacteurGraviteMineur ++;
}
return  calculFacteurGraviteMineur;
}

// facteur de gravité majeur

function facteurGraviteMajeur (geneRespira,difficultéAlimentation,fievre) {
var calculFacteurGraviteMajeur = 0 ;
if (geneRespira == 'oui') {
calculFacteurGraviteMajeur++;
}
if (difficultéAlimentation == 'oui') {
    calculFacteurGraviteMineur++;
}
if (fievre <= 35.4) {
    calculFacteurGraviteMineur++;
}
return calculFacteurGraviteMajeur;
}

//algo 

function getResult () {

}
