import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
function Question({cancel}) {
    const notes = [
        { id: 1, title: 'First Note' },
        { id: 2, title: 'Second Note' },
    ];

    return (
        <div className="question-details container">
          <div className="questions">
          <h4>Question 1 :</h4>
          <h4>React js is</h4>
          </div>
           {/* <span className='back-button' style={{color:"black"}} onClick={cancel}>{<VscChromeClose/>}</span>
         <header className="note-header">
        <h1>Java Notes</h1>
        <p>Author:ajay</p>
        <p>Published on: 12/2/2024</p>
      </header>

      <div className="note-content">
        <p>this is java notes</p>
      </div>

      <footer className="note-footer">
        <button className='button' onClick={() => alert('Downloading note...')}>Download</button>
        <button className='button' onClick={() => alert('Sharing note...')}>Share</button>
      </footer> */}
      <div className="answers">
        <input type="text" value={"option a"}/>
        <input type="text"  value={"option a"}/>
        <input type="text"  value={"option a"}/>
        <input type="text"  value={"option a"}/>
      </div>
    <div className="question-footer">
        <button className='button'>Next</button>
      </div>
    </div>
    );
}

export default Question;