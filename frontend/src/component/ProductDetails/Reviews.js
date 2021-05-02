import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';


export default class Reviews extends Component {
    render() {
        return (
            <div className='filterbox1'>
                <span className="header">Reviews</span>
                <div className='container'>
                        <div className='card'>
                            <div className='card-title'>Really Nice</div>
                            <div className='card-body'>
                            Gave my cat a long bath with dawn soap and got her flea free. Then sprayed this stuff around all the places in the house that she was hanging out and it killed all the fleas. Within two days flea free and non toxic- couldn't ask for more than that!
                            </div>
                        </div>    
                        <div className='card'>
                            <div className='card-title'>Awesome</div>
                            <div className='card-body'>
                            This stuff really works. I saw the fleas flee for their life and then succumbed to their untimely demise.
You do have to apply often but the scent is pleasant. Better then dog smell. And you can spray it in bedding and in the house and its NON-toxic.
So much better then spraying poisons on your furr babies and in your home.

I hope they will make a yard guard type spray, as I have chickens and eatable plants, and can not spray poisons.
                            </div>
                        </div>    
                </div>
            </div>
            
        )
    }
}
