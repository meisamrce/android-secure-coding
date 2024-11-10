console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    //get a wrapper for our class
    var my_class = Java.use("com.example.frida1.MainActivity");
    //replace the original implmenetation of the function `fun` with our custom function

});