console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var utils = Java.use("me.a40app.kaman.utils.Utils");
    utils.isDeviceRooted.implementation = function () {
        console.log('isDeviceRooted');
        return false;
    }
});