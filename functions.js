var salida= "";
 
const apellidosMexico = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];

const apellidosRusos = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];

const nombresMexicanos = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

const nombresFranceses = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];

function generar() {
    var opcion = document.getElementById("opcion").value;
 
    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
 
    }
}
 function generarSQL() {
    salida = `CREATE DATABASE IF NOT EXISTS sistema_escolar;\nUSE sistema_escolar;\n\n` +
             `CREATE TABLE IF NOT EXISTS alumnos (\n` +
             `  expediente int NOT NULL,\n` +
             `  app1 varchar(255) NOT NULL,\n` +
             `  app2 varchar(255) DEFAULT NULL,\n` +
             `  nombres varchar(255) NOT NULL,\n` +
             `  correo varchar(255) NOT NULL,\n` +
             `  UNIQUE KEY expediente (expediente),\n` +
             `  UNIQUE KEY correo (correo)\n` +
             `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n` +
             `INSERT INTO alumnos (expediente, app1, app2, nombres, correo) VALUES `;

    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let nombreMex = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        let nombreFran = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
        
        let nombreCompleto = Math.random() < 0.5 ? nombreMex : `${nombreMex} ${nombreFran}`;
        let segundoApellido = (apellidoRuso === "NULL") ? "NULL" : `'${apellidoRuso.toUpperCase()}'`;

        salida += `\n(${matricula + i}, '${apellidoMex.toUpperCase()}', ${segundoApellido}, '${nombreCompleto}', 'a${matricula + i}@unison.mx')${i == registros - 1 ? ';' : ','}`;
    }
    document.getElementById("salida").innerText = salida;
}


function generarSQLpostgresql() {
 
}

function generarSQLCSV() {
    salida = "matricula, apellido1, apellido2, nombre, correo";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreFrances = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoRuso === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoRuso}`;
        }
        nombre = "";
        nombreFrances = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += ` ${nombreFrances}`;
        }
        salida += `<br>${matricula + i},${apellidoMex},${segundoApellido},${nombre},a${matricula + i}@unison.mx`;
    }
    // salida = salida.slice(0, 0);
    document.getElementById("salida").innerHTML = salida;
}

function generarJSON() {
    salida = "[<br>{<br>";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreFrances = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoRuso === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoRuso}`;
        }
        nombre = "";
        nombreFrances = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += ` ${nombreFrances}`;
        }

        if (i != (registros - 1)) {
            salida += `
                "matricula": ${matricula + i},<br>
                "apellido1": "${apellidoMex}",<br>
                "apellido2": "${segundoApellido}",<br>
                "nombre": "${nombre}",<br>
                "correo": "a${matricula + i}@unison.mx"<br>
                },<br>`;
        } else {
            salida += `
                "matricula": ${matricula + i},<br>
                "apellido1": "${apellidoMex}",<br>
                "apellido2": "${segundoApellido}",<br>
                "nombre": "${nombre}",<br>
                "correo": "a${matricula + i}@unison.mx"<br>
                }<br>`;
        }

    }
    // salida = salida.slice(0, 0);
    salida += `]`;
    document.getElementById("salida").innerHTML = salida;
}
 
function guardarArchivo() {
    if (!salida) return alert("Primero genera los datos");

    var opcion = document.getElementById("opcion").value;
    var nombreArchivo = "alumnos";
    var mimeType = "text/plain";

    switch (opcion) {
        case "1": case "2": nombreArchivo += ".sql"; break;
        case "3": nombreArchivo += ".csv"; break;
        case "4": nombreArchivo += ".json"; mimeType = "application/json"; break;
    }

    const blob = new Blob([salida], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}