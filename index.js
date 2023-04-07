const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let intervalId;
const start = () => {
    let numh = 0;
    let nummin = 0;
    let numsec = 0;
    intervalId = setInterval(() => {

        if (numsec == 60) {
            nummin++;
            numsec = 0;
        }
        if (nummin == 60) {
            numh++;
            nummin = 0;
        }


        // padding the digits upto 2 digits 
        hrs.innerText = String(numh).padStart(2, "0");
        min.innerText = String(nummin).padStart(2,"0");
        sec.innerText = String(numsec).padStart(2,"0");
        numsec++;

    }, 1000)
}

const stop = () => {
    console.log(intervalId);
    clearInterval(intervalId);
}