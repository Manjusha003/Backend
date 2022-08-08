function trim() {
    const str = "    Manjusha Raut          ";
    console.log("Trimed string is:", str.trim());
}

function changetoLowerCase() {
    const str = "MANJUSHA RAUT";
    console.log("string converted into lowerCase: ", str.toLowerCase());
}

function changetoUpperCase() {
    const str = "manjusha raut";
    console.log("string converted into lowerCase: ", str.toUpperCase());
}

module.exports.getLowerCase = changetoLowerCase;
module.exports.getUpperCase = changetoUpperCase;
module.exports.getTrim = trim;
