var getData = function(){
    var Cedula = document.getElementById("Cedula").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Nombres = document.getElementById("Nombres").value;
    var Direccion = document.getElementById("Direccion").value;
    var Semestre = document.getElementById("Semestre").value;
    var Paralelo = document.getElementById("Paralelo").value;
    var Correo = document.getElementById("Correo").value;
    if (Cedula == "") {
    document.getElementById("Cedula").focus();
    } else {
    if (Apellidos == "") {
    document.getElementById("Apellidos").focus();
    } else {
    if (Nombres == "") {
    document.getElementById("Nombres").focus();
    } else {
    if (Direccion == "") {
    document.getElementById("Direccion").focus();
    } else {
    if (Semestre == "") {
    document.getElementById("Semestre").focus();
    } 
    if (Paralelo == "") {
        document.getElementById("Paralelo").focus();
        }else
        if (Correo == "") {
            document.getElementById("Correo").focus();
            }
    else {
    console.log(Cedula+" "+Apellidos+" "+Nombres+" "+Direccion+" "+Semestre+ ""+Paralelo+""+Correo);
    document.getElementById("Cedula").value = "";
    document.getElementById("Apellidos").value = "";
    document.getElementById("Nombres").value = "";
    document.getElementById("Direccion").value = "";
    document.getElementById("Semestre").value = "";
    document.getElementById("Paralelo").value = "";
    document.getElementById("Correo").value = "";
    localStorage.setItem( JSON.stringify(DatosCLientes));
    }
}
}
}
}
}

