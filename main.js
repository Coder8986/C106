// https://teachablemachine.withgoogle.com/models/Kyd6SRbb8/ //

Dog = 0;
Cat = 0;
Cow = 0;
Horse = 0;

function Start() {
    navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kyd6SRbb8/model.json", modelready);
    }
    
    function modelready(){
        classifier.classify(gotresult);
    }

function gotresult(error, result){
    if (error) {
        console.log(error);
    }

    else {
console.log(result);

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);

document.getElementById("Result").innerHTML = "I can also hear " + result[0].label;
document.getElementById("Accuracy").innerHTML = " Accuracy - " + (result[0].confidence * 100).toFixed(2) + " %";

document.getElementById("Result").style.color = "rgb(" + r + "," + g + "," + b + ")";
document.getElementById("Accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

img_1 = document.getElementById("img1");


if ( result[0].label == "Barking") {
    img_1.src = "dog.jpg";
    Barking = Barking + 1;
    
}

else if( result[0].label == "Meowing") {
    img_1.src = "Cat.jpg";
    Cat = Cat + 1;

}

else if( result[0].label == "Mooing") {
    img_1.src = "cow.gif";
    Cow = Cow + 1;  
}

else if( result[0].label == "Neigh") {
    img_1.src = "horse.jpg";
    Horse =  Horse + 1;
}

else {
    img_1.src = "ear.png"
}
}

}
