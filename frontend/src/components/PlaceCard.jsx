function PlaceCard ({ place, cityName }) {
    return (
        <div className="excursion-card">
            <p style={{border: '2px gray solid'}}>
                IMAGEN IMAGEN
                {place.img_url}
            </p>
            <h3>{place.name}</h3>
            <p>
                {cityName}
            </p>
            <p>
                {place.address}
            </p>
        </div>
    )
}

export default PlaceCard;