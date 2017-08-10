const codelist = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
const frame = '|';

function inputsIsRight(inputs) {
    const reg1 = /^\d{5}$/;
    const reg2 = /^\d{5}\-\d{4}$/;
    const reg3 = /^\d{9}/;
    if (reg1.test(inputs) || reg2.test(inputs) || reg3.test(inputs)) {
        return true;
    }
    return false;
}

function checkDash(arr) {
    if (arr.includes('-')) {
        arr.splice(arr.indexOf('-'), 1);
    }
}

function addCD(arr) {
    let sum = arr.map((value, index, arr) => Number(value)).reduce((pre, now, arr) => pre + now);
    let cd = Math.ceil(sum / 10) * 10 - sum;
    arr.push(cd);
}

function encoding(arr) {
    let result='';
    for(let i of arr){
        result+=codelist[i];
    }
    return frame+result+frame;
}

function zipCode(inputs) {
    if (inputsIsRight(inputs)) {
        let arr = inputs.split('');
        checkDash(arr);
        addCD(arr);
        let result=encoding(arr);
        return result;
    } else {
        console.log('Error Inputs!');
    }
}


function splitCode(str) {
    let codes=[];
    for(let i=0;i<str.length;i+=5){
        codes.push(str.substr(i,5));
    }
    return codes;
}

function decoding(arr) {
    let codes=splitCode(arr.join(''));
    let result=[];
    for(let i of codes){
        let index=codelist.indexOf(i);
        if(index===-1){
            console.log('Error Code!');
            return
        }
        result.push(index);
    }
    result.pop();
    return result
}


function addDash(result) {
    result.splice(5,0,'-');
}

function postCode(inputs) {
    let arr=inputs.split('');
    arr.shift();
    arr.pop();
    let result=decoding(arr);
    if(result.length===9){
        addDash(result);
    }
    return result.join('');
}

function isZipCode(inputs) {
    return /\d+/.test(inputs);
}

function main(inputs) {
    if(isZipCode(inputs)){
        return zipCode(inputs);
    }else{
        return postCode(inputs);
    }
}

module.exports = main;