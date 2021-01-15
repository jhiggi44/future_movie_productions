import Layout from "./layout";

function Entry({ projects }) {
    return(
        <div>
            { 
                projects.map(project => 
                    <Layout key={project.title} project={project} />
                )
            }
        </div>
    )
}

export default Entry;