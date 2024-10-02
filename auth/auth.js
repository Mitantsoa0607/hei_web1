function Submit(){
    let email=document.forms['registrationForm'].elements['email'];
    let pass =document.forms['registrationForm'].elements['pass'];
    if (email.value === "test@mail.hei.school" && pass.value === "admin"){
        window.open("../index/index.html");
    }
    else if (email.value === '' && pass.value === ""){
        return
    }
    else{
        alert('adresse email ou mot de passe invalide !')
    }
}