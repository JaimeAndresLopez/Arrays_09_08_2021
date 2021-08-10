//Maneras de declarar un array
// let array = [];

// for (let i = 0;  i < 5; ++i) {
//     array[i]=undefined;
// }

// console.log(array);

// let arrayObjeto = new Array(6).fill(undefined,0,6);
// console.log(arrayObjeto);

// let lista = [];
// for( let i =0; i<=6; i++){
//     lista[i] = undefined;
// }
// lista[0]=`Jaime`;
// lista[1]=`Lopez`;
// lista[2]= 28;
// lista[3]= false;
// lista[4]= `Calle 105a`;
// lista[5]= `james_2005_scott@hotmail.com`;
// lista[6]= `Diplomado JavaScript Nivel I`;

// console.log(lista);

// let arrayBloqueo= [];
// for(let i=0; i<3; i++){
//     arrayBloqueo[i]=undefined;
// }
// Object.preventExtensions(arrayBloqueo);
// console.log(Object.isExtensible(arrayBloqueo));
// arrayBloqueo[4]=undefined;
// arrayBloqueo[0]=`Jaime`;
// console.log(arrayBloqueo);


//Array asociativo

const informacionPersonal = [];

informacionPersonal['Nombres']='Jaime Andres';
informacionPersonal['Apellidos']='Lopez Chacon';
informacionPersonal['Edad']=28;
informacionPersonal['Instructor']=false;

console.log(informacionPersonal);

for(let [indice, value] of Object.entries(informacionPersonal)){
    console.log(`Asociativo: ${indice}, Valor: ${value}.`);
}
console.warn("");
Object.values(informacionPersonal).forEach(element =>{
    console.log(element);
})