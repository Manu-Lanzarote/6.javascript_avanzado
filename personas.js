// Array personas dado en el ejercicio
let personas = [
  {
    _id: "5d8a48131595639a1e4fa996",
    index: 0,
    guid: "104791eb-a1ea-4700-a1b8-4199244b457c",
    isActive: false,
    balance: "$2,782.80",
    picture: "https://randomuser.me/api/portraits/women/33.jpg",
    age: 23,
    eyeColor: "blue",
    name: "Bridgette Mcguire",
    gender: "female",
    company: "KIDGREASE",
    email: "bridgettemcguire@kidgrease.com",
    phone: "+1 (908) 424-2192",
    address: "811 Lawrence Avenue, Saddlebrooke, Ohio, 6224",
    about:
      "Dolor incididunt adipisicing elit cupidatat aliquip ea incididunt deserunt minim nisi laboris aliquip nisi incididunt. In officia laboris proident exercitation est deserunt. Aliquip adipisicing veniam ea voluptate excepteur. Lorem voluptate officia deserunt nulla ex pariatur eu laborum ea. Dolore cillum quis non mollit nostrud fugiat ullamco consectetur officia laboris nostrud excepteur do. Laborum veniam do veniam laboris non est officia nulla eiusmod deserunt.\r\n",
    registered: "2019-06-09T11:31:03 -02:00",
    latitude: -43.764593,
    longitude: 3.900165,
    tags: ["aliquip", "veniam", "aliqua", "nisi", "mollit", "et", "est"],
    friends: [
      {
        id: 0,
        name: "Cain Cain",
      },
      {
        id: 1,
        name: "Vega Hill",
      },
      {
        id: 2,
        name: "Candice Walker",
      },
    ],
    greeting: "Hello, Bridgette Mcguire! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d8a48131108a7cd723412b8",
    index: 1,
    guid: "f55bcd5a-89d8-4ba0-89b5-06df473d8a42",
    isActive: false,
    balance: "$3,624.81",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
    age: 39,
    eyeColor: "green",
    name: "Melinda Wheeler",
    gender: "female",
    company: "ECLIPTO",
    email: "melindawheeler@eclipto.com",
    phone: "+1 (925) 544-3582",
    address: "726 Luquer Street, Muse, New York, 9303",
    about:
      "Magna veniam aliquip ex labore anim et commodo nostrud. Ut pariatur magna magna deserunt. Pariatur nostrud aliqua ad ad consequat. Nisi laborum nostrud esse fugiat magna et esse duis commodo. Exercitation pariatur exercitation adipisicing excepteur eu ad. Id dolore sint officia culpa do.\r\n",
    registered: "2018-07-13T12:09:36 -02:00",
    latitude: 8.398138,
    longitude: 145.073922,
    tags: [
      "aliqua",
      "pariatur",
      "pariatur",
      "excepteur",
      "proident",
      "labore",
      "exercitation",
    ],
    friends: [
      {
        id: 0,
        name: "Dona Clay",
      },
      {
        id: 1,
        name: "Ruth Meadows",
      },
      {
        id: 2,
        name: "Bowman Mckay",
      },
    ],
    greeting: "Hello, Melinda Wheeler! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d8a48137ab5238008402bb0",
    index: 2,
    guid: "b35f89a9-be2b-46b7-93c4-9849f601aeb3",
    isActive: false,
    balance: "$1,474.79",
    picture: "https://randomuser.me/api/portraits/men/30.jpg",
    age: 31,
    eyeColor: "green",
    name: "Ward Fulton",
    gender: "male",
    company: "QABOOS",
    email: "wardfulton@qaboos.com",
    phone: "+1 (930) 463-3089",
    address: "978 Victor Road, Sims, American Samoa, 9727",
    about:
      "Aliquip nulla minim cupidatat ut anim duis. Irure est consectetur adipisicing ullamco eiusmod anim magna cupidatat cillum cillum anim labore. Magna officia ea ut cillum ad eiusmod adipisicing. Mollit esse ullamco duis Lorem non voluptate est qui excepteur nulla id. Aute pariatur ullamco exercitation deserunt mollit ex in sint. Laborum cupidatat commodo ea est aute nostrud occaecat enim est consectetur enim enim id. Ipsum consectetur tempor aliqua dolor dolor adipisicing id.\r\n",
    registered: "2019-04-27T05:13:09 -02:00",
    latitude: -56.696991,
    longitude: -111.275708,
    tags: [
      "occaecat",
      "excepteur",
      "aliqua",
      "dolore",
      "dolor",
      "cupidatat",
      "voluptate",
    ],
    friends: [
      {
        id: 0,
        name: "Millicent Johns",
      },
      {
        id: 1,
        name: "Stone Mcconnell",
      },
      {
        id: 2,
        name: "Kelley Benjamin",
      },
    ],
    greeting: "Hello, Ward Fulton! You have 7 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d8a48134c5447ed216f551a",
    index: 3,
    guid: "94704ad9-d145-485f-883a-4fd4751c9d97",
    isActive: false,
    balance: "$1,320.07",
    picture: "https://randomuser.me/api/portraits/women/77.jpg",
    age: 35,
    eyeColor: "brown",
    name: "Tessa Sellers",
    gender: "female",
    company: "AUSTEX",
    email: "tessasellers@austex.com",
    phone: "+1 (974) 587-3742",
    address: "107 Blake Court, Faxon, Idaho, 8763",
    about:
      "Est ex sunt duis deserunt nisi qui. Cillum veniam dolor do non culpa do eu sunt non. Exercitation dolor ex ad nostrud irure anim ex occaecat laborum. Et non pariatur officia non laboris in labore aute. Duis do ad et sit eu ea laborum adipisicing ex nisi consectetur sunt aute reprehenderit.\r\n",
    registered: "2019-07-29T02:02:08 -02:00",
    latitude: 5.593906,
    longitude: -153.125529,
    tags: [
      "fugiat",
      "proident",
      "quis",
      "nostrud",
      "excepteur",
      "ex",
      "voluptate",
    ],
    friends: [
      {
        id: 0,
        name: "Lorna Cummings",
      },
      {
        id: 1,
        name: "Lynette Randolph",
      },
      {
        id: 2,
        name: "Tiffany Wilkinson",
      },
    ],
    greeting: "Hello, Tessa Sellers! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5d8a48130cbcb8b864608a8c",
    index: 4,
    guid: "dc87b874-bafa-44fd-9df2-92ca8f3532ec",
    isActive: true,
    balance: "$3,410.65",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    age: 25,
    eyeColor: "green",
    name: "Kimberley Roberson",
    gender: "female",
    company: "EVENTEX",
    email: "kimberleyroberson@eventex.com",
    phone: "+1 (832) 436-2181",
    address: "419 Carlton Avenue, Succasunna, Illinois, 8699",
    about:
      "Irure consequat quis nulla consectetur in magna labore et ad anim duis ad occaecat Lorem. Eiusmod amet exercitation sint non officia do. Cupidatat elit anim mollit id dolor laborum laboris excepteur dolore labore laborum veniam officia.\r\n",
    registered: "2016-05-26T11:07:07 -02:00",
    latitude: -75.82921,
    longitude: 23.130712,
    tags: [
      "do",
      "adipisicing",
      "minim",
      "ipsum",
      "do",
      "consectetur",
      "exercitation",
    ],
    friends: [
      {
        id: 0,
        name: "Case Espinoza",
      },
      {
        id: 1,
        name: "Cox Hale",
      },
      {
        id: 2,
        name: "Chang York",
      },
    ],
    greeting: "Hello, Kimberley Roberson! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d8a4813b6a71a7be4cf6a4a",
    index: 5,
    guid: "4d540541-746d-4bc2-8718-62d41248015f",
    isActive: false,
    balance: "$3,425.20",
    picture: "https://randomuser.me/api/portraits/women/30.jpg",
    age: 35,
    eyeColor: "blue",
    name: "Eleanor Stafford",
    gender: "female",
    company: "PROTODYNE",
    email: "eleanorstafford@protodyne.com",
    phone: "+1 (978) 407-3988",
    address: "570 Columbus Place, Emory, Guam, 5306",
    about:
      "Consequat velit est ut officia ex Lorem. Aliqua veniam sint in amet nisi magna. Ullamco ad laborum exercitation proident exercitation excepteur nulla reprehenderit sunt fugiat nostrud commodo anim ipsum.\r\n",
    registered: "2019-06-11T07:33:48 -02:00",
    latitude: -78.220494,
    longitude: -140.172634,
    tags: [
      "nulla",
      "culpa",
      "reprehenderit",
      "esse",
      "officia",
      "excepteur",
      "ullamco",
    ],
    friends: [
      {
        id: 0,
        name: "Powers Morris",
      },
      {
        id: 1,
        name: "Sims Phelps",
      },
      {
        id: 2,
        name: "Clemons Solis",
      },
    ],
    greeting: "Hello, Eleanor Stafford! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5d8a4813adc1e549a3be11dd",
    index: 6,
    guid: "e9f72beb-b67e-4001-9d59-d6d36508bc8f",
    isActive: false,
    balance: "$1,306.69",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 39,
    eyeColor: "brown",
    name: "Crane Harris",
    gender: "male",
    company: "JETSILK",
    email: "craneharris@jetsilk.com",
    phone: "+1 (844) 444-2205",
    address: "350 Montieth Street, Titanic, West Virginia, 9450",
    about:
      "Proident voluptate enim quis non nulla aliquip velit proident mollit. Aliqua pariatur id exercitation esse ipsum qui ut eiusmod. Dolor dolor qui do laboris quis est exercitation sit. Eu minim qui commodo qui fugiat occaecat aute. Veniam non do officia sit pariatur tempor sit nulla in magna voluptate mollit ipsum. Dolor et eiusmod aliquip quis deserunt sit officia eu in.\r\n",
    registered: "2018-08-26T03:15:18 -02:00",
    latitude: 86.738392,
    longitude: -72.308621,
    tags: ["et", "anim", "cillum", "laboris", "occaecat", "Lorem", "sint"],
    friends: [
      {
        id: 0,
        name: "Tamra Blake",
      },
      {
        id: 1,
        name: "Bethany Horn",
      },
      {
        id: 2,
        name: "Catalina Beck",
      },
    ],
    greeting: "Hello, Crane Harris! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
];

//****************************************************************************** */
//PARTE 1- Dado el array ‘personas’, crea objetos independientes por cada objeto ‘persona’ anidado dentro del array. Los nuevos objetos que crees tendrán únicamente los siguientes atributos:
// a.	Nombre, imagen, edad, email y dirección.

//PARTE 2- Guarda los objetos en un único array.

// 3- Una vez creados los objetos, muestra la información de UNA sola persona en el navegador (en esta sección usa la primera persona):
// a.	Crea un div centrado tanto vertical como horizontalmente en el que aparecerá la foto de la persona, seguida de un h1 con el nombre y párrafos para cada uno de los atributos. El color de fondo será el color de ojos.

// 4- Pide al usuario un número y, si hay una persona en ese índice del array, será la persona que mostrarás en el navegador. Si el número no coincide con ningún índice válido del array, muestra un mensaje de error.

// 5- Pide al usuario un texto en vez de un número, muestra la información de todas las personas cuyo nombre contenga el texto escrito.

// 6- Al cargar la página muestra únicamente una caja de texto y un botón. Cuando se hace click en el botón, se mostrarán los nombres de aquellas personas cuyo nombre contenga el texto escrito. Al volver a hacer click en el botón, se muestran una vez más las personas cuyo nombre contenga el texto escrito en la caja (en caso de que la caja esté vacía, mostramos a todas las personas).
//***************************************************************************** */

// 1. Creo los objetos: Nombre, imagen, edad, email y dirección
// 2- Guarda los objetos en un único array.
// Para ello tengo que buscarlos en el array principal e introducirlos en uno nuevo

//Creo el nuevo array vacío
const personasEjer1 = [];

//Para mi info, puedo ver cuantas personas tengo en el array de origen:
// console.log(personas.length); // Tengo 7

//Como cada uno de estos 7 objetos persona están dentro del array persona, para consultarlo tendría que incluir el [i] P.ej:      console.log(personas[0].name);

//Así que para ver las propiedades de los 7 objetos, tengo que recorrerlo con un bucle:
// for (let i = 0; i < personas.length; i++) {
//   console.log(personas[i].name);
//   console.log(personas[i].picture);
//   console.log(personas[i].age);
//   console.log(personas[i].email);
//   console.log(personas[i].address);
// }

//Lo que me pide el ejercicio es que cree un nuevo array con los 7 nuevos objetos que contienen las nuevas propiedads por lo que tengo que crear un bucle que contenga dicho objeto.
// for (let i = 0; i < personas.length; i++) {
//   let nuevaPersona = {};
// }

//Y dentro de este objeto insertamos las propiedades que pide el ejercicio. A cada propiedad le asigno un nuevo valor.
//Esto o consigo con "[i]"

for (let i = 0; i < personas.length; i++) {
  let nuevaPersona = {
    edad: personas[i].age,
    nombre: personas[i].name,
    imagen: personas[i].picture,
    email: personas[i].email,
    direccion: personas[i].address,
    //Añado la propiedad eyeColor por que la voy a necesitar en la parte 3 del ejercicio para añadir color de fondo a los div.
    colorOjos: personas[i].eyeColor,
  };
  //Y hacemos .push(del objeto nuevaPersona en el nuevo array)
  personasEjer1.push(nuevaPersona);
}

//Y comprobamos que el nuevo array tiene lo que queríamos
// console.log(personasEjer1);

//////////////////////////////// INICIO PARTE 3 /////////////////////////////////

// 3- Una vez creados los objetos, muestra la información de UNA sola persona en el navegador (en esta sección usa la primera persona):
// a.	Crea un div centrado tanto vertical como horizontalmente en el que aparecerá la foto de la persona, seguida de un h1 con el nombre y párrafos para cada uno de los atributos.
//
//El color de fondo será el color de ojos.

//HTML
// <div id="div1"></div>
//
//<script src="./personas.js"></script>

//CSS
// body {
//   background-color: #222222;
//   color: white;
// }
//
// #div1 {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     border: white 2px solid;
//     padding: 20px;
//     width: 400px;
//     margin: auto;
//     font-size: 18px;
//     font-weight: bold;
//   }
//   #div1 img {
//     border: white 1px solid;
//     padding: 5px;
//   }

// // Meto las propidades en una variable que llamaré con document.GetElementById
// let parte3 = `<img src="${personasEjer1[0].imagen}" alt="">
// <h1>${personasEjer1[0].nombre}</h1>
// <p>${personasEjer1[0].edad}</p>
// <p>${personasEjer1[0].direccion}</p>
// <p>${personasEjer1[0].email}</p>`;

// document.getElementById("div1").innerHTML = parte3;

// // Y meto el color de fondo en otra variable que también llamo con
// //document.GetElementById. (ESTILOS)
// let fondoParte3 = personasEjer1[0].colorOjos;
// document.getElementById("div1").style.backgroundColor = fondoParte3;

//////////////////////////// FIN PARTE 3 ////////////////////////////////////////

//PARTE 4- Pide al usuario un número y, si hay una persona en ese índice del array, será la persona que mostrarás en el navegador. Si el número no coincide con ningún índice válido del array, muestra un mensaje de error.

//NOTA. PARA CONTINUAR CON ESTA PARTE TENGO QUE COMENTAR LA PARTE 3 DEL EJERCICIO

//Primero creo el botón input type="text" y el boton HTML que necesito para enviar el número que introduzca el usuario a javascript

//HTML. Añadir:
// div>
//       <label for="numero">Introduce un número</label><br />

// input tipo "text"donde introduzo el número:
//       <input id="input" type="text" />

// Botón con un evento onclick que al pulsarlo llamará a la función
// buscarPersonas() y entoces se ejecutará el código dentro de la misma
//       <button onclick="buscarPersonas()">Buscar persona</button>
// </div>

//Puedo ver por consola el valor introducido dentro de una etiqueta input introduciendo su id seguida de .value. En este caso escribiendo: input.value
//El input.value nos devuelve un string por lo que deberemos parsearlo para usarlo dentro de la función buscarPersonas()

//ASÍ QUE UTILIZAMOS EL input PARA QUE EL USUARIO INTRODUZCA EL DATO Y USAMOS EL button PARA ENVIAR EL DATO A LA FUNCIÓN buscarPersonas()

//Continuamos con el código javascript

//Primero tengo que crear una variable que utilizaré en la función buscarPersonas para mostrar por pantalla el resultado de la búsqueda del usuario en caso del que el número introducido coincida con alguno del índice del array personasEjer!
let mostrarPersonas;

//Después creo la función, (Primero la saco por consola como prueba)
// function buscarPersonas() {
//   //Creo una variable que contenga el valor parseado de input.value que viene del input HTML donde el usuario escribió el número y que, comenté antes, nos llega como un string
//   let valor = document.getElementById("input").value;

//   //Y establezco la condición para saber si el valor introducido por el usuario coincide con alguno del índice del array personasEjer1
//   //En caso de que el valor no coincida, sacar un alert avisando de que no se encuentra.
//   //Aquí lo saco por consola como prueba:
//   if (valor >= 0 && valor <= personasEjer1.length) {
//     console.log(personasEjer1[valor]);
//   } else {
//     alert("La persona que buscas no se encuentra en esta lista");
//   }
// }
