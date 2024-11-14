import React from 'react'

 const SingleUserData = ({singleData}) => {
    const {userId, title} = singleData;
  return (
    <>
      <div className=' border-2 border-red-600 px-5 py-5 bg-slate-200'>
        <h1 className=''>{userId}</h1>
        <p>{title}</p>
      </div>
    </>
  )
};
export default SingleUserData
