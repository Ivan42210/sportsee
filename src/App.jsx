
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import {  getPerf } from './Service/Api/GetDatas'






function App() {
  
  const [ userData, setUserData] = useState([])
  const [ errorData, seterrorData] = useState([])

  const typeData = 'url';
  const userId = 12;

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const checkDatas = await getPerf(typeData, userId);
        setUserData(checkDatas);
      } catch(err){
        seterrorData(err)
      }
    }

    fetchDatas()
  }, [typeData, userId]);

  console.log(userData)
  console.log(errorData)
 
  return (
    <div className="App">
      test API
    </div>
  )
}

export default App
