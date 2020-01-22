import React from 'react';

function Panel({isDateVisible, onDateCheckedChange}) {
    return(
        <div className='panel'>
            <input
              type='checkbox'
              checked={isDateVisible}
              onChange={onDateCheckedChange}
                />
                 <span>Calendar</span>
        </div>
    )
    
}
export{ Panel }