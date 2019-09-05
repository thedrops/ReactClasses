import React , {Component} from 'react';
import '../App.css';
import objeto from '../posts.json';
import Post from './Post';
import axios from 'axios';

class Posts extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      posts:[],
      titulo : "",
      url : "",
    }

    axios.get('http://www.mocky.io/v2/5d7193e0330000f7cf7799a1')
    .then((result) => {
      this.setState({
        posts:result.data.posts
      })
    });

    this._excluirPost = this._excluirPost.bind(this);
  }

  _excluirPost = (id) =>{
    var newPosts = this.state.posts.filter((post) => {
      return post.id != id;
    })

    this.setState({posts: newPosts})
  }

  _salvarPost(){
    var newId = this.state.posts[this.state.posts.length-1].id+1
    var newPost = {
      id:newId,
      titulo:this.state.titulo,
      url:this.state.url,
    }

    var posts = this.state.posts

    posts.push(newPost)

    this.setState({
      posts:posts,
      titulo : "",
      url : ""
    })

  }


  render(){
  return(
    <div className="App">
    {
      this.state.posts.map((post, i) =>
        <Post
          key = {i}
          id = {post.id}
          url_imagem={post.url}
          titulo={post.titulo}
          _excluirPost={this._excluirPost}
        />
      )
    }
    <div>
      <span>Título: </span>
      <input class="form-control" value={this.state.titulo} onChange={(e) => {
        this.setState({titulo : e.target.value})
        } }/>
    </div>
    <div>
      <span>URL: </span>
      <input class="form-control" value={this.state.url} onChange={(e) => {
        this.setState({url : e.target.value})
        } }/>
    </div>
    <button class="btn btn-primary" onClick={() => { this._salvarPost()}}>Salvar</button>
    </div>
  )
  }
}


export default Posts;