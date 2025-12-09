import React from 'react'

const Header = ({title,city}) => {
  return (
    <div>
      <h2>{title}-{city}</h2>
    </div>
  )
}
export default Header