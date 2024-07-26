function PromoForm () {
    return (
        <>
            <form>
                <label htmlFor="start-prom-input">Promoción válida desde:</label>
                <input id="start-prom-input" type="text"/>

                <label htmlFor="end-prom-input">Promoción válida hasta:</label>
                <input id="end-prom-input" type="text"/>

                <label htmlFor="discount-input">Descuento:</label>
                <input id="discount-input" type="text"/>
            </form>
        </>
    )
}

export default PromoForm;