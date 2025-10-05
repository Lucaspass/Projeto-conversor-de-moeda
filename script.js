let convertButton = document.querySelector("#converter")
let select1 = document.querySelector("#select1")
let select2 = document.querySelector("#select2")
let res1 = document.querySelector("#res1")
let res2 = document.querySelector("#res2")
let resimg1 = document.querySelector("#resimg1")
let resimg2 = document.querySelector("#resimg2")
let resp1 = document.querySelector("#resp1")
let resp2 = document.querySelector("#resp2")


function convertValues(){
    let input = document.querySelector("#valor")
    let inputValor = Number(input.value)

    let dolarToday = 5.34
    let euroToday = 6.27

    if(select1.value === "real" && select2.value === "dolar"){
               
        res1.innerHTML = inputValor.toLocaleString('pt-BR', { style:'currency', currency: 'BRL' })

        res2.innerHTML = (inputValor/ dolarToday).toLocaleString('en-US', {style: 'currency' , currency: 'USD'})}

    else if(select1.value === "real" && select2.value === "euro"){

        res1.innerHTML = inputValor.toLocaleString('pt-BR', { style:'currency', currency: 'BRL' })

        resimg2.src = "./imagens/moedainglaterra.png"
        resp2.innerHTML = "Euro"

        res2.innerHTML = (inputValor/ euroToday).toLocaleString('en-GB', {style: 'currency' , currency: 'GBP'})
    }

    else if(select1.value === "real" && select2.value === "real"){

        res1.innerHTML = inputValor.toLocaleString('pt-BR', { style:'currency', currency: 'BRL' })

        resimg2.src = "./imagens/moedabrasil.jpg"
        resp2.innerHTML = "Real"

        res2.innerHTML = inputValor.toLocaleString('pt-BR', { style:'currency', currency: 'BRL' })
    }

    else if(select1.value === "euro" && select2.value === "real"){

        resimg1.src = "./imagens/moedainglaterra.png"
        resp1.innerHTML = "Euro"

        res1.innerHTML = inputValor.toLocaleString('en-GB', {style: 'currency' , currency: 'GBP'})

        resimg2.src = "./imagens/moedabrasil.jpg"
        resp2.innerHTML = "Real"


        res2.innerHTML = (inputValor * euroToday).toLocaleString('pt-BR', { style:'currency', currency: 'BRL' })
    }

    else if(select1.value === "euro" && select2.value === "dolar"){

        resimg1.src = "./imagens/moedainglaterra.png"
        resp1.innerHTML = "Euro"

        res1.innerHTML = inputValor.toLocaleString('en-GB', {style: 'currency' , currency: 'GBP'})
        
        resimg2.src = "./imagens/moedaeua.png"
        resp2.innerHTML = "Dolar"

        res2.innerHTML = (inputValor * 1.17).toLocaleString('en-US', {style: 'currency' , currency: 'USD'})
    }
    
    else if(select1.value === "euro" && select2.value === "euro"){

        resimg1.src = "./imagens/moedainglaterra.png"
        resp1.innerHTML = "Euro"

        res1.innerHTML = inputValor.toLocaleString('en-GB', {style: 'currency' , currency: 'GBP'})

        resimg2.src = "./imagens/moedainglaterra.png"
        resp2.innerHTML = "Euro"

        res2.innerHTML = inputValor.toLocaleString('en-GB', {style: 'currency' , currency: 'GBP'})
    }

    else if(select1.value === "dolar" && select2.value === "real"){

        resimg1.src = "./imagens/moedaeua.png"
        resp1.innerHTML = "Dolar"

        res1.innerHTML = inputValor.toLocaleString('en-US', {style: 'currency' , currency: 'USD'})

        resimg2.src = "./imagens/moedabrasil.jpg"
        resp2.innerHTML = "Real"

        res2.innerHTML = (inputValor * dolarToday).toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})
    }

    else if(select1.value === "dolar" && select2.value === "euro"){

        resimg1.src = "./imagens/moedaeua.png"
        resp1.innerHTML = "Dolar"

        res1.innerHTML = inputValor.toLocaleString('en-US', {style: 'currency' , currency: 'USD'})

        resimg2.src = "./imagens/moedainglaterra.png"
        resp2.innerHTML = "Euro"

        res2.innerHTML = (inputValor / 1.17).toLocaleString('en-GB', {style: 'currency' , currency: 'GBP'})
    }

     else if(select1.value === "dolar" && select2.value === "dolar"){

        resimg1.src = "./imagens/moedaeua.png"
        resp1.innerHTML = "Dolar"

        res1.innerHTML = inputValor.toLocaleString('en-US', {style: 'currency' , currency: 'USD'})

        resimg2.src = "./imagens/moedaeua.png"
        resp2.innerHTML = "Dolar"

        res2.innerHTML = inputValor.toLocaleString('en-US', {style: 'currency' , currency: 'USD'})
    }


    




    }    

convertButton.addEventListener("click", convertValues)

