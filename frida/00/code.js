console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var my_class = Java.use("com.example.frida0.Check");
    my_class.status1.value = 100;
    my_class.$init.implementation = function () {
        this.status.value = "OK";
    }
    /*
        or 
    my_class.getCheck2.implementation = function()
    {
        return true;
    }
    */


});