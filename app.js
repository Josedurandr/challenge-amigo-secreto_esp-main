// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendslist = []
let index = 0;



function agregarAmigo()
{
    let friendname = document.getElementById('amigo').value; 
    if (friendname == "" )
    {
        alert('Por favor, inserte un nombre'); // Validar si el campo esta vacio

    } else{
        friendslist.push(friendname); // Agregar elemento en la lista
        document.getElementById('amigo').value = ""; //Limpiar Input
        resultlist();
    }

}

function resultlist() //Mostrar el listado de herrameintas
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    for (index=0; index < friendslist.length; index++){
        let li = document.createElement("li");
        li.textContent = friendslist[index]; // Agrega índice y nombre
        lista.appendChild(li);
    }
}

// Colocar la funcion para mostrar el listado de nombres
window.onload = resultlist;

function sortearAmigo()
{
    if (friendslist == "" )
        {
            alert('Por favor, inserte un nombre'); // Validar si el campo esta vacio
    
        } else{
            let indiceamigogenerado = Math.floor(Math.random()*friendslist.length); // Generar un valor aleatorio desde la longitud de la clase
            let amigogenerado = friendslist[indiceamigogenerado]; // Asignar el indice generado a la lista.
            let resultado = document.getElementById('resultado'); //Obtener valor para el campo de resultado
            resultado.innerHTML = `<li>${amigogenerado}</li>`; //Mostra resultado final en el listado.
        }
    
    

}

