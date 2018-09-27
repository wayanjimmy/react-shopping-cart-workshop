import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#005279',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
)
