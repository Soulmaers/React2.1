import React from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import Project from './Project'
import { useState } from 'react'

export default function Portfolio() {

    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    const [selected, setSelected] = useState("All")
    const onSelectFilter = (filter) => setSelected(() => filter)


    return (
        <div className='portfolio'>
            <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
            <ProjectList selected={selected} project={Project} />
        </div>
    )

}