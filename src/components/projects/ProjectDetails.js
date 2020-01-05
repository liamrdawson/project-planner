import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = Array.from(props.match.params.id).pop();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sapiente cumque aspernatur consequatur quasi optio labore voluptates nostrum asperiores. Molestias a fugit temporibus doloribus. Consectetur tempore aliquid voluptates sunt excepturi.</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Posted by Liam Dawson</div>
                    <div>5th January, 18:30</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
