import React from 'react'

const HomePage = (authUser) => {

  return (
    <div>HomePage + {authUser.authUser.fullname}</div>
  )
}

export default HomePage