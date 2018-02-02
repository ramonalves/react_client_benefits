import React, { Component } from 'react'
import axios, { post } from 'axios';
import Button from 'material-ui/Button';

class FileUploadComponent extends Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault()
    this.fileUpload(this.state.file).then((response) => {
       if(response.data && response.data.message == "Success") {
         alert('Arquivo carregado com sucesso.');
       } else {
          alert('Erro ao carregar o arquivo.');
       }
    }).catch((error) => {
      alert(error);
    });
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:8000/api/v1/benefit';
    const formData = new FormData();
    formData.append('excel',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url, formData, config)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
        <h1>Upload de Arquivo Excel</h1>
        <input type="file" onChange={this.onChange} /> 
        <Button raised color="primary" type="submit">
          Upload
        </Button>
      </form>
  
      </div>
   )
   
  }
}

export default FileUploadComponent