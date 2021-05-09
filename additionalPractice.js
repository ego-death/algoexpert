function f1(arr) {
    return 1 + arr[0];
}

function f2(arr) {
    let sum = 0;
    for(const el of arr) {
        sum += el;
    }
    return sum;
}

function f3(arr) {
    let results = [];
    for(let i=0;i<arr.length;++i) {
        let num = arr[i];
        for(let j=0;j<arr.length;++j) {
            results.push([num, arr[j]]);
        }
    }
    return results;
}

let arr = new Array(50).fill(5);
arr = (arr.map(el=>el=2));
console.log(arr);