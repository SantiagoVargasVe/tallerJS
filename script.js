
let msnEncriptar= 'inserte el mensaje de numero a cifrar, los numeros separados por comas. Ejemplo: \n 1,2,3,4,10'
const encrypt =(msn,clave)=>{
    msn= msn.map( (number)=>{
        return number+clave
    })
    secreto = msn
    document.getElementById('output').innerText = msn
}


const decrypt =(msn,clave)=>{
    msn= msn.map( (number)=>{
        return number - clave
    })
    document.getElementById('output').innerText = msn
}

const secret = (msn,funcion,clave) => {
    funcion(msn,clave)
}

const ejercicio2= () =>{
    let fibo_n = parseInt(prompt('Inserte el n que necesita'),10)
    let result = fibonacci(fibo_n)
    document.getElementById('output').innerText = result
}

const fibonacci = n => (n<=1? (n===1?1:0): fibonacci(n-1)+fibonacci(n-2))

const ejercicio1 = () => {
    if (uwu === 'encriptar'){
        let msn=prompt(msnEncriptar)
        msn= msn.split(',').map((number)=>{
            return parseInt(number,10)
        })
        let clave= parseInt(prompt('Escriva la clave, la cual es un numero, como ejemplo: \n 3'),10)
        secret(msn,funcion=encrypt,clave)
    }
    else{
        let msn= document.getElementById('output').innerText
        msn= msn.split(',').map((number)=>{
            return parseInt(number,10)
        })
        let clave= parseInt(prompt('Escriva la clave, la cual es un numero, como ejemplo: \n 3'),10)
        secret(msn,funcion=decrypt,clave)
    }
}

//Voy a usar fetch que es una promesa lol
function retrieveData1 (){
    
    const url1= 'https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json'
    let data =fetch (url1)
    .then(response =>response.json())
    .then(data1 => {
        return data1 
    })
    return data
}

function retrieveData2(){
    const url2= 'https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json'
    let data =fetch (url2)
    .then(response =>response.json())
    .then(data1 => {
        return data1 
    })
    return data
}

async function ejercicio3() {
    let list = await retrieveData1()
    let detail = await retrieveData2()
    console.log(detail[1])
    //console.log(list)
    let map = new Array(list.length +1 ).fill(0)
    for(let i = 0 ; i < detail.length ; i++){
        act = detail[i]
        map[parseInt(act.idproducto)] += parseInt(act.cantidad)
    }

    let maximo=Math.max(...map)
    const equals = (element) => element===maximo

    let index = map.findIndex(equals)
    
    console.log(list)
    console.log(list[0].idproducto)
    for (let i = 0 ; i < list.length ; i ++){
        act = list[i]
        if( parseInt(act.idproducto) === index){
            document.getElementById('output').innerText = act.nombreProducto
        }
    }


}


