const str = 'Xamarin';

function getTheGapX(str) {
    let first = -1;
    let last = -1;
    Array.from(str).forEach(function (element, index) {

        if (element !== "X") {
            return;
        }
        if (first == -1) {
            first = index;
        }
        last = index;
        if (first !== -1 && last !== -1) {
            console.log(`The gap is ${last - first}`);
            return;
        }
    });
    console.log(first);
    console.log(last);
    console.log(last - first);
    if (first == -1) {
        return -1;
    } else if (first === last) {
        return 0;
    }
    return last - first;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)