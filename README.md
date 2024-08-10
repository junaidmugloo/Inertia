<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Steps for installation 

Creating a single-page CRUD application using Laravel, Inertia.js, and React involves handling all CRUD operations (Create, Read, Update, Delete) within a single page or component. Here's a step-by-step guide to building a simple example:

Laravel Setup
Install Inertia.js and React

Make sure you have Laravel and Node.js installed. Then, install Inertia.js and React:

bash
Copy code
composer require inertiajs/inertia-laravel
npm install @inertiajs/inertia @inertiajs/inertia-react
Configure Inertia

Update your resources/js/app.js to set up Inertia:

js
Copy code
import { InertiaApp } from '@inertiajs/inertia-react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
And update your webpack.mix.js to compile React:

js
Copy code
mix.js('resources/js/app.js', 'public/js')
   .react()
   .postCss('resources/css/app.css', 'public/css', [
       require('postcss-import'),
       require('tailwindcss'),
   ]);
Middleware

Add the Inertia middleware to your app/Http/Kernel.php:

php
Copy code
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\HandleInertiaRequests::class,
    ],
];
Routes

Define routes for CRUD operations in routes/web.php:

php
Copy code
use App\Http\Controllers\PostController;

Route::get('/', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);
Route::put('/posts/{post}', [PostController::class, 'update']);
Route::delete('/posts/{post}', [PostController::class, 'destroy']);
Controller

Create a PostController to handle the CRUD operations:

php
Copy code
// app/Http/Controllers/PostController.php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Home', ['posts' => $posts]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'body' => 'required',
        ]);

        Post::create(['body' => $request->body]);

        return redirect()->back();
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'body' => 'required',
        ]);

        $post->update(['body' => $request->body]);

        return redirect()->back();
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->back();
    }
}
Model

Create a Post model:

php
Copy code
// app/Models/Post.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['body'];
}
Migration

Create a migration for the posts table:

php
Copy code
// database/migrations/create_posts_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('body');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
Run the migration:

bash
Copy code
php artisan migrate
React Setup
Create Home Component

Create a Home component in resources/js/Pages/Home.jsx:

jsx
Copy code
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Home({ posts }) {
    const [formData, setFormData] = useState({ body: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/posts', formData);
        setFormData({ body: '' });
    };

    const handleUpdate = (post, body) => {
        Inertia.put(`/posts/${post.id}`, { body });
    };

    const handleDelete = (id) => {
        Inertia.delete(`/posts/${id}`);
    };

    return (
        <div className='container'>
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={formData.body}
                    onChange={(e) => setFormData({ body: e.target.value })}
                />
                <button type='submit'>Create</button>
            </form>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <input
                            type='text'
                            value={post.body}
                            onChange={(e) => handleUpdate(post, e.target.value)}
                        />
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
Render the Component

Ensure your Laravel controller is rendering the Inertia view:

php
Copy code
return Inertia::render('Home', ['posts' => $posts]);
Running the Application
Install Dependencies

bash
Copy code
npm install
npm run dev
Serve the Laravel Application

bash
Copy code
php artisan serve
## About Inertia

<a href="https://inertiajs.com/">Visit website</a><br>
<a href="https://laravel.com/docs/11.x/vite#:~:text=The%20Laravel%20Vite%20plugin%20requires,JSX%2C%20TSX%2C%20and%20Sass.">Visit Website</a>


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
