import React,{ useState } from 'react';

function Calculate() {

    const [fistnumber,setFirstnumber] = useState('')
    const [secondnumber,setSecondnumber] = useState('')
    const [result,setResult] = useState('')

    console.log('값 =',fistnumber,secondnumber)
    fistnumber = Number(fistnumber)
    secondnumber = Number(secondnumber)

    const handleOk1 = () => {
        setResult(`${fistnumber} + ${secondnumber} = ${add(fistnumber,secondnumber)}`)
    }
    const handleOk2 = () => {
        setResult(fistnumber - secondnumber)
     }
     const handleOk3 = () => {
        setResult(fistnumber * secondnumber)
     }
     const handleOk4 = () => {
        setResult(fistnumber / secondnumber)
     }
    
    return (
        <div>
            <h3>계산기</h3>
            <input type='number'
            placeholder='첫번째 숫자를 입력하세요'
            value={fistnumber}
            onChange={(e) => setFirstnumber(e.target.value)}
            />

            <button onClick={handleOk1}>+</button>
            <button onClick={handleOk2}>-</button>
            <button onClick={handleOk3}>*</button>
            <button onClick={handleOk4}>/</button>

             <input type='number'
            placeholder='두번째 숫자를 입력하세요'
            value={secondnumber}
            onChange={(e) => setSecondnumber(e.target.value)}
            />
            <span>= {result}</span>
            <hr/>
        </div>
    );
}

export default Calculate;