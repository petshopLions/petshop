const db = []
const nextId = 1

const verificarAgenda = (body) => {
    const index = db.findIndex((el) => el.body == body);

    if(index == true){
        return true
    }
}

const model = (id = nextId++, body) => {
    if( body.horario != undefined &&
        body.horario != "" && body.mes != undefined &&
        body.dia != "" && body.mes != undefined &&
        body.mes != "" && verificarAgenda != true
    ){
        return{
            id,
            horario: body.horario,
            mes: body.mes,
            dia: body.dia
        }
    }
}

const store = body => {
    const novo = model(body)
    if(novo){
        db.push(novo)

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