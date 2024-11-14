import { useState, useEffect } from 'react'
import SingleUserData from './components/SingleUserData'
import './App.css'
import AnotherData from './components/AnotherData'
import Products from './components/Products'

function App() {

 const [myData, setmyData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => setmyData(data))
  }, [])


  return (
    <>
      <div className='grid grid-cols-3 gap-5 px-5 py-5'>
         {
          myData.map(singleData => <SingleUserData 
          key ={singleData.id}
          singleData = {singleData}
          ></SingleUserData>)
         }
      </div>
      <div>
        <AnotherData></AnotherData>
      </div>
      <Products></Products>
    </>
  )
}

export default App
