import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function Text(props) {

  const handleonchange = (event) => {
    setText(event.target.value)
  }
  const hendleuponclick = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const hendlelowonclick = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const hendleclearonclick = () => {
    let newtext = ""
    setText(newtext)
  }
  const hendleRemoveonclick = () => {
    let Punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`©{|}~]/g;

    let newtext = text.replace(Punctuation, "")
    setText(newtext)
  }
  const hendleCopyonclick = () => {
    var Deepak = document.getElementById("mybox")
    Deepak.select()
    navigator.clipboard.writeText(Deepak.value)
  }
  const hendleRemoveExtraSpacsonclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  const [text, setText] = useState("");


  return (
    <>
      <div className='container' style={{color:(props.mode==='dark'?'white':'black')}}>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label"><h3>Enter Your Text Hare</h3></label>
          <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} rows="8" placeholder='Enter Your Text Hare' style={{background:(props.mode==='dark'?'#042743':'white'),color:(props.mode==='dark'?'white':'black')}}></textarea>
        </div>
        <div className="btn btn-outline-primary mx-2" value="Submit" onClick={hendleuponclick}>Convert To Uppercase</div>
        <div className="btn btn-outline-primary mx-2" value="Submit" onClick={hendlelowonclick}>Convert To Lowercase</div>
        <div className="btn btn-outline-primary mx-2 my-2" value="Submit" onClick={hendleCopyonclick}>Copy Text</div><br />
        <div className="btn btn-outline-primary mx-2 my-2" value="Submit" onClick={hendleRemoveonclick}>Remove Punctuation</div>
        <div className="btn btn-outline-primary mx-2 my-2" value="Submit" onClick={hendleRemoveExtraSpacsonclick}>Remove Extra Spaces</div>
        <div className="btn btn-outline-primary mx-2 my-2" value="Submit" onClick={hendleclearonclick}>Clear Text</div>
      </div>

      <div className='container my3' style={{color:(props.mode==='dark'?'white':'black')}}>
        <span > Total characte:<b>{text.length} </b> </span> <span className='mx-3'>||  </span>
        <span>Total words:<b>{text.split(" ").length} </b> </span>
        <p> You Can Read This Text WithIn <b> {0.08 * text.split(" ").length} </b> Minuts </p>
        <h4>Text Summary:</h4><br />
        <p> {text.length>0? text:"Enter Some Text Above To Preview This"} </p>

      </div>
    </>
  )
}
