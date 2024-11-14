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
              <div className="bg-red-500 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" key={item.id}>
              <div className="bg-white p-4 rounded shadow-md grid grid-rows-2">
                <div>
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p>{item.email}</p>
                  <p>{item.address}</p>
                  <p>{item.company}</p>
                  <p>{item.phone}</p>
                </div>
                <div className="flex items-center justify-end">
                  <button className="bg-green-400 text-white px-4 py-2 rounded">Add to card</button>
                </div>
              </div>
            </div>
            
            ))
        }
      </section>
    </>
  )
}

export default AnotherData