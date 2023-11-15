import React from 'react'

export default function Alert(props) {

  return (
   props.alert && <div className='fixed-top' style={{marginTop: "60px"}}>
      <div class={`alert alert-${props.alert.type}`}  role="alert">
  <strong>{props.alert.type}</strong>&nbsp;{ props.alert.msg}
</div>
    </div>
  )
} 

