import React from 'react'

const Tabel = ({data}) => {
    console.log(data)
  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
            ))}
            
        </tbody>
    </table> 
    </>
  )
}

export default Tabel
