import React, {useState} from 'react'

export default function Textform(props) {

    const handleOnChange=(event)=>{
        // console.log(event);
        setText(event.target.value);
    }

    const handleUpperCase=()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }

    const [text, setText]= useState("");
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
                <button type="button" onClick={handleUpperCase} className="btn btn-primary my-3">{props.buttonFn}</button>   
           </div>
           <div className="container">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
           </div>
        </>
    )
}
