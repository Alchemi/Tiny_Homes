import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find your dream home </h1>
                <p className='search-text'> Search the largest selection of affordable tiny homes. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter a Location.' />
                    </div>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>Buy</label>
                        <input type='radio'  />
                        <label>Sell</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero