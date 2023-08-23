// Cpnstant variable for exercise 

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}




// Main functions for the project
function runFiveMiles() { 
    console.log("Go for a five-mile run")
}

function liftWeights() { 
    console.log("Pump iron")
}

function swimFortyLaps() {
    console.log("Swim 40 laps")
}



// Pilates 

exerciseRoutine(function () { 
    console.log("Stretch! Work that core!");

});

//Convert into arrow function 

exerciseRoutine(() => { 
    console.log("Stretch! Work that core!");
});

// even shorter arrow function syntax

exerciseRoutine(() => console.log("Stretch! Work that core!"));



// Returning functions

function morningRoutine(exercise) {
    let breakfast; 

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

// we could name it but since we are only using it once we dont need to 

    return function () {
        console.log('Nom nom nom, this ${breakfast} is delicious! Nom nom nom.');
    };
}

const afterExercise = morningRoutine(liftWeights);
// afterExercise is a function! We know because it was returned by morningRoutine
// Log: Go for a five mile run, pump iron

afterExercise();
// Nom nom nom, this protein bar is delicious! Nom nom nom.


// Lab:

// 1. Write a function called receivesAFunction that accepts a function as a parameter and returns the function that was passed into it.

function receivesAFunction(callback) {
    return callback();
}

// 2. Write a function called returnsANamedFunction that returns a named function (NOT an anonymous function).
function namedFunction() {
    console.log("Hello, I'm a named function!");
}


function returnsANamedFunction() {
        return namedFunction;

}

//3. Write a function called returnsAnAnonymousFunction that returns an anonymous function.

function returnsAnAnonymousFunction() {

     return function () {
        console.log("Hello");

}
}





