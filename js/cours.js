
function toggleDec() {
    let toggleDec = document.getElementById("dec");
    let toggleAec = document.getElementById("aec");
    toggleDec.style.display = (toggleDec.style.display == "none" ? "block" : "none");
    toggleAec.style.display = (toggleAec.style.display == "none" ? "block" : "none");
}

// function toggleAec() {
//     let toggleDec = document.getElementById("dec");
//     let toggleAec = document.getElementById("aec");
//     toggleAec.style.display = "none" ? "block" : "none";
// }

// function myFunction() {
//     var mainFrameOne = document.getElementById("mainFrameOne");
//     var mainFrameTwo = document.getElementById("mainFrameTwo");

//     mainFrameOne.style.display = (
//         mainFrameOne.style.display == "none" ? "block" : "none");
//     mainFrameTwo.style.display = (
//         mainFrameTwo.style.display == "none" ? "block" : "none");
//  }

// $('#toggle > span').click(function() {
//     var ix = $(this).index();

//     $('#left').toggle( ix === 0 );
//     $('#right').toggle( ix === 1 );
// });
// function toggleAec(){
//     console.log('clicked Aec')
//     let toggleAec = document.getElementById("aec");
//     if (toggleDec.style.display === "none"){
//         console.log("to be block");
//     } else console.log("to be none");
// }
