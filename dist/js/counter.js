let k = 0;

const step = () => {
    ++k;
    postMessage(k);
    if (k < 99999){
        setTimeout("step()", 500);
    }
}

step();