'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Post = use('App/Models/Post')
const Helpers = use('Helpers')
/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const posts = await Post.query().with('user').fetch()
    return view.render('index', {posts: posts.toJSON(), substr: ((e) => String(e).substr(1, 100))})
  }

  async manager_index ({ request, response, view }) {
    const posts = await Post.query().with('user').fetch()
    return view.render('manager-posts', {posts: posts.toJSON()})
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth, session }) {
    const data = request.only(['title', 'content', 'image'])
    
    try {
      await Post.create({...data, user_id:auth.user.id})
      session.flash({ message: 'Post criado com sucesso!', type:'success' })
      return response.redirect('/manager-posts')
    } catch (error) {
      console.log(error);
      session.flash({ message: 'Algo de errado aconteceu', type:'danger' })
      return response.redirect('back')
    }
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const id = params.id
    const post = await Post.query().where('id', id).with('user').first()
    console.log(post.toJSON());
    return view.render('post-single', {post: post.toJSON()})
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
