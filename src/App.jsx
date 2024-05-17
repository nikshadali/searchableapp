import React, { useState } from 'react'
import { data } from './data'
import Tabel from './Tabel'
const App = () => {
  const [name, setName] = useState('')
  let keys = ['first_name', 'last_name', 'email','phone']
 
  
  const search = (data) => {
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(name))) 
  }
  return (
    <div className='table-container'>
      <div className="searchBar">

      <input type="text" placeholder='search by name'  onChange={(e) => setName(e.target.value)}/>
      
      </div>
      <div className="tableData">

      <Tabel data ={search(data)}/>
      </div>
    </div>
  )
}

export default App
