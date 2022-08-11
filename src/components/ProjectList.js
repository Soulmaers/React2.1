import React from 'react'
import PropTypes from "prop-types";



export default function ProjectList({ selected, projectsItem }) {
    let result = [...projectsItem];

    if (selected !== "All") {
        result = projectsItem.filter((el) => el.category === selected);
    }
    return (
        <div className='project_list'>
            {result.map(el => (
                <img className='project_item' src={el.img} alt={el.category} />
            ))}
        </div>
    );
}


ProjectList.propTypes = {
    selected: PropTypes.string.isRequired,
    projectsItem: PropTypes.arrayOf(PropTypes.object).isRequired
}
