console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    //get a wrapper for our class
    var my_class = Java.use("com.scottyab.rootbeer.RootBeer");
    my_class.isRooted.implementation = function () {
        return false;
    }
});