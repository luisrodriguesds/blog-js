'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const dateformat = use('dateformat')

class Post extends Model {

  //Campos extras ou modificados
  getCreatedAt(created_at){
    return dateformat(created_at,'dd/mm/yyyy')
  }

  //Relações
  user(){
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Post
