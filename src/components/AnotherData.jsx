import React, { useEffect } from 'react';

function AnotherData() {
    useEffect(()=> {
        fetch("FakeDta.json")
        .then(res => res.json())
        .then(data )
    }, [])
  return (
    <>
    
    </>
  )
}

export default AnotherData