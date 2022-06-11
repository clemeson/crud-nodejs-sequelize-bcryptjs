
const user = require('./repositories/repositories')

async function create(req, res, next){

    const {name, login, cpf, password} = req.body;

    const objUser = await user.createUser({

        name: name,
        login: login,
        cpf: cpf,
        password: password

        })
    
    res.json(objUser)
    
}

async function read(req, res, next){

    const id = req.params.id;
    const getOneUser = await user.getUserById(id);
    
    res.json(getOneUser)
}

async function update(req, res, next){
    const id = req.params.id;
    const newUser = req.body;

   
    
    const userUpdated = await user.updateUser(id, newUser);


    res.json(userUpdated)
}

async function destroy(req, res, next){

}

module.exports = {
    create,
    read,
    update,
    destroy
}