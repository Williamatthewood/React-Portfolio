import React from 'react';

export default function Project(props) {
    return props.projects.map((project, i) => (
        <div key={i}>
            <div key={project.id}>
                <p>{project.name}</p>
            </div>
        </div>
    ))
}