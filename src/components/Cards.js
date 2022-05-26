import {Button, Row, Col} from 'react-bootstrap'
const Cards = ({image, title, year, tech}) => {
    return ( 
        <>
        <div className="card-project ">
            <div className="cover-img">
                <img src={image} className='w-100'/>
            </div>
            <div className='card-labels text-center'>
                <div className="row">
                <span className="col-2 " >
                {year}
                </span>
                <span className="col-4 border-txt">
                {title}
                </span>
                <span className="col-4 border-txt" >
                {tech}
                </span>
                <span className="col-2 text-hover border-txt">
                    <p>View Project</p>
                </span>
                </div>
            </div>

            
        </div>
        </>
    );
}

export default Cards;