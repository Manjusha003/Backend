let date = new Date();

function printDate() {
    console.log("Todays Date is: ", date.getDate());
}

function printMonth() {
    let month = date.getMonth();
    console.log("Current Month is: ", month + 1);
}

function printBatchInfo() {
    console.log(
        "Plutonium, W3D5, the topic for today is Nodejs module system."
    );
}
module.exports.getDate = printDate;
module.exports.getMonth = printMonth;
module.exports.getBatchInfo = printBatchInfo;
