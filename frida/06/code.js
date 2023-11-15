console.log("Script loaded successfully ");
Java.perform(function() {
    console.log("Inside java perform function");
    setTimeout(function() {
        console.log('setTimeout is call');
        Java.choose("com.example.frida6.MainActivity",{
            onMatch:function(instance){
                console.log(instance);
                Java.scheduleOnMainThread(function () {
                    console.log("isMainThread", Java.isMainThread());
                    instance.check.overload('java.lang.String').implementation = function(str)
                    {
                        console.log(str);
                       // this.check("Good");
                        this.check.overload('java.lang.String').call(this,"Good");
                    }
                });
            },
            onComplete:function (){}
        }); 
    },5000);
});


    