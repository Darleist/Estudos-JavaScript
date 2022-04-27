let num = [2,1,3,8,6,4,5,63,2]
num.push(555)

/*
for (let pos=0; pos<num.length; pos++) {
    console.log (`A posição ${pos} tem o valor de ${num[pos]}`)
}

for (let pos in num) {
    console.log (`A posição ${pos} tem o valor de ${num[pos]}`)
}
*/
let pos = num.indexOf(310) 
pos = (pos+1)
if (pos == 0) {
    console.log ('O valor n foi encontrado')
} else
    console.log (`O valor está na posição ${pos}`)

    