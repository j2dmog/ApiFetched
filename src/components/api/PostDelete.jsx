import axios from "axios";
import Button from "../Button";
// import { useParams } from "react-router-dom";
import React, { Component } from "react";


class PostDelete extends Component {
    handleDelete = async() => {
        await axios("https://dummyjson.com/products", {method:'Delete'})
        .then(data => console.log(data))
        // .catch(error => console.log(error))
    }
    render(){
        return (
        <div onClick={this.handleDelete}>
            <Button/>
        </div>
  )
    }
  
}

export default PostDelete