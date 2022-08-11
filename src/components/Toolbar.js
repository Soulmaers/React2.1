import React from 'react'



export default function Toolbar({ filters, selected, onSelectFilter }) {

    return (
        <ul className='toolbar'>
            {filters.map((el) => {
                const classN = (el === selected ? 'toolbar_item active' : 'toolbar_item');
                return (
                    <li className={classN} onClick={() => onSelectFilter(el)} key={el} >{el}</li>
                );
            })}
        </ul>);

}