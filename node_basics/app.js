// api = https://fakestoreapi.com/products


let adi = async () => {await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
   // .then(json => console.log(json))
    .catch(error => console.log(error));

let arrapi = [];
await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        arrapi = data;
       return console.log(arrapi);
    })
   

    let title=[];
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(title => {
        title = arrapi.map((item) => item.title);
       return console.log(title);
    }).catch(error => console.log(error));

    let price =[];
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(price => {
        price = arrapi.map((item) => item.price);
       return console.log(price);
    }).catch(error => console.log(error));

    let sorted = [];
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(sorted => {
        sorted = arrapi.sort((a,b) => a.price - b.price);
       return console.log(sorted);
    }).catch(error => console.log(error));

    let filterprice=[];
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(filterprice => {
        filterprice = arrapi.filter((item) => item.price < 100);
       return console.log(filterprice);
    }).catch(error => console.log(error));

let total = 0;
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        arrapi = data;
        for(let i=0; i<10; i++){
            total += arrapi[i].price;
        }
       return console.log(total);
    }).catch(error => console.log(error));}

    adi()