// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.


// This line is defining a new function named logs and it takes in three parameters/inputs x, a, b.
function logs(x, a, b) {
    //     This line is doing the calculation and returning the final result.
    // It's using the Math.log(a) and Math.log(b) to calculate the natural logarithms of a and b respectively. As we want the logarithm with base x, we are dividing the natural logarithm by Math.log(x).
    // Finally, it's adding the two logarithms together and returning the final value.

    // So, this function logs(x , a, b) takes in three inputs x, a, b and returns the result of logarithm of a with base x plus logarithm of b with base x.
    return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x));
}