//map function
function map(array,callback) {
    const result=[]
    for (let i=0;i<array.length;i++) {
        result.push(callback(array[i]))
    }
    return result;
}
console.log(map([1,2,3], n=>n*n))
console.log(map([1, 2, 3], n => n + n));
console.log(map([1, 2, 3], n => n + n + n));
console.log(map([1, 2, 3], n => "Hello " + n));


//filter function
function filter(array,callback) {
    const result=[]
    for (let i=0;i<array.length;i++) {
        if (callback(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}
console.log(filter([1, 2, 3, 4], n => n % 2 === 0)); 
console.log(filter([1, 2, 3, 4], n => n > 2));
console.log(filter([1, 2, 3, 4], n => n < 2));


//forEach function
function forEach(array,callback) {
    for (let i=0;i<array.length;i++) {
        callback(array[i])
    }
}
forEach([1,2,3], n=> console.log(n*n))



//every function 
function every(array,callback) {
    for (let i=0;i<array.length;i++) {
        if (callback(array[i])) return true;
    }
    return false;
}
console.log(every([2, 4, 6], n => n % 2 === 0));


//some function 
function some(array,callback) {
    for (let i=0;i<array.length;i++) {
        if (callback(array[i])) return true;
    }
    return false;
}
console.log(some([1, 2, 3], n => n % 2 === 0));


//find function 
function find(array,callback) {
    for (let i=0;i<array.length;i++) {
        if (callback(array[i])) return array[i]
    }
    return undefined;
}
console.log(find([1, 2, 3, 4], n => n >2));


//findIndex
function findIndex(array,callback) {
    for (let i=0;i<array.length;i++) {
        if (callback(array[i])) return i
    }
    return -1;
}
console.log(findIndex([1,2,3,4], n=> n>2));



//flatMap= maps each element using a mapping function and then flattens the result into a new array.
function flatMap(array,callback) {
    const result=[]
    for (let i=0;i<array.length;i++) {
        result.push(...callback(array[i]))
    }
    return result;
}
console.log(flatMap([1, 2, 3], n => [n, n * 2]));  //each element is mapped to an array then flattened


//sort = sorts/orders the elements of an array in place and returns the sorted array
function sort(array, a) {
    return array.sort(a)
}
console.log(sort([3,1,4,2], (a,b)=> a-b))


//groupBy function = groups all elements of an array by a given criterion
function groupBy(array,callback) {
    const result={}
    for (let item of array) {
        const key=callback(item)
        if  (!result[key]) {
            result[key]=[]
            result[key].push(item);
        }
    }
    return result;
}
console.log(groupBy(['apple', 'banana','grape', 'apricot'], fruit => fruit[0]));



//partition function= parts/divides the array intwo two arrays, where one with elements that pass the tests and other that do  not
function partition(array,callback) {
    const passArray=[]
    const failArray=[]
    for (let i=0;i<array.length;i++) {
        if (callback(array[i])) {
            passArray.push(array[i])
        } 
        else {
            failArray.push(array[i])
        }
    }
    return [passArray,failArray]
}
console.log(partition([1, 2, 3, 4], n => n % 2 === 0));



//memioze =memioze function caches the results of expensive function calls to improve performance
function memoize(fn) {
    const cache={}                             //an object to store results
    return function(...args) {
        const key=JSON.stringify(args);        //converts args to a string key
        if (cache[key]) {
            return cache[key];                 //Returns  cached result if exists
        }
        const result=fn(...args)               //call the original function 
        cache[key]=result;                     //cache the result
        return result;
    }
}
const slowSquare = n => {
    console.log(`Calculating ${n}^2`);
    return n * n;
};
const memoizedSquare = memoize(slowSquare);
console.log(memoizedSquare(3)); // Logs "Calculating 3^2" and returns 9
console.log(memoizedSquare(3)); // Returns 9 without logging (cached result)
