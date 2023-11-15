console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var rootbeer = Java.use("com.scottyab.rootbeer.RootBeer");
    rootbeer.isRooted.implementation = function () {
        console.log('rootbeer is bypass!');
        return false;
    }

    var DeviceHelper = Java.use("ir.co.ecd.deca.utils.DeviceHelper");
    DeviceHelper.isEmulator.implementation = function () {
        console.log('isEmulator is bypass!');
        return false;
    }

});