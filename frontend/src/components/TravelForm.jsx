function TravelForm () {
    return (
        <>
            <form>
                <label htmlFor="travel-name-input">Nombre</label>
                <input id="travel-name-input" type="text"/>

                <label htmlFor="start-trav-input">Fecha Inicio del Viaje</label>
                <input id="start-trav-input" type="text"/>

                <label htmlFor="end-trav-input">Fecha Fin del Viaje</label>
                <input id="end-trav-input" type="text"/>

                <label htmlFor="cost-input">Precio</label>
                <input id="cost-input" type="text"/>
            </form>
        </>
    )
}

export default TravelForm;