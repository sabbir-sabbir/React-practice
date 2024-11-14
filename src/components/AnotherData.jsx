import React, { useEffect, useState } from 'react';

function AnotherData() {
    const [fakeData, setfakeData] = useState([]);

    useEffect(()=> {
        fetch("FakeDta.json")
        .then(res => res.json())
        .then(data => setfakeData(data))
    }, [])
  return (
    <>
      <section>
        {
            fakeData.map((item) => (
                <div className='grid grid-cols-3 gap-5 px-5 py-5' key={item.id}>
                     <h1>{item.name}</h1>

                     <div>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <p>{item.company}</p>
                     </div>
                     <p>{item.phone}</p>
                </div>
            ))
        }
      </section>
    </>
  )
}

export default AnotherData