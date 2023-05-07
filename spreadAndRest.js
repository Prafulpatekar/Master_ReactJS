// Spread Operator
const arr = [1,2,3,4,5,6,7];
const newArr = [...arr,8,9,10];
console.log(newArr);

const obj = {
    name:"max"
};

const newObj = {...obj,age:40};
console.log(newObj);

// Rest Operator
const filter = (...args) =>{
    return args.sort();
}
console.log(filter(1,23,52,54,74,5,2))

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    let newArr = numberArray.map((num)=>{
        return {'val':num}
    });
    return newArr
};
console.log(transformToObjects(arr))