import React from 'react'

export default function CardSection({cardName, cardNumber, expDate, cvc}){
    return(
        <section className="card-section">
            <div className="card-container">
                <div className="card_front">
                    <div className="chip">
                    <div className="number">{cardNumber}</div>
                    <div className="bottom">
                        <div className="name">{cardName}</div>
                        <div className="expDate">{expDate}</div>
                    </div>
                    </div>

                    <div className="card_back">
                        <div className="stripe"></div>
                        <div className="cvcBox">
                            <div className="cvc">{cvc}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
