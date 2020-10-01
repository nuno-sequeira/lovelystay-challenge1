const R = require('ramda');

R.reduce((acc,x) => R.compose(R.flip(R.prepend)(acc), R.sum,R.map(R.add(1)))([x,...acc]), [0])([13, 28]);

// First we need to know what R.reduce does. It calls an iterator function which passes the acc value
// and the current value from the array, the array being [13, 28], and solving according to the first argument.

// Next comes R.compose, which is inside the function from the first argument of R.reduce.
// This function allows us to perform right-to-left function composition
// which means that we start with R.map(R.add(1)). Of course we can't forget ([x,...acc]).
// The array will recieve x and fill the rest of the array acording to the number of
// elements in acc. 
// So for each element of the array, R.add(1), will add 1.

// Then, R.sum gathers everything from the list and sums.

// Finally, R.flip(R.prepend)(acc), returns a function that gets what's in acc, 
// prepends it to the array and then flips the order of the first two

// I believe that a good train of thoughts would be:

// First, we have:
acc = [0]
x = 13
// For the compose we would get
[13, 0]

// Then map with +1
[14, 1]

// Then sum everything on the list and save the value
15

// With this, prepend to acc
[15, 0]

// Now, we repeat the process

// First, we have:
acc = [15, 0]
x = 28
// For the compose we would get
[28, 15, 0]

// Then map with +1
[29, 16, 1]

// Then sum everything on the list and save the value
46

// With this, prepend to acc
[46, 15, 0]
