import React from 'react';


function Card(props) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="cards">
                    <div className="card">
                        <img src={props.imgsrc} alt="Pic" className="card_img" />
                        <div className="card_info">
                            <span className="card_category">{props.title}</span>
                            <h3 className="card_title"> {props.sname} </h3>
                            <a className="card-btn-link" href={props.link} target="_blank" rel="noreferrer">
                                <button className="card-btn"> Listen </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;