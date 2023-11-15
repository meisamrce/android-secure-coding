console.log("Script loaded successfully ");
Java.perform(function () {
    console.log("Inside java perform function");
    var count = 0;
    setTimeout(function() {
        console.log('setTimeout is call');
        Java.choose("ata.zeki.gilas._01_start",{
            onMatch:function(instance){
                console.log(instance);
                Java.scheduleOnMainThread(function () {
                    console.log("hook :)");
                    console.log(count);
                    instance.finish.overload().implementation = function()
                    {
                        console.log('finish is call!');
                        count++;
                        console.log(count);
                        if(count > 2)
                        {   
                            instance.finish.overload().call(this);
                        }
                    }    
                    
                });
            },
            onComplete:function (){}
        }); 
    },5000);

});