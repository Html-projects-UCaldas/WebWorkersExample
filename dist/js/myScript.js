var worker1;
var worker2;

const btnStart1_onClick = () => {
   let lblCounter1 = document.getElementById("lblCounter1");

   if (typeof (Worker) !== undefined) {
       if (worker1 === undefined) {
           worker1 = new Worker('/dist/js/counter.js');
           worker1.onmessage = function (event) {
               lblCounter1.innerHTML = event.data;
           };
       };
   }
   else {
       alert("Error: Web Workers not supported!!!");
   }
}

const btnStop1_onClick = () => {
    let lblCounter1 = document.getElementById("lblCounter1");
    if (typeof (worker1) !== undefined){
        worker1.terminate();
        worker1 = undefined;
    }
    lblCounter1.innerHTML = '0';
}

const btnStart2_onClick = () => {
    let lblCounter2 = document.getElementById("lblCounter2");
 
    if (typeof (Worker) !== undefined) {
        if (worker2 === undefined) {
            worker2 = new Worker("/dist/js/counter.js");
            worker2.onmessage = function (event) {
                lblCounter2.innerHTML = event.data;
            };
        };
    }
    else {
        alert("Error: Web Workers not supported!!!");
    }
 }

 const btnStop2_onClick = () => {
    let lblCounter2 = document.getElementById("lblCounter2");
    if (typeof (worker2) !== undefined){
        worker2.terminate();
        worker2 = undefined;
    }
    lblCounter2.innerHTML = '0';
}