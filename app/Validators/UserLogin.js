'use strict'

class UserLogin {
  get rules () {
    return {
      // validation rules
      email: 'required|email',
      password:'required'
    }
  }

  get messages () {
    return {
      'password.required': 'Campo obrigatório',
      'email.required': 'Campo obrigatório',
      'email.email': 'Email inválido',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = UserLogin
