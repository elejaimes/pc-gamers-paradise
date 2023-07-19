import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', color: 'white', background: '#495057' }}>
      <p className="font-weight-bold font-italic">{greeting}</p>
    </div>
  )
}

export default ItemListContainer