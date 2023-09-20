import React from 'react'

export default function MapEx({ array, setArray }) {

function updateArray() {
let newName = document.getElementById('box').value
setArray([...array, newName])
document.getElementById('box').value = ''
}

  return (
    <div>
        <h1>
        {array.map((m) => { 
            return (
            <> {m} </>
            )

        })}
        </h1>
        <input type="text" id='box' />
        <button onClick={updateArray} >Submit</button>
    </div>
  )
}
