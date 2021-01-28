import React from 'react'

const IndexPage = () => {
  console.log(process.env.SECRET_KEY)

  return (
    <div style={{ maxWidth: 300, margin: '20px auto' }}>
      <div
        style={{
          backgroundColor: 'limegreen',
          padding: 10,
          textAlign: 'center',
        }}
      >
        {process.env.GATSBY_PUBLIC_VAR}
      </div>
      <div
        style={{
          backgroundColor: 'palevioletred',
          padding: 10,
          textAlign: 'center',
        }}
      >
        {process.env.SECRET_KEY}
      </div>
    </div>
  )
}

export default IndexPage
