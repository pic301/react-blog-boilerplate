import React from "react";
import Dropzone from 'react-dropzone'


const VideoUploadPage = () => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <title level={2}> Upload Video</title>
        <form onSubmit={onSubmit}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* {Drop zone} */}
             
            {/* {Thumbnail} */}
            <div></div>
          </div>

          <br />
          <br />
          <label>Title</label>
          <input onChange value />

          <br />
          <br />
          <label>Description</label>
          <textarea onChange value />

          <div class="input-field col s12">
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            
          </div>
          <div class="input-field col s12">
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
           
          </div>

          <button
            class="btn waves-effect waves-light"
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
