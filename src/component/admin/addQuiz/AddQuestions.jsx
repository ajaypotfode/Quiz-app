import React from 'react'

const AddQuestions = () => {
    return (
        <div className="notes-container" >
            <h2>Enter Question Details</h2>
            <div className="add-note-container">
                <h4>Question number 1</h4>
                <form action="" className="add-note-form">
                    <div className="form-group">
                        <textarea
                            id='question'
                            type='text'
                            className="form-control"
                            placeholder='Enter the Question'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Enter Option a'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Enter Option b'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Enter Option c'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Enter Option d'
                        />
                    </div>
                    <div className="form-group">
                        <h4>Correct Answer</h4>
                        <select name="" id=""
                            className="form-control">
                                <option disabled selected>Select right Answer</option>
                                <option>option a</option>
                                <option>option b</option>
                                <option>option c</option>
                                <option>option d</option>
                            </select>
                    </div>

                    <button type="submit" className="submit-button button">Upload</button>
                </form>

            </div>
        </div>
    )
}

export default AddQuestions