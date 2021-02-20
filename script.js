
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


const ejercicio3 = () => {
    // Si me hablan de traducir el fragmento de codigo a promesa es traducir la funcionalidad a promesa no voy a tratar de entender codigo que ya no se usa :^) 😎
    const cross = {crossDomain:true}
    const url1= 'https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json'
    let data1
    const peticion1 = new Promise( (resolve,reject) =>{
        $.get(url1, cross ,(data)=>{
            resolve(data)
        }).fail(()=> reject('paila'))
    })
    console.log('1')
    data1 = peticion1.then((data)=>{
        console.log('123')
        console.log(data1)
    })
}