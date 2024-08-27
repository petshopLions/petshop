const hospedagens = []
const agenda = require("./agenda.js");
const animal = require("./animal.js");
const banhotosa= require("./banhoEtosa.js");
const alimentação = require("./alimentação.js");
const nextid= 1
const model = (body, id = nextid++) => {
if(body.dias != undefined &&
   body.dias != isNaN(dias)
){
    return {
    id, 
    agenda: id_agenda,
    animal: id_animal,
    banhoetosa: id_banhoetosa,
    alimentação: id_alimentação
}
}
};

const store = (body) => {
    const novo = model(body)
    if (novo) {
        hospedagens.push(novo)
        return 201
    }
        return 400
    };
    


    const index =() => hospedagens;
    const show =(id) => {
    const hospedagem= hospedagens.find(el => el.id == id)
    };
    
    
    const update = (id, body) =>{
    const index = hospedagens.findIndex(el => el.id == id)
    const novo = model(body, parseInt(id));
    if (index != -1 && novo) {
        hospedagens[index] = novo
        return 200 
    }
        return 400
    };
    
    
    const destroy = (id) => {
    const index = hospedagens.find(el => el.id == id)
    if (index != -1 ) {
        hospedagens.slice(index,1);
        return 200
    }
        return 404
    };
    
    
    module.exports ={
        store,
        index,
        show,
        update,
        destroy
    };