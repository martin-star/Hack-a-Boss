import React from 'react';
import DateTime from '../lib';

function Display({isDateVisible, date}) {
    return(
        <div className='display'>
            <div className='display-time'>{DateTime.toTimeString(date)}</div>
            {isDateVisible &&(
                <div className='display-date'> {DateTime.toDateString(date)} </div>
            )}
        </div>

    );
    
}

export { Display };