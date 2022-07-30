console.log("Script loaded successfully ");
Java.perform(function() {
    console.log("Inside java perform function");
    setTimeout(function() {
        console.log('setTimeout is call');
        Java.choose("com.example.frida4.MainActivity",{
            onMatch:function(instance){
                console.log(instance);
                Java.scheduleOnMainThread(function () {
                    console.log("isMainThread", Java.isMainThread());
                    var my_string = Java.use("java.lang.String");
                    var btn = Java.use("android.widget.Button");
                    var btn_id = instance.findViewById(0x7f080062);
                    var check = Java.cast(btn_id, btn);
                    check.setText(my_string.$new("Run!"));
                    console.log("hook :)");
                });
            },
            onComplete:function (){}
        }); 
    },5000);
});


    