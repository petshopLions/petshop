

const creche = []
const nextId = 1
const model = (id = nextId++, body) => {
    if( body.servico != undefined &&
        body.servico != "" && body.informacaoAdc != undefined &&
        body.informacaoAdc != ""
    ){
        return{
            id,
            servico: body.servico,
            informacaoAdc: body.informacaoAdc
        }
    }
}

const store = body => {
    const novo = model(body)
    if(novo){
        creche.push(novo)

        return 201
    }
    return 400
}

const index = () => db;

const show = id => db.find((el) => el.id == id)

const update = (id, body) => {
    const index = findIndex(el => el.id == id)
    const novo = model(body, parseInt(id))
    if(index != -1 && novo){
        db[index] = novo
        return 200
    }
    return 400
}

const destroy = (id) => {
    const index = db.find(el => el.id == id)
    if(index != -1){
        db.splice(index,1)
        return 200
    }
    return 400
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}