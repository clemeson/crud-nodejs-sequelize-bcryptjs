
const user = require('./models/modelsUser');
const userRepositories = require('./repositories/repositories')

async function create(req, res, next){

    const {name, login, cpf, password} = req.body;

    const objUser = await userRepositories.createUser({

        name: name,
        login: login,
        cpf: cpf,
        password: password

        })
    
    res.json(objUser)
    
}

async function getAll(req, res, next){
    const allUser = await userRepositories.getAllUser()
    res.json(allUser)
}


async function read(req, res, next){

    const id = req.params.id;
    const getOneUser = await userRepositories.getUserById(id);
    
    res.json(getOneUser)
}

async function update(req, res, next){
    const id = req.params.id;
    const newUser = req.body;

   
    
    const userUpdated = await userRepositories.updateUser(id, newUser);


    res.json(userUpdated)
}

async function destroy(req, res, next){
    const id = req.params.id;
    await userRepositories.deleteUser(id)
    res.sendStatus(200)
}

module.exports = {
    create,
    read,
    update,
    getAll,
    destroy
}