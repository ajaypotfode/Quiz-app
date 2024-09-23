// import React, { useEffect, useState } from 'react'

// const AddQuestions = () => {
//     const[options,setOption]= useState()

//     const handleAnswer=(event)=>{
//         const {name,value}=event.target
//         setOption({...options, [name]:value})
     
        
//     }
//     const demo=(e)=>{
//        e.preventDefault()
//        console.log(options);
//     //    console.log(options.optionA);
       
//     }
//     // useEffect(()=>{
//     //     console.log(options); 
//     // })
//     return (
//         <div className="notes-container" >
//             <h2>Enter Question Details</h2>
//             <div className="add-note-container">
//                 <h4>Question number 1</h4>
//                 <form action="" className="add-note-form" onSubmit={demo}>
//                     <div className="form-group">
//                         <textarea
//                             id='question'
//                             type='text'
//                             className="form-control"
//                             placeholder='Enter the Question'
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             name='optionA'
//                             className="form-control"
//                             placeholder='Enter Option a'
//                             onChange={handleAnswer}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                              name='optionB'
//                             className="form-control"
//                             placeholder='Enter Option b'
//                             onChange={handleAnswer}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                              name='optionC'
//                             className="form-control"
//                             placeholder='Enter Option c'
//                             onChange={handleAnswer}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                              name='optionD'
//                             className="form-control"
//                             placeholder='Enter Option d'
//                             onChange={handleAnswer}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <h4>Correct Answer</h4>
//                         <select name="" id=""
//                             className="form-control">
//                                 {
//                                     options?<><option disabled selected>Select right Answer</option>
//                                     <option>{options.optionA}</option>
//                                     <option>{options.optionB}</option>
//                                     <option>{options.optionC}</option>
//                                     <option>{options.optionD}</option></>:<><option disabled selected>Select right Answer</option>
//                                     <option>option a</option>
//                                     <option>option b</option>
//                                     <option>option c</option>
//                                     <option>option d</option></>
//                                 }
//                             </select>
//                     </div>

//                     <button type="submit" className="submit-button button">Upload</button>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default AddQuestions

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods
import { db } from '../../firebase/firebase';

const AddQuestions = () => {
    const [options, setOption] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [question, setQuestion] = useState("");

    const handleAnswer = (event) => {
        const { name, value } = event.target;
        setOption({ ...options, [name]: value });
    };

    const handleCorrectAnswer = (event) => {
        setCorrectAnswer(event.target.value);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const demo = async (e) => {
        e.preventDefault();

        try {
            // Add data to Firestore
            const docRef = await addDoc(collection(db, "quizQuestions"), {
                question: question,
                options: {
                    optionA: options.optionA,
                    optionB: options.optionB,
                    optionC: options.optionC,
                    optionD: options.optionD,
                },
                correctAnswer: correctAnswer
            });

            console.log("Document written with ID: ", docRef.id);
            alert('Question added successfully!');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to add the question.');
        }
    };

    return (
        <div className="notes-container">
            <h2>Enter Question Details</h2>
            <div className="add-note-container">
                <h4>Question number 1</h4>
                <form action="" className="add-note-form" onSubmit={demo}>
                    <div className="form-group">
                        <textarea
                            id='question'
                            type='text'
                            className="form-control"
                            placeholder='Enter the Question'
                            value={question}
                            onChange={handleQuestionChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name='optionA'
                            className="form-control"
                            placeholder='Enter Option a'
                            onChange={handleAnswer}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name='optionB'
                            className="form-control"
                            placeholder='Enter Option b'
                            onChange={handleAnswer}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name='optionC'
                            className="form-control"
                            placeholder='Enter Option c'
                            onChange={handleAnswer}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name='optionD'
                            className="form-control"
                            placeholder='Enter Option d'
                            onChange={handleAnswer}
                        />
                    </div>
                    <div className="form-group">
                        <h4>Correct Answer</h4>
                        <select
                            name="correctAnswer"
                            className="form-control"
                            value={correctAnswer}
                            onChange={handleCorrectAnswer}
                        >
                            <option disabled value="">
                                Select the right Answer
                            </option>
                            {options.optionA && <option value={options.optionA}>{options.optionA}</option>}
                            {options.optionB && <option value={options.optionB}>{options.optionB}</option>}
                            {options.optionC && <option value={options.optionC}>{options.optionC}</option>}
                            {options.optionD && <option value={options.optionD}>{options.optionD}</option>}
                        </select>
                    </div>

                    <button type="submit" className="submit-button button">Upload</button>
                </form>
            </div>
        </div>
    );
}

export default AddQuestions;
