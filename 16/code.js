//frida -l code.js -f com.example.ndk1 -D 127.0.0.1:6555
Java.perform(function () {
    console.log("Inside java perform function");
    Interceptor.attach(Module.getExportByName('libndk1.so', 'Java_com_example_ndk1_MainActivity_checkLic'), {
        onEnter: function (args) {
            console.log('onEnter');
            var input = Java.vm.getEnv().getStringUtfChars(args[2], null).readCString();
            console.log(input);
        },
        onLeave: function (retval) {
            console.log('onLeave');
            console.log(retval);
            retval.replace(1);
        }
    });    
});