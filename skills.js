function calculateNumbers(var1, var2) {
    // print numbers
    console.log(var1, var2);
    
    // pow with for loop var1 to power of var2
    let result = 1;
    for (let i = 0; i < var2; i++) {
        result *= var1;
    }
    return result;
}
