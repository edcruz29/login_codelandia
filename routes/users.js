const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login')
});
router.get('/cadastro', (req,res,next)=>{
  res.render('cadastro')
})

router.post("/login", function (req, res, next) {
  const { email, senha} = req.body;

  res.send(`${email}`).redirect('/');
});

module.exports = router;
