import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick,setIsClick] = useState(false);
  const [inputCardTitle,setInputCardTitle] = useState("Today");
  const handleClick = () => {
    setIsClick(true);
  }

  const handleChange = (e) =>{
    setInputCardTitle(e.target.value);
  }
  const handleSublmit = (e) =>{
    //console.log(inputCardTitle);
    e.preventDefault();
    setIsClick(false);
  }
  const handleBlur = () =>{
    setIsClick(false);
  }
   return (
    <div className='taskCardTitleInputArea' onClick={handleClick}>{isClick ?
    (<form onSubmit={handleSublmit}>
      <input className='taskCardTitleInput'
            type="text"
             autoFocus
             value = {inputCardTitle}
             onChange={handleChange}
             onBlur={handleBlur}
             maxLength="10" />
    </form>) :
    (<h3>{inputCardTitle}</h3>)}</div>
  )
}
