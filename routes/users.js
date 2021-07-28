const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');
const verificarLogin = require('../middleware/verificarLogin')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { session } = req;
  res.render('login')
});
router.get('/cadastro', (req,res,next)=>{
  res.render('cadastro')
});

router.post('/cadastro', (req,res,next)=>{
  const {nome,email,senha,confirmar} = req.body;
 usuariosController.criarUsuario(nome, email, senha,confirmar);
  res.redirect('/')
  
})

router.post("/login", function (req, res, next) {
  const { email, senha} = req.body;
  const usuario = usuariosController.validarUsuario(email,senha);
  req.session.usuario=usuario;
  res.render('produtos', { usuario: req.session.usuario});
});
router.get('/produtos', verificarLogin, function(req, res, next){
 

  res.render('produtos', { usuario: req.session.usuario});
});

router.get('/logout', function(req, res, next){
  req.session.destroy;
  res.redirect('/')
});


module.exports = router;
