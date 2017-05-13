//The questions array with answers and choices. 
var questions = [
    {
        question: "What controls most of the cell processes and contains the hereditary information of DNA?",
        choices: ["Mitochondria", "Chloroplast", "Nucleus", "Nucleolus"],
        answer: "Nucleous"
    },

    {
        question: "What part of the cell is responsible for breaking down and digesting things?",
        choices: ["Ribosomes", "Lysosomes", "Endoplasmic reticulum", "Vacuole"],
        answer: "Lysosomes"
    },

    {
        question: "What part of the cell serves as the intracellular highway?",
        choices: ["Endoplasmic reticulum", "Golgi apparatus", "Cell membrane", "Mitochondria"],
        answer: "Endoplasmic reticulum"
    },

    {
        question: "Which of the following is found in plant cells, but not animal cells?",
        choices: ["Cell wall", "Vacuole", "Mitochondria", "Endoplasmic reticulum"],
        answer: "Cell wall"
    },

    {
        question: "The jellylike interior of the cell is called the?",
        choices: ["Vacuole", "Cytoplasm", "Cytoskeleton", "Nucleus"],
        answer: "Cytoplasm"
    },
]

// Here we have global variables
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

//this is for the timer.
var number = 100;
var intervalId;



// ==========================================================

function run(){
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    $("#timer").html("<p>Time remaining: " + number + "</p>");
    number--;
    if (number === 0){
        $("#content").html("<h2><strong>" + "Great job! Let's see how you did!" + "</h2>" + "<h3>" + "Correct Answers: " + correctCount + "</h3>" + "<h3>" + "Incorrect Answers: " + incorrectCount + "</h3>" + "<h3>" + "Unanswered: " + unansweredCount + "</h3></strong>");
        $("#submit-button").hide();
    }
}


// =============================================================


// Hides button
$("#submit-button").hide();

// Click events on start
$("#start-button").click(function(){
    $("#start-button").hide();
    $("#timer").show();
    $("#submit-button").show();
    run();
    
    for (var i = 0; i < questions.length; i++) {

        $("#content").append("<br>" + questions[i].question + "<br>");

        for(var a = 0; a < questions[i].choices.length; a++){
            $("#content").append("<input type='radio' name='" + questions[i].choices[a] + "'value='" + questions[i].choices[a] + "'>" + "&nbsp;" + questions[i].choices[a] + "<br>");
        }
    }

});

$("#submit-button").click(function(){
    $("#content").html("<h2>" + "Great job! Let's see how you did!" + "</h2>" + "<h3>" + "Correct Answers: " + correctCount + "</h3>" + "<h3>" + "Incorrect Answers: " + incorrectCount + "</h3>" + "<h3>" + "Unanswered: " + unansweredCount + "</h3>");
    $("#submit-button").hide();
})
