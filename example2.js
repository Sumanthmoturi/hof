//1.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b);
// Should return [5, 7, 9] (sums corresponding elements)
function zipWith(array1,array2,callback) {
    const commonLength=Math.min(array1.length,array2.length)
    const result=[]
    for (let i=0;i<commonLength;i++) {
        result.push(callback(array1[i],array2[i]))
    }
    return result
}
console.log(zipWith([1,2,3],[4,5,6],(a,b)=> a+b))



//2.unionBy: Combines two arrays, removing duplicates based on a function.
//unionBy([1.1, 2.2, 1.5], [2.1, 3.5], Math.floor);
// Should return [1.1, 2.2, 3.5] (removes duplicates after applying `Math.floor`)
function unionBy(array1,array2,functions) {
    const resultantCombinedArray=[...array1,...array2]
    const seen=new Set()     //created a set to track unique values
    const  result=[]
    for (const item of resultantCombinedArray) {     //apply the function functions to item to get a computed value
        const computedValue=functions(item)
        if (!seen.has(computedValue)) {
            seen.add(computedValue)
            result.push(item)
        }
    }
    return result;
}
console.log(unionBy([1.1, 2.2, 1.5], [2.1, 3.5], Math.floor));



/*3.mergeWith: Merges two objects, with a function to resolve conflicts when both have the same key.
mergeWith({ a: 1, b: 2 }, { b: 3, c: 4 }, (x, y) => x + y);
// Should return { a: 1, b: 5, c: 4 } (adds values when keys overlap)
*/
function mergeWith(obj1,obj2,resolveConflict) {
    const result={...obj1}
    for (const key in obj2) {                                           //loop thorugh each key-value pair in obj2
        if (obj2.hasOwnProperty(key)) {
            if (result.hasOwnProperty(key)) {
                result[key] = resolveConflict(result[key], obj2[key])   //if both objects have same key use resolve conflict to determine value
            } else {
                result[key] = obj2[key]                                //if obj2 has unique key,jst add it to result
            }
        }
    }
return result;
}
console.log(mergeWith({ a: 1, b: 2 }, { b: 3, c: 4 }, (x, y) => x + y));



/*4.groupByMultiple: Groups elements of an array by multiple criteria.
groupByMultiple(['apple', 'banana', 'cherry'], item => [item[0], item.length]);
 Should return { a: { 5: ['apple'] }, b: { 6: ['banana'] }, c: { 6: ['cherry'] } }
 (groups by the first letter and length of each string)
*/

function groupByMultiple(array,functions) {
    const result={}                                 //empty object to store grouped results        
    for (const item of array) {                     //loop thorugh each item in array
        const keys=functions(item)                  //get an array of keys for grouping
        let current = result                        //starting at root of object
        keys.forEach((key,index) => {               //traversing each keys in criteria levels
            if (index===keys.length-1) {
                if (!current[key]) {
                    current[key]=[]
                    current[key].push(item);
                } else {
                    if (!current[key]) {
                        current[key]={}
                        current=current[key]

                    }

                }
            }
        })
    }
    return result;
}
console.log(groupByMultiple(['apple', 'banana', 'cherry'], item => [item[0], item.length]));



/*5.applyDiscounts: Applies multiple discount functions in order to a price.
applyDiscounts(100, [(price) => price * 0.9, (price) => price - 5]);
 Should return 85 (applies a 10% discount, then subtracts $5)
*/
function applyDiscounts(price,discountFunction) {
    return discountFunction.reduce((currentPrice, discountFunction) => discountFunction(currentPrice), price);
}
console.log(applyDiscounts(100, [(price) => price * 0.9,(price)=> price-5]))
