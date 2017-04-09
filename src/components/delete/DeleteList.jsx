import React from 'react';
import Delete from './Delete.jsx';
import axios from 'axios';


class DeleteList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }

  }

  getPost(){
    console.log(` 1er this ${this}`)
    fetch(`${window.location.origin}/api/posts`)
      .then((res) =>{
        return res.json();
      })
      .then((json) =>{
        console.log(this)
        this.setState({
          data:json
        });
      });
  }


  deleteUser = (id) => {
  return axios.delete(`/api/posts/${id}`);

}



  componentDidMount(){
    this.getPost()
  }

  renderCards(){
    return this.state.data.map((el, i) => {
      console.log(`id ${el._id}`)
      return(
       <Delete key={i} title={el.title} id={el._id} delete={this.deleteUser} />
      )
    })
  }

  render() {
    let list = this.renderCards();
    return (
      <div className=' container d-flex flex-column justify-content-center'>
          {list}
      </div>
    );
  }

}

export default DeleteList;
