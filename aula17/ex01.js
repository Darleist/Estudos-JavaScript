let amigo = {nome: 'José', sexo: 'M', peso: 85, engordar(p) {
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso} Kgs`)