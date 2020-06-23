'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'PostController.index')
Route.on('/post').render('post-single')

Route.post('/login', 'UserController.login').validator(['UserLogin'])
Route.get('/logout', 'UserController.logout')
Route.on('/login').render('login').middleware('guest')

Route.post('/register', 'UserController.store').validator(['UserStore'])
Route.on('/register').render('register')

Route.on('/create-post').render('create-post')
Route.post('/posts/create', 'PostController.store')
Route.get('/post/:id', 'PostController.show')
Route.get('/manager-posts', 'PostController.manager_index').middleware('auth')
