const Temperatura = () => {
    function celsiusParaFahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }

    function fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function kelvin(kelvin) {
        return (
            {
                "fahrenheit":1.8 * (kelvin - 273) + 32,
                "celsius":kelvin - 273
            }
        );
    }

    return (
        <div>
            <h1>25 celsius para Fahrenheit é: {celsiusParaFahrenheit(25).toFixed(2)}</h1>
            <h1>25 Fahrenheit para celsius é: {fahrenheitParaCelsius(25).toFixed(2)}</h1>
            <h1>25 kelvin para celsius é: {kelvin(25).celsius.toFixed(2)}</h1>
            <h1>25 kelvin para fahrenheit é: {kelvin(25).fahrenheit.toFixed(2)}</h1>
        </div>
    )
}

export default Temperatura;