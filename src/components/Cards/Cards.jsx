import React from 'react';
import styles from "./Cards.module.scss"

const Cards = ({ results }) => {
    if (!results || results.length === 0) {
        return <div>No Characters Found :/</div>;
    }

    const getBadgeClass = (status) => {
        switch (status) {
            case 'Alive':
                return 'bg-success';  
            case 'Dead':
                return 'bg-danger';  
            case 'Unknown':
            default:
                return 'bg-secondary';  
        }
    };

    return (
        <>
            {results.map((result) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative " key={result.id}>
                    <div className={` ${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={result.image} alt={result.name} className={`${styles.img} img-fluid`} />
                        <div  className={`${styles.content} content`}>
                            <div className="fs-4 fw-bold mb-4">{result.name}</div>
                            <div className="fs-6">Last location</div>
                            <div className="fs-5">{result.location.name}</div>
                        </div>
                    </div>
                    <div
                        className={`${styles.badge}  position-absolute badge  ${getBadgeClass(result.status)}`}
                       
                    >
                        {result.status}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;
