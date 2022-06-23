const password = (usuario) => {
    console.log("Password");
    let pass = "";

    while (pass == "" || pass == null) {
        pass = prompt(`Ingrese su Contraseña ${usuario}`);

        if (pass != "" && usuario != null) {
            alert(`Registrado con Éxito ${usuario}!`)
            break;
        }
    }
}

const registro = () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {

        usuario = prompt(`¿Cuál es su Usuario?`)

        if (usuario != "" && usuario != null) {
            alert(`Cliente ${usuario}`)
            password(usuario);

            break;
        }


    }

}



const bienvenido = () => { }

alert("Bienvenido a esta Plataforma");

let respuesta = prompt(`¿Qué enseñamos?
    
    Python
    C++
    `);


if (respuesta.toLowerCase() == "python" || parseInt(respuesta) == 1) {

    registro();

} else {

    alert("Usted no pertenece acá");

}



