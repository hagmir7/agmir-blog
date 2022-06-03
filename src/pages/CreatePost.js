import Nav from "../components/Nav";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import axios from "axios";


class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title:"",
      image:null,
      tags:"",
      language:"",
      description:"",
      body:"",


      
    };
  }



  

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;



    const handleFileSelect = (event) => {
      this.setState({image:event.target.files[0]})
    }


    const sedData =()=>{
      const data ={
        'title': this.state.title,
        'imageA': this.state.image,
        'tags': this.state.tags,
        'language': this.state.language,
        'description': this.state.description,
        'body': "this is"
  
    }
    console.log(data)
  

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/en/api/create-topic',
            data:{
               'image': this.state.image,
                'title': this.state.title,
                'tags': this.state.tags,
                'language': this.state.language,
                'description': this.state.description,
                'body': "This is the body"
    
            },
            headers: { "Content-Type": "multipart/form-data" },
            


            
        })
    }
    return (
        <>
            <Nav />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 card p-2">
                        <form>
                            <input type='text' className="form-control my-1" placeholder="Title "
                             onChange={(e)=> this.setState({title:e.target.value})}
                            />
                            <input type='file' className="form-control my-1" accept="image/*"
                             onChange={handleFileSelect}
                            />
                            <input type='text' className="form-control my-1" placeholder="Tags " 
                             onChange={(e)=> this.setState({tags:e.target.value})}
                            />
                            <select name="language" id="id_language" class="form-control my-1"
                             onChange={(e)=> this.setState({language:e.target.value})}
                            >
                                <option value="No">Select Language</option>
                                <option value="English">English</option>
                                <option value="Français">Français</option>
                                <option value="Español">Español</option>
                                <option value="العربية">العربية</option>
                            </select>
                            <textarea placeholder="Description" className="form-control"
                            onChange={(e)=> this.setState({description:e.target.value})}
                            ></textarea>
                           <div className="my-2">
                           <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={this.onEditorStateChange}
                           
                            
                            />
                           </div>
                        <button className="btn btn-success" onClick={sedData} type="button">Create Post</button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
  }
}








export default CreatePost;