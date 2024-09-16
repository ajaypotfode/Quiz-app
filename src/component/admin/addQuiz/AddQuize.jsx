import React from 'react';
import AddQuestions from './AddQuestions';
// import { Link } from 'react-router-dom';

const AddQuize = () => {
  return (
    <>
      <div className="notes-container" id='addQuize' >
      <h2>Upload Quize</h2>
        <div className="add-note-container">
          <form action="" className="add-note-form">
            <div className="form-group">
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder='Enter Quiz Title'
              />
            </div>
            <div className="form-group">
              <input
                id="questions"
                type="text"
                className="form-control"
                placeholder='Enter the number of questions'
              />
            </div>
            <div className="form-group">
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder='Enter the marks on right answer'
              />
            </div>
            <div className="form-group">
              <textarea
                id="content"
                type='text'
                className="form-control"
                 placeholder='Enter the Description'
              />
            </div>
            <button type="submit" className="submit-button button">Upload</button>
          </form>
        </div>
      </div>
      <AddQuestions/>
    </>
  );
}

export default AddQuize;