import React from 'react';

export default function Project(props) {
    return props.projects.map((project, i) => (
            <div key={project.id} className="card col-sm-12 col-md-5 col-lg-3 m-2">
                <h4 className="card-title">{project.name}</h4>
                <img src={project.image} className="card-img-top" alt="application thumbnail" />
                <div className="card-body">
                    <a href={project.appLink} className="card-link">Application</a>
                    <a href={project.gitHubLink} className="card-link">GitHub</a>
                </div>
            </div>
    ))
}