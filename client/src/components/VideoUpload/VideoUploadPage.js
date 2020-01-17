import React, { useState } from "react";
import Dropzone from 'react-dropzone'
import Axios from 'axios'

const SelectOptions = [
  {value: 0, label: "Private"},
  {value: 1, label: "Public" },
]
const SelectCategorys = [
  {value: 0, label: "Entertainment"},
  {value: 1, label: "Music"},
  {value: 2, label: "People"},
  {value: 3, label: "Film"},
  {value: 4, label: "Gaming"},
  
]

const VideoUploadPage = () => {
    
  const [VideoTitle,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [Option, setOption] = useState('0')
  const [Category, setCategory] = useState('0')
  

  const onOptionChange = (e) =>{
    setOption(e.target.value)
  
  }
  const onCategoryChange = (e) =>{
    setCategory(e.target.value)
  }
  const onChangeVideoTitle = e =>{
      setTitle(e.target.value)
  }
  const onChangeDescription = (e) =>{
      setDescription(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault();
  };

  const onDrop = (files) =>{
    let formData = new FormData;
    const config = {
        header: {'content-type': 'multipart/form-data'}
    }
    formData.append("file", files[0])
    console.log(files)
    Axios.post('/api/video/uploadfiles',formData,config).then((response) => {
       if(response.data.success){
            console.log(response.data)
       } else{
         alert ('비디오 업로드 실패')
       }
    })
  }
  return (
      
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <title level={2}> Upload Video</title>
        <form onSubmit={onSubmit}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* {Drop zone} */}
                <Dropzone
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={1000000000}
                    >
                        {
                            ({getRootProps,getInputProps}) => (
                                <div style={{width: '300px', height: '240px', border: '1px solid lightgray',
                                alignItems: 'center', justifyContent: 'center'}}{...getRootProps()}>
                                      <input {...getInputProps()}/>
                                        <p> 클릭하세요</p> 
                                </div>
                            )
                        }
                    </Dropzone>
                
                    
               
            {/* {Thumbnail} */}
            <div></div>
          </div>

          <br />
          <br />
          <label>Title</label>
          <input type="text" onChange={onChangeVideoTitle} value={VideoTitle} />

          <br />
          <br />
          <label>Description</label>
          <textarea onChange={onChangeDescription} value={description} />

          <div className="input-field col s12">
            <select onChange={onOptionChange}className="browser-default" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>
                Choose your Option
              </option>
              {
                SelectOptions.map((SelectOption,i) =>(
                  <option key={i} value={SelectOption.value}>{SelectOption.label}</option>
                ))
              }

            </select>
            
          </div>
          <div onChange={onCategoryChange} className="input-field col s12" >
            <select className="browser-default" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled   >
                Choose your Category
              </option>
          
              {SelectCategorys.map((SelectCategory,i) =>(
                <option key={i} value={SelectCategory.value} >{SelectCategory.label}</option>
              ))}
           
            </select>
           
          </div>

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default VideoUploadPage;
