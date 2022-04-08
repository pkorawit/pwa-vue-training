function register(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const sid = document.getElementById("sid").value
    
    if(email == ""){
        alert("Please fill email");
        document.getElementById("email").focus();
        return;
    }

    if(name == ""){
        alert("Please fill name");
        document.getElementById("name").focus();
        return;
    }

    if(sid == ""){
        alert("Please fill student ID");
        document.getElementById("sid").focus();
        return;
    }

    console.log(email);
    console.log(name);
    console.log(sid);
    alert("Registration completed!");
}