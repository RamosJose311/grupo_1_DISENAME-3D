const {check,body} = require ('express-validator');
const db = require('../database/models');

module.exports = [

  
    check('firstName')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres').bail()
        .isAlpha('es-ES').withMessage('Solo caracteres alfabéticos'),
    
    
    check('lastName')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres').bail()
        .isAlpha('es-ES').withMessage('Solo caracteres alfabéticos'),




  
   /*  body('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('Debe ser un email valido').bail()
    .custom( (value,{req}) => {
      return db.User.findOne({
        where : {
            email : value
        }
      }).then( user => {
            if(user) {
                return Promise.reject()
            }
      }).catch( () => Promise.reject('El email ingresado ya existe'))
    }), */




]