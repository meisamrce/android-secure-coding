console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var json = Java.use("org.json.JSONObject");
    json.put.overload("java.lang.String","java.lang.Object").implementation = function(key,value){
        console.log(key);
        console.log(value);
        return this.put(key,value);
    }

});