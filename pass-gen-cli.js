var out = [];

process.argv.slice(2, process.argv.length)
    .forEach(arg => {
    if (arg.slice(0, 2) === '--') {
        const longArg = arg.split('=');
        const longArgFlag = longArg[0].slice(2, longArg[0].length);
        const longArgValue = longArg.length > 1 ? longArg[1] : true;
        out[longArgFlag] = longArgValue;
    }
});

var args1 = false;
var args2 = false;

function random(lenght) {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+[]{};:,.<>/?|";
    var result = "";
    for ( var i = 0; i < lenght ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
}

if(!out["size"] || out["size"].lenght !== 0 || !out["size"].trim() && out["size"] <= 1000){
    var regexNumber = /^[0-9]+$/;
    if(!regexNumber.test(out["size"])){
        console.log("``--size`` can not contain character, please enter a number");
    } else {
        args1 = true;
    }    
} else {
    console.log("``--size`` is empty, please select a valid number\n");
}


if(!out["repeat"] || out["repeat"].lenght !== 0 || !out["repeat"].trim() && out["repeat"] <= 100){
    var regexNumber = /^[0-9]+$/;
    if(!regexNumber.test(out["repeat"])){
        console.log("``--repeat`` can not contain character, please enter a number");
    } else {
        args2 = true;
    }    
} else {
    console.log("``--repeat`` is empty, please select a valid number");
}

if(args1 && args2) {
    var array = [];
    for (let index = 0; index < out["repeat"]; index++) {
        console.log(index + " » " + random(out["size"]));
    }
}else{
    console.log("The command was executed incorrectly");
}
