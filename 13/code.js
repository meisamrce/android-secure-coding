console.log("Script loaded successfully ");
Java.perform(function x() {
    console.log("Inside java perform function");
    var my_class = Java.use("com.example.insecuredeserialization.User");
    my_class.$init.overload("java.lang.String","java.lang.String").implementation = function (a,b) {
        this.role.value = "ROLE_EDITOR";
        console.log(this.role.value);
        console.log(a);
        console.log(b);

    }

});