import React , {Component} from 'react';
import '../App.css';
import objeto from '../posts.json';
import Post from './Post';

class Posts extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      posts:objeto.posts
    }

    this._excluirPost = this._excluirPost.bind(this);
  }

  _excluirPost = (id) =>{
    var newPosts = this.state.posts.filter((post) => {
      return post.id != id;
    })

    this.setState({posts: newPosts})
    
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
    </div>
  )
  }
}


export default Posts;