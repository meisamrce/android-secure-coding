console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var b = Java.use("db.b");
    b.n.implementation = function () {
        console.log('n');
        var n = this.n();
        console.log(n);
        return false;
    }
    
    var x0 = Java.use("da.x0");
    x0.V1.implementation = function () {
        console.log('V1');
        return false;
    }
    
});