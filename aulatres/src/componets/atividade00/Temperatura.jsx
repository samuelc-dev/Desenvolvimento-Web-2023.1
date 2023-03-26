const Temperatura = () => {
    function celsiusParaFahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }

    function fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function kelvin(kelvin) {
        return (
            const fahrenheit = 1.8 * (kelvin - 273) + 32;
            const celsius = kelvin - 273;
            return {celsius, fahrenheit};
        );
    }
    
    const celsius = 25;
    const fahrenheit = 25
    const kelvin = 0;
    const {celsius, fahrenheit} = kelvin(0);
    return (
        <div>
            <h1>25 celsius para Fahrenheit é: {celsiusParaFahrenheit(celsius).toFixed(2)}</h1>
            <h1>25 Fahrenheit para celsius é: {fahrenheitParaCelsius(fahrenheit).toFixed(2)}</h1>
            <h1>De kelvin para celsius é: {celsius.toFixed(2)}</h1>
            <h1>De kelvin para fahrenheit é: {fahrenheit.toFixed(2)}</h1>
        </div>
    )
}

export default Temperatura;
