import React, { useState } from 'react'

const Item = ({ name, age }) => {
    return (
        <li>
            Name: {name} / Age: {age} 
        </li>
    )
}

const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json'

export default function TestMocking() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        fetch(url)
         .then((response) => {
             return response.json()
         })
         .then((json) => {
             setData(json.data)
         })
         .catch((error) => {
             setError(`Something Wrong: ${error}`)
         })
    }

    if (error) return <p>{error}</p>

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100vh'}}>   
            <button onClick={handleClick} data-testid='request-button' style={{padding: '10px 20px', fontSize: '24px'}}>데이터 가져오기</button>

            {
                data && (
                    <ul>
                        {data.people.map((person) => (
                            <Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
