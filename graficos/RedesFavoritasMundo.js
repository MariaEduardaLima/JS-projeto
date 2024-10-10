async function RedesFavoritasMundo() {
    const url =""
    const res = await fetch (url)
    const dados = await res.json () 
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: "pie"
            textinfo: "label+percent"
        }
    ]

    
}

RedesFavoritasMundo()