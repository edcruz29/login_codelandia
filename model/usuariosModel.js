const usuarios = require('../database/usuarios.json');
const{v4:uuid, v4} = require('uuid');
const fs = require('fs')

exports.criarUsuario = (nome,email,hashed)=>{
    const usuario ={
        id:uuid(),
        nome,
        email,
        hashed
    }
    usuarios.push(usuario);
    fs.writeFileSync('./database/usuarios.json', JSON.stringify(usuarios));
    return usuario;
}
exports.buscarUsuario = (email)=>{
const usuarioEncontrado = usuarios.find(usuario => usuario.email===email);
return usuarioEncontrado;
}

