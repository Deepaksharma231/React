import React from 'react'
import propTypes from 'prop-types'

const About = (props) => {
  return (
    <>
    <div className='container' style={{color:(props.mode==='dark'?'white':'black'),margin:'100px'}}>
    <h3>What You Can Do With Textutils:</h3>
    <li class="mkup_li"><b class="mkup_b">textutil::adjust</b> <i class="mkup_i">string</i> ?<i class="mkup_i">Convert to Upercase</i></li>
    <li class="mkup_li"><b class="mkup_b">textutil::adjust</b> <i class="mkup_i">string</i> ?<i class="mkup_i">Convert To Lovercase</i></li>
    <li class="mkup_li"><b class="mkup_b">textutil::adjust</b> <i class="mkup_i">string</i> ?<i class="mkup_i">Copy Text</i></li>
    <li class="mkup_li"><b class="mkup_b">textutil::adjust</b> <i class="mkup_i">string</i> ?<i class="mkup_i">Remove Extra Spaces</i></li>
    <li class="mkup_li"><b class="mkup_b">textutil::adjust</b> <i class="mkup_i">string</i> ?<i class="mkup_i">Remove Punctuation</i></li>
    <li class="mkup_li"><b class="mkup_b">textutil::adjust</b> <i class="mkup_i">string</i> ?<i class="mkup_i">Clear Text</i></li>
    </div>
    </>
  )
}

export default About
