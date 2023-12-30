document.getElementById('convert').addEventListener('click', function() {
    var fromCurrency = document.getElementById('from-currency').value;
    var toCurrency = document.getElementById('to-currency').value;
    var amount = document.getElementById('amount').value;

    convertCurrency(fromCurrency, toCurrency, amount);
});

function convertCurrency(from, to, amount) {
    var url = 'https://api.exchangerate-api.com/v4/latest/' + from; 

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var rate = data.rates[to];
        var result = amount * rate;
        if(amount == 0){
            document.getElementById('result').innerHTML = "Error: Amount can't be 0"
        }
        else{
            document.getElementById('result').innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'Error in conversion.';
    });
}

var currencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];
var fromSelect = document.getElementById('from-currency');
var toSelect = document.getElementById('to-currency');

currencies.forEach(currency => {
    var option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    fromSelect.appendChild(option.cloneNode(true));
    toSelect.appendChild(option);
});
