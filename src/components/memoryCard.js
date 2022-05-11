import React from 'react'
import './memoryCard.css'
class MemoryCard extends React.Component{
    render() {
        return(
            <div className="MemoryCard">
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <div>
                            <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt='logo'></img>
                        </div>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}
export default MemoryCard