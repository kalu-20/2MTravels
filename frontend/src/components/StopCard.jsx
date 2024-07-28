function StopCard ({ stopData, cityName }) {

    return (
        <div className="stop-card">
            <p style={{border: "2px gray solid"}}>
                IMAGEN IMAGEN IMAGEN
                <br/>
                IMAGEN IMAGEN IMAGEN
                {stopData.imgUrl}
            </p>

            <h4>{stopData.name}</h4>

            <p>
                Dias: {stopData.days}
            </p>

            <p>
                Ciudad: {cityName}
            </p>

            {stopData.address ? (
                <>
                    <p>
                        Direccion: {stopData.address}
                    </p>

                    <p>
                        Categoría: {stopData.category}
                    </p>
                </>
            ) : ('')}
        </div>
    )
}

export default StopCard