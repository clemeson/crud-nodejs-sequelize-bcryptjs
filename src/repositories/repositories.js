const userModels = require('../models/modelsUser');

const bcrypt = require('bcryptjs');
const user = require('../models/modelsUser');




async function getUserById(id){ //faz a leitura no banco para pegar apenas um usuario, neste caso pelo ID, esse metodo reprenta também a letra R do crud, pois o mesmo faz uma leutura.
    const getUserId = await userModels.findByPk(id)
    return getUserId;
}

async function getAllUser(){
    const getAll = userModels.findAll();
    return getAll;
}


async function createUser(newUser){  //cria um novo usuario este metodo representa a letra C do CRUD, pois o mesmo faz o de insersão de dados na tabela CREATE

    const salt = await bcrypt.genSaltSync(process.env.SALT);
    const createOneUser = await userModels.create({

        login: newUser.login,
        password: await bcrypt.hashSync(newUser.password, salt), 
        name: newUser.name,
        cpf: newUser.cpf
        
        
    })
    return createOneUser;
}

async function updateUser(id,newUser){ //

    const userCurrent = await getUserById(id)
    
    if(!userCurrent) return;

    if(newUser.name && newUser.name !== userCurrent.name)
        userCurrent.name = newUser.name;
    if(newUser.cpf && newUser.cpf !== userCurrent.cpf)
        userCurrent.cpf = newUser.cpf;
    if(newUser.login && newUser.login !== userCurrent.login)
        userCurrent.login = newUser.login;

    if(newUser.password)
        userCurrent.password = bcrypt.hashSync(newUser.password);

    await userCurrent.save()

    return userCurrent; 
}

async function deleteUser(id){

    const deleteUserById = await getUserById(id);

    await deleteUserById.destroy()
}

module.exports = {
 
    createUser, 
    updateUser,
    getAllUser,
    getUserById,
    deleteUser
}