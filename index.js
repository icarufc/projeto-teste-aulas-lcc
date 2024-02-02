function inverte(palavra) {

    let palavraInvertida = ""
    let palavraInvertidaArr = []

    for (let i = 0; i <= palavra.length; i++){
        palavraInvertidaArr.push(palavra[i])
    }
    
    palavraInvertidaArr.reverse()

    for (let i = 1; i < palavraInvertidaArr.length ; i ++){
        palavraInvertida += palavraInvertidaArr[i]
    }

    return palavraInvertida
}

console.log(inverte("wisley"))