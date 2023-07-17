import React from 'react';

export default function Project(props) {
    return (
        <div>
            <p>This works! {props.projects[0].name}</p>
        </div>
    )
}