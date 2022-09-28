let username = "james"
let userage = 45
let userPets = ["Cat", "Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingForPet = 6
let daysSurvived = 0

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingForPet * userPets.length
    userBalance -= spending
    daysSurvived += 1

}

console.log(`Days survived ${daysSurvived}.`)

function nameVertical(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }

}

nameVertical("Sarah")

function code(n) {
    return n >= 100 && n <= 199 ? "informational" : n <= 299 ? "succesful" : n <= 399 ? "redirection" : n <= 499 ? "Client error" : n <= 599 ? "server error" : "not a valid code";
}

console.log("code 198: " + code(198))
console.log("code 0: " + code(0));
console.log("code 900: " + code(900));

function compareVariables(var1, var2) {
    console.log(`var1: ${var1}, var2: ${var2}`);
    if (var1 === var2) {
        console.log("The two variables have the same type and value ")
    } else if (var1 == var2) {
        console.log("the two variables have the same value but not the same type");
    } else {
        console.log("two valies do onot have the same type nor the same value")
    }
}


