let marks = parseInt( prompt('Enter mark obtained') )
switch (true) {
    case 100:
        alert("A+")
        console.log("A+");
    break;
    case (90 <= marks):
        alert("A")
        console.log("A");
    break;
    case (80 <= marks):
        alert("B+")
        console.log("B+");
    break;
    case (70 <= marks):
        alert("Distinction!")
        console.log("Distinction");
    break;
    case (60 <= marks):
        alert("C+")
        console.log("C+");
    break;
    case (50 <= marks):
        alert("Passed!")
        console.log("Passed!");
    break;
    default:
        alert("FAILED!!!")
        console.log("FAILED!!!");
    break;
}
