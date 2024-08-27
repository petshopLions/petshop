const transportes = []
const nextid= 1
const model = (body, id = nextid++) => {
if(body.categoria != undefined &&
   body.veiculo != undefined &&
   body.motorista != undefined &&
   body.categoria != "" &&
   body.veiculo !="" &&
   body.motorista !=""
){
    return {
    id, 
    categoria: body.categoria,
    veiculo: body.veiculo,
    motorista: body.notorista
}
}
};

const store = (body) => {
    const novo = model(body)
    if (novo) {
        transportes.push(novo)
        return 201
    }
        return 400
    };
    
    
    const index =() => transportes;
    const show =(id) => {
    const transporte= transportes.find(el => el.id == id)
    };
    
    
    const update = (id, body) =>{
    const index = transportes.findIndex(el => el.id == id)
    const novo = model(body, parseInt(id));
    if (index != -1 && novo) {
        traspostes[index] = novo
        return 200 
    }
        return 400
    };
    
    
    const destroy = (id) => {
    const index = traspostes.find(el => el.id == id)
    if (index != -1 ) {
        traspostes.slice(index,1);
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