import React, { Component } from "react";
import {ToastContainer, toast} from 'react-toastify';
import http from "./services/httpService";
import config from "./components/config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";



class App extends Component {
  state = {
    posts: []
  };

    async componentDidMount() {
        const {data : posts} = await http.get(config.apiEndPoint);
        this.setState({posts});
        
    }


  handleAdd = async () => {

    const newPost = {
        title: "My New Post",
        body: "This is my new post"
    };

    const {data : post} = await http.post(config.apiEndPoint, newPost);

    this.setState({posts: [post, ...this.state.posts]});
  };

  handleUpdate = async post => {
    post.title = "Updated Title";
    const {data : updatedPost} = await http.put(`${config.apiEndPoint}/${post.id}`, post);
    this.setState({posts: this.state.posts.map(p => p.id === post.id ? updatedPost : p)});
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    this.setState({posts: this.state.posts.filter(p => p.id !== post.id)});

    try {
        await http.delete("s" + config.apiEndPoint + "/" + post.id);
        
    } catch (e) {
        if(e.response && e.response.status === 404) {
            alert("This post has already been deleted");
        }

        this.setState({posts: originalPosts});
    }
    
    
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary m-2" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table m-2">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
