let btnSubmit = document.querySelector('[data-submit]')
// Create a funtion
function displayMarks() {
    let marks = +document.querySelector('[data-marks]').value
    // Label's reference
    let output = document.querySelector('[data-output]');
    // switch
    switch (true) {
        case marks < 50:
            output.textContent = `Sorry, but you failed. Try again next time.`;
        break;
        case marks <= 59:
            output.textContent = `Barely passed. Please do better.`;
        break;
        case marks <= 69:
            output.textContent = `Not bad, but there is room for improvement.`;
        break;
        case marks <= 79:
            output.textContent = `Fighting for that distinction hy, keep it up!`;
        break;
        case marks <= 89:
            output.textContent = `Lovely stuff`;
        break;
        case marks <= 99:
            output.textContent = `Good, wow, you're the best, almost.`;
        break;
        case marks == 100:
            output.textContent = `A+   G.O.A.T!!!   A+`;
        break;
        default:
            output.textContent = `Don't be weird, put in your actual mark.`;
        break;
    }
}
btnSubmit.addEventListener('click', displayMarks)

// switch (true) {
//     case 100:
//         alert("A+")
//         console.log("A+");
//     break;
//     case (90 <= marks):
//         alert("A")
//         console.log("A");
//     break;
//     case (80 <= marks):
//         alert("B+")
//         console.log("B+");
//     break;
//     case (70 <= marks):
//         alert("Distinction!")
//         console.log("Distinction");
//     break;
//     case (60 <= marks):
//         alert("C+")
//         console.log("C+");
//     break;
//     case (50 <= marks):
//         alert("Passed!")
//         console.log("Passed!");
//     break;
//     default:
//         alert("FAILED!!!")
//         console.log("FAILED!!!");
//     break;
// }
