function play() //this is for the computer to identify the function
{
    var n1 = Math.ceil(Math.random() * 6); //this line randomizes the numbers
    document.getElementById("num1").innerHTML = " the num is " + n1;
}
