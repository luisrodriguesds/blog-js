'use strict'

class UserStore {
  get rules () {
    return {
      // validation rules
      name: 'required',
      nickname: 'required|unique:users,nickname',
      email: 'required|email|unique:users,email',
      password: 'required|min:6|confirmed',
    }
  }

  get messages () {
    return {
      'name.required': 'Campo obrigatório',
      'email.required': 'Campo obrigatório',
      'nickname.required': 'Campo Obrigatório',
      'nickname.unique': 'Nickname já existe',
      'email.email': 'Email Inválido',
      'email.unique': 'Email já existe',
      'password.required': 'Campo obrigatório'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = UserStore
