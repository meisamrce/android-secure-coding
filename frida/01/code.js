console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    //get a wrapper for our class
    var my_class = Java.use("com.example.frida1.MainActivity");
    //replace the original implmenetation of the function `fun` with our custom function
    my_class.sum.implementation = function (x, y) {
        //print the original arguments
        console.log("original call: sum(" + x + ", " + y + ")");
        //call the original implementation of `sun` with args (5,10)
        var ret_value = this.sum(5,10);
        return ret_value;
    }
});