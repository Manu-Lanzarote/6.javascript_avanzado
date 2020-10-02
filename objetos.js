// 1.	Crea un objeto coche con las siguientes propiedades:
// a.	Color: rojo
// b.	Marca: Ford
// c.	Modelo: Focus
// d.	Motor:  cilindros: 4, capacidad: 2.2

// const coche = {
//   color: "rojo",
//   marca: "ford",
//   modelo: "focus",
//   motor: {
//     cilindros: 4,
//     capacidad: 2.2,
//   },
// };

//
// 2.	Crea un objeto con tu nombre y tu edad y muéstralo por consola. Después añade tu altura y muestra de nuevo el objeto.

// const manu = {
//   nombre: "manu",
//   edad: 49,
// };
// console.log(manu);

// manu.altura = 187;

// document.getElementById(
//   "div1"
// ).innerHTML = `<p>${manu.nombre}</p><p>${manu.edad}</p><p>${manu.altura}</p>`;

//
// 3.	Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca una frase. Inserta la frase en el párrafo vacío.

// const pagina = {
//   parrafo: "",
// };
// pagina.parrafo =
//   "Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca una frase. Inserta la frase en el párrafo vacío.";

// document.getElementById("div1").innerHTML = `<p>${pagina.parrafo}</p>`;

//
// 4.	Crea una página con un párrafo vacío. Al entrar en la página se le preguntará al usuario que introduzca un número. Inserta ese número en el párrafo vacío. Si el número es menor que 100, el número tendrá color verde, si el número es entre 100 y 200 tendrá color amarillo. Si el número es mayor que 200, tendrá color rojo.

// const pagina = {
//   parrafo: "",
// };

// let numUser = parseInt(prompt("Introduce un número"));
// pagina.parrafo = numUser;

// document.getElementById("div1").innerHTML = numUser;

// if (numUser < 100) {
//   document.getElementById("div1").style.color = "green";
// } else if (numUser >= 100 && numUser <= 200) {
//   document.getElementById("div1").style.color = "yellow";
// } else {
//   document.getElementById("div1").style.color = "red";
// }

//
// 5.	El objeto “randomObject” tiene objetos anidados dentro. Muestra por consola la clave “board” con valor “broken”. Después, añade un atributo debajo de él con la clave “name” y de valor un nombre que hayas pedido al usuario.

// let randomObject = {
//   halfway: -597578084,
//   oldest: "limited",
//   them: {
//     swimming: "ancient",
//     stick: "battle",
//     vast: true,
//     pain: "cent",
//     changing: -1097468956.0542688,
//     dear: -1768732428,
//     good: "front",
//     youth: true,
//     meant: "settlers",
//     speed: {
//       strip: "creature",
//       blanket: -1892428548.752131,
//       previous: false,
//       later: true,
//       past: {
//         program: {
//           writer: 1653937677.0210853,
//           pot: true,
//           noon: -365598494,
//           cotton: -941609260,
//           grade: {
//             right: "aloud",
//             addition: {
//               said: false,
//               meat: -1370461956.452456,
//               whose: {
//                 tail: false,
//                 phrase: false,
//                 national: {
//                   stairs: 913907191.8412454,
//                   fat: 576639131.2840135,
//                   younger: "best",
//                   cannot: {
//                     with: "fireplace",
//                     prepare: false,
//                     spin: -1979219779.0387182,
//                     hair: 1100726724,
//                     within: true,
//                     metal: 461166658,
//                     bent: false,
//                     cheese: -176132480,
//                     speech: 1035936928.1533735,
//                     motor: "breath",
//                     composed: true,
//                     board: "broken",
//                   },
//                   space: "average",
//                   top: 1563102285.049974,
//                   problem: -102484870,
//                   circle: true,
//                   dust: true,
//                   organized: -939311229,
//                   production: 1047760167.1780465,
//                   shop: false,
//                 },
//                 taught: false,
//                 disease: false,
//                 volume: "mixture",
//                 laugh: "capital",
//                 design: 1190722490,
//                 proud: -212718583.10419846,
//                 shoulder: -239291513,
//                 height: true,
//                 blank: false,
//               },
//               sitting: false,
//               silk: true,
//               buffalo: "whom",
//               silly: 499953376.84782386,
//               globe: -1930898253,
//               soldier: -589507257.4907248,
//               of: -1805357958,
//               rising: true,
//               except: false,
//             },
//             mouse: "our",
//             cookies: "made",
//             common: false,
//             low: false,
//             answer: false,
//             visitor: "wherever",
//             space: 988316177,
//             coast: 191721382,
//             angry: "gravity",
//             raise: "owner",
//           },
//           keep: "similar",
//           become: 729169929.9094012,
//           tropical: "mighty",
//           chief: true,
//           same: "ride",
//           stove: -847784517,
//           noise: "fresh",
//         },
//         medicine: false,
//         hungry: true,
//         weight: 290720785,
//         almost: "monkey",
//         join: "slave",
//         hold: "street",
//         plastic: false,
//         sat: -1498494707,
//         nervous: false,
//         ordinary: 2119960819.7494817,
//         lamp: 1994320371,
//       },
//       stuck: true,
//       broad: "manufacturing",
//       eight: 78027487.2616241,
//       won: true,
//       master: 1844006759,
//       would: false,
//       brought: -297330857,
//     },
//     hundred: false,
//     edge: 1399498305.5665278,
//   },
//   aloud: true,
//   bend: "these",
//   enjoy: -951714012,
//   brass: -938753103,
//   cheese: 1488077759,
//   visit: "act",
//   information: true,
//   chosen: true,
//   improve: true,
// };

// randomObject.them.speed.broad = "broken";

// document.getElementById("div1").innerHTML = `${randomObject.them.speed.broad}`;

// let nombre = prompt("Introduce un nombre");

// randomObject.them.speed.name = nombre;

//
// 1.	Pedir al usuario tres nombres de planetas del Sistema Solar. Con el objeto Sistema Solar, muestra los datos de los tres planetas elegidos. Asegúrate de que los nombres existen (y coinciden con las claves del objeto) y de que el usuario no introduce valores repetidos.
// a.	Los 3 planetas deberán aparecer en el navegador, cada uno dentro de una card. Los tres estarán colocados uno junto al otro, alineados horizontalmente.
// b.	Arriba del todo de la card aparecerá el nombre, luego la imagen y después las características (color y temperatura).
let personas = {
  "Bridgette McGuire": {
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
    greeting: "Hello, Bridgette Mcguire! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  "Melinda Wheele": {
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
    greeting: "Hello, Melinda Wheeler! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  "Ward Fulton": {
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
    greeting: "Hello, Ward Fulton! You have 7 unread messages.",
    favoriteFruit: "apple",
  },
  "Tessa Sellers": {
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
    greeting: "Hello, Tessa Sellers! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  "Kimberley Roberson": {
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
    greeting: "Hello, Kimberley Roberson! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  "Eleanor Stafford": {
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
    greeting: "Hello, Eleanor Stafford! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
  "Crane Harris": {
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
    greeting: "Hello, Crane Harris! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
};
