import React from 'react'

export default function FormSection(
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    expDate,
    setExpDate,
    cvc,
    setCvc,
    password,
    setPassword,
    isPasswordCorrect,
    CheckPassword
){
    // const formatCardNumber=(value)=> {
    //     const digit=value.replace(/\D/g,"");
    //     return digit.replace(/(.{4})/g, "$1 ").trim();
    // }
return (
<section className='form-section'>
    <form className="form-container">
    <div className="cardInfo">
        <label>Cardholder Name</label>
        <input type="text" value={cardName} placeholder='e.g. Jane Appleseed'/>
    </div>

    <div className="cardInfo">
        <label>Card Number</label>
        <input type="text" value={cardNumber} placeholder='e.g. 1234 5678 9123 0000' />
    </div>

    <div className="forminrow">
        <div className="cardInfo exp">
            <label>Exp. Date (MM/YY)</label>
            <input type="text" value={expDate} placeholder='MM/YY' maxLength="5"/>
        </div>

        <div className="cardInfo exp">
            <label>Cvc</label>
            <input type="text" value={cvc} placeholder='e.g. 123' maxLength="3"/>
            </div>        
    </div>

    <button type='submit' className='confirm'>Confirm</button>
    </form>
</section>
)
}