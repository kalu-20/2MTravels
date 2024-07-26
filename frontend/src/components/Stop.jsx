function Stop ({ loc, cityName}) {
    return (
        <div className="stop-card">
            <p style={{border: "2px gray solid"}}>
                IMAGEN IMAGEN IMAGEN
                <br/>
                IMAGEN IMAGEN IMAGEN
                {loc.imgUrl}
            </p>

            <h4>{loc.name}</h4>

            <p>
                Dias: {loc.days}
            </p>

            <p>
                Ciudad: {cityName}
            </p>

            <p>
                Direccion: {loc.address}
            </p>
        </div>
    )
}

export default Stop