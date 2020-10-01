# LovelyStay Challenge 1

Using the library ramda, what is the result of the following code?

R.reduce((acc,x) => R.compose(R.flip(R.prepend)(acc), R.sum,R.map(R.add(1)))([x,...acc]), [0])([13, 28]);

### Solution

The solution is completed on the file challenge1.js
