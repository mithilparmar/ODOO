// This function generates a random number between 1 and 1000
function random() {
    let x = Math.floor((Math.random() * 1000) + 1);
    document.getElementById("result").value = x;
}


// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function counts down the number to 0 and then display Happy Birthday
function start() {
    const obj = document.getElementById("result");
    var start = document.getElementById("result").value;
    var end = 0;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const doThis = async () => {
        for (let i=start; i>=end; i--) {
            await sleep(1)
            if(i>end){
                obj.value = i
            }
            else {
                obj.value = "Happy Birthday"
            }
        }
    }
    doThis()
}