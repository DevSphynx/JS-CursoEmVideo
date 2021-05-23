function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        innerHTML = 'Impossível contar!'
        //window.alert('[Erro] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: </br></br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let sep = document.getElementsByName('radsep')
        if(p <= 0) {
            window.alert('Passo Inválido! Considerando Passo = 1')
            p = 1
        }
        
        if (i<f) {
            //Contagem Crescente
            for(let c = i; c <= f; c += p) {
                if(sep[0].checked) {
                    res.innerHTML += `${c} `
                } else if(sep[1].checked){
                    res.innerHTML += `${c} - `
                } else if(sep[2].checked){
                    res.innerHTML += `${c} &#128309`
                } else if(sep[3].checked){
                    res.innerHTML += `${c} &#128308`
                }
        }
        } else {
            //Contagem Decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
       
    }
}