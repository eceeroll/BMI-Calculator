// choosing elements 

const formDom = document.getElementById("form");
const heightDom = document.getElementById("height");
const weightDom = document.getElementById("weight");
const genderDom = document.getElementById("gender");
const resultDom = document.getElementById("result");
const result_commentDom = document.getElementById("result-comment");

form.addEventListener("submit", calculateBMI);

function calculateBMI(e) {

    var height = heightDom.value;
    var weight = weightDom.value;
    var gender = genderDom.value;
    
    var bmi = (weight / (height*height));
    bmi = bmi.toFixed(2); 
    console.log(bmi)
    e.preventDefault();
    showResultsAtUI(bmi);
    getResultComment(bmi);
}

function showResultsAtUI(bmi) {

    const results = document.getElementById("result_p");

    results.innerHTML = `
                    Your Current BMI is:
                    <span id="result"> ${bmi} </span> <br>
                    <span id="result-comment"> ${getResultComment(bmi)} </span> 
    `
}

function getResultComment(bmi) {
    if (bmi <= 18.5) {
        return 'Your weight is less than it ideally should be. See your doctor or health professional and discuss whether you may need to aim at gaining weight. ';
    }
    else if(bmi>18.5 && bmi <=24.9 ) {
        return 'Your BMI is currently within what is considered a healthy weight range. Being a healthy weight has important benefits as it can help reduce your risk of heart disease, diabetes and a range of other conditions.';
    }
    else if(bmi>24.9 && bmi <=29.9) {
        return 'Your weight appears to be a bit above the ideal range. You might like to talk to your doctor about whether you need to set yourself a new target for a healthy weight';
    }
    else if(bmi>29.9) {
        return 'You currently weigh more than is ideal. This puts your health at risk and is of increasing concern, particularly as you get older. Talk to your doctor about your BMI and discuss an appropriate and healthy weight for you.';
    }
}
