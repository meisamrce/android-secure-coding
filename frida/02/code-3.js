console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    var cls = Java.use('com.example.frida2.Pin');
    for(var i = 1000; i <= 9999; i++){
        if(cls.checkPin(i + "") == true){
         console.log("[ + ] Found PIN: " + i);
        }
    }

});