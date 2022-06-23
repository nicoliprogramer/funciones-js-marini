
const registro = () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {

        usuario = prompt(`¿Cuál es su Usuario?`)

        if (usuario != "" && usuario != null) {

            alert(`Cliente ${usuario}`)

            password(nombre);

            break;

        } else {

            usuario = prompt(`Coloca un nombre valido`)

            if (usuario != "" && usuario != null) {

                alert(`Cliente ${usuario}`)
                password(nombre);

                break;

            } else {


            }


        }


    }

}



const bienvenido = () => { }

alert("Bienvenido a esta Plataforma");

let respuesta = prompt(`¿Qué enseñamos?
    
    Phyton
    C++
    `);


if (respuesta.toLowerCase() == "phyton" || parseInt(respuesta) == 1) {

    registro();

} else {

    alert("Usted no pertenece acá");

}



const password = (usuario) => {

    let pass = "";

    while (pass == "" || pass == null) {

        pass = prompt(`Dime tu contraseña ${nombre}`);


        if (pass != null && pass != "") {


            alert(`Registrado con éxito ${nombre}!`)

            break;


        } else {

            let pass = prompt(`Dime una contraseña correcta`);

            if (pass != null && pass != "") {

                alert(`Registrado con éxito ${nombre}!`)
                break;

            } else {

            }

        }

    }



}