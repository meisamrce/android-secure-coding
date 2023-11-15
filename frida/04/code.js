console.log("Script loaded successfully ");
Java.perform(function() {
    console.log("Inside java perform function");
    setTimeout(function() {
        console.log('setTimeout is call');
        Java.choose("com.example.frida3.MainActivity",{
            onMatch:function(instance){
                console.log(instance);
                Java.scheduleOnMainThread(function () {
                    console.log("isMainThread", Java.isMainThread());
                    instance.neverCall("ok");
                });
            },
            onComplete:function (){}
        }); 
    },5000);
});


    