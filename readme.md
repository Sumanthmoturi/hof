// 3. forEach
forEach([1, 2, 3], n => console.log(n * n));
// Output: Logs 1, 4, 9 (does not return a new array)

// 4. every
every([2, 4, 6], n => n % 2 === 0);
// Should return true (all elements are even)

// 5. some
some([1, 2, 3], n => n % 2 === 0);
// Should return true (at least one element is even)

// 6. find
find([1, 2, 3, 4], n => n > 2);
// Should return 3 (first element greater than 2)

// 7. findIndex
findIndex([1, 2, 3, 4], n => n > 2);
// Should return 2 (index of the first element greater than 2)

// 8. flatMap
flatMap([1, 2, 3], n => [n, n * 2]);
// Should return [1, 2, 2, 4, 3, 6] (each element is mapped to an array, then flattened)

// 9. sort
sort([3, 1, 4, 2], (a, b) => a - b);
// Should return [1, 2, 3, 4] (sorted in ascending order)

// 10. groupBy
groupBy(['apple', 'banana', 'apricot'], fruit => fruit[0]);
// Should return { a: ['apple', 'apricot'], b: ['banana'] } (groups by the first letter)

// 11. partition
partition([1, 2, 3, 4], n => n % 2 === 0);
// Should return [[2, 4], [1, 3]] (even numbers in the first array, odd in the second)

// 12. memoize
const slowSquare = n => {
    console.log(Calculating ${n}^2);
    return n * n;
};
const memoizedSquare = memoize(slowSquare);
memoizedSquare(3); // Logs "Calculating 3^2" and returns 9
memoizedSquare(3); // Returns 9 without logging (cached result)