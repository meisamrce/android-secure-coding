console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    //get a wrapper for our class
    var my_class = Java.use("com.example.frida2.MainActivity");
    my_class.checkPin.implementation = function () {
        console.log("[ + ] PIN check successfully bypassed!");
        return true;
    }
});