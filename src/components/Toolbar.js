import React from 'react'
import PropTypes from "prop-types";



export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <ul className='toolbar'>
            {filters.map((el) => {
                const classN = (el === selected ? 'toolbar_item active' : 'toolbar_item');
                return (
                    <li className={classN} onClick={() => onSelectFilter(el)}>{el}</li>
                );
            })}
        </ul>);

}

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired

}