import React from 'react'

export default function CardForm(){
    return(
        <><div className="form">
            <label className="title">Cardholder Name</label>
            <input className='input' placeholder='e.g. Jane Appleseed' />

            <label className="cardNum">Card Number</label>
            <input className='input' placeholder='e.g. 1234 5678 9123 0000' />

            <label className="expDate">Exp. Date (MM/YY)</label>
            <input className='input' placeholder='MM / YY' />

            <label className="cvc">Cvc</label>
            <input className='input' placeholder='e.g. 123' />
        </div>
        <button className="confirm">Confirm</button></>
    )
}