var randomCount = Math.floor(Math.random() * 10)
var prediction = prompt("Enter a number")

if (prediction == randomCount && prediction != null){
    alert("How did you know?");
}else if( prediction == ""){
    alert("write a number");
} else if(prediction == null){
    alert("just write it down")
}else {
    alert("try again")
}