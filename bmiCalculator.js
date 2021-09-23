function bmiCalculator(weight, height){
    var bmi = weight/Math.pow(height, 2);
    bmi = Math.round(bmi*100)/100;
    if (bmi < 18.5){
        return "Your BMI is "+bmi+", so your are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        return "Your BMI is "+bmi+", so you have a normal weight.";
    } else if (bmi >= 24.9) {
        return "Your BMI is "+bmi+", so you are overweight.";
    }
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);