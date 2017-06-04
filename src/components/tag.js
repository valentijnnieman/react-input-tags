import React from 'react';

const Tag = ({value, index, bindClick}) => {
  let canDelete = false
  const onClick = (e) => {
    e.stopPropagation()
    canDelete = true
  }
  const onBlur = () => {
    canDelete = false
  }
  const remove = () => {
    if(canDelete) bindClick(index)
  }
  return <button type='button' className='tag' onClick={onClick} onBlur={onBlur}>
    {value}
    <span className='tag__close' onClick={remove}>×</span>
  </button>
}

export default Tag
