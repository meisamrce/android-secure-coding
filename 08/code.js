console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var json = Java.use("org.json.JSONObject");
    json.put.overload("java.lang.String","java.lang.Object").implementation = function(key,value){
        console.log(key);
        console.log(value);
        return this.put(key,value);
    }
    
    setTimeout(function() {
        console.log('setTimeout is call');
        Java.choose("com.example.weakcryptography.MainActivity",{
            onMatch:function(instance){
                console.log(instance);
                Java.scheduleOnMainThread(function () {
                    instance.encrypt.overload("java.lang.String").implementation = function(str){
                        console.log('encrypt method is call');
                        console.log(str);
                        return this.encrypt(str);
                    }                
                });
            },
            onComplete:function (){}
        }); 
    },5000);

});