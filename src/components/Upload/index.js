/**
 * @Upload : @description : This file is to test uploading a file to a server using react
 * @author : @rawplutonium
 * @class : Upload
 * @state : selectedFile @description : holds a selected file
 * @function : onFileChange @description : changes the state when a file has been uploaded 
 * @function : onFileUpload @description : uploads a file onButton click
 */


import React, {Component} from 'react';
import axios from 'axios';
import './index.scss';

class Upload extends Component(){
    state = {
        //initially no file is selected so state remains null
        selectedFile: null
    };
    
    // @function onFileSelect : changes the state of selectedFile to the file
    onFileChange = event => {
        //update the state
        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    //@ function onFileUpload : sends the file to an api when the button is clicked
    onFileUpload = () => {
        //create a FormData object
        const formData = new FormData();

        //update the FormData Object with the files that have been selected
        formData.append(
            //name of the form field for the file upload
            "textbook",
            //the file 
            this.state.selectedFile,
            //the file name
            this.state.selectedFile.name
        );

        //show the details of the selected file
        console.log(this.state.selectedFile)
    }

    render(){
         return(
            <div>
                <h1>File Upload Practice</h1>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload
                    </button>
                </div>
            {this.fileData()}
            </div>
        )
    }

}

export default Upload;