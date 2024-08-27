const animais = []
const comentario = require("./comentario.js");
const nextid= 1
const model = (body, id = nextid++) => {
if(body.raça != undefined &&
   body.nome != undefined &&
   body.peso != undefined &&
   body.raça != "" &&
   body.nome !="" &&
   body.peso !=""
){
    return {
    id, 
    nome: body.nome,
    raça: body.raça,
    peso: body.peso,
    informacoesadd: body.id_comentario
}
}
};


const store = (body) => {
    const novo = model(body)
    if (novo) {
        animais.push(novo)
        return 201
    }
        return 400
    };
    
    
    const index =() => animais;
    const show =(id) => {
    const animal= animais.find(el => el.id == id)
    };
    
    
    const update = (id, body) =>{
    const index = animais.findIndex(el => el.id == id)
    const novo = model(body, parseInt(id));
    if (index != -1 && novo) {
        animais[index] = novo
        return 200 
    }
        return 400
    };
    
    
    const destroy = (id) => {
    const index = animais.find(el => el.id == id)
    if (index != -1 ) {
        animais.slice(index,1);
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

    