
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    const { id } = useParams();
    const [fetchedData, setFetchedData] = useState({});
    const { name, location, origin, gender, image, status, species,type,episode } = fetchedData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setFetchedData(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [id]);

    const renderStatusBadge = () => {
        let badgeClass = "badge bg-secondary fs-5";

        if (status === "Dead") {
            badgeClass = "badge bg-danger fs-5";
        } else if (status === "Alive") {
            badgeClass = "badge bg-success fs-5";
        }

        return <div className={badgeClass}>{status}</div>;
    };

    return (
        <div className="container d-flex justify-content-center mb-5">
            <div className="d-flex flex-column gap-3">
                <h1 className="text-center">{name}</h1>
                <img className="img-fluid" src={image} alt={name} />
                {renderStatusBadge()}
                <div className="content">
                    <div>
                        <span className="fw-bold">Gender: </span>{gender}
                    </div>
                    <div>
                        <span className="fw-bold">Location: </span>{location?.name}
                    </div>
                    <div>
                        <span className="fw-bold">Origin: </span>{origin?.name}
                    </div>
                    <div>
                        <span className="fw-bold">Species: </span>{species}
                    </div>
                    <div>
                        <span className="fw-bold">Type: </span>{type || "Unknown"}
                    </div>
                    <div>
                        <span className="fw-bold">Episodes: </span>{episode?.length}
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
