import {FaExternalLinkAlt} from 'react-icons/fa';
interface projects{
    project: {title: string,
     proType: string,
     imgFile: string,
     link: string     
    }
 }
function ProjectCards(props: projects){

    const cardDetails = props.project;
    return(
        <>
        <div className="card">
        <img className="card-img-top" src={cardDetails.imgFile} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{cardDetails.title}</h5>
          <p className="card-text">{cardDetails.proType}</p>
          <a href={cardDetails.link} className="btn btn-primary" rel='nofollow'>Visit <FaExternalLinkAlt/></a>
        </div>
        </div>

        </>
    )
}

export default ProjectCards;