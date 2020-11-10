// Callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint = () => console.log('simplePrint!');
simplePrint();

const add = (a, b) => a + b;

const add1 = (a, b) => {
    return a + b;
}

const add2 = function(a, b) {
    return a + b;
}

(function hello() {
    console.log('IIFE');
})();