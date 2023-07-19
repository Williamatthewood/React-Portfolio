import React from 'react';

export default function Project(props) {
    return props.projects.map((project, i) => (
            <div key={project.id} className="card col-sm-11 col-md-5 col-lg-3 m-3 p-3 d-flex" id="projectCard">
                <h4 className="card-title fw-semibold fst-italic">{project.name}</h4>
                <hr className="hr mt-1 mb-3"></hr>
                <img src={project.image} className="card-img-top" alt="application thumbnail" />
                <div className="card-body align-self-center d-flex ">
                    <a href={project.appLink} className="card-link align-self-end mx-3" target="_blank">Application</a>
                    <a href={project.gitHubLink} className="card-link align-self-end mx-3" target="_blank">GitHub</a>
                </div>
            </div>
    ))
}