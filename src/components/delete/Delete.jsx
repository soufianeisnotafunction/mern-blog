import React from 'react';

class Delete extends React.Component {



  render() {
    return (
        <div className=" card card-block mt-4 mb-4 col-sm-8 col-md-6 col-lg-4">

            <h3 className='text-center'>{this.props.title}</h3>
            <button onClick={() =>this.props.delete(this.props.id)} className="btn btn-danger">Delete</button>

        </div>

    );
  }

}

export default Delete;
