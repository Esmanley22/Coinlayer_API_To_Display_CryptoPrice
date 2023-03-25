

async function apiCall(endpoint, access_key){
    let request = new Request('http://api.coinlayer.com/api/live?access_key=2c95ccb82bcd36e58d4fc25f06895d2d', {
            method: "GET",
            dataType: 'jsonp'
    });

    let result = await fetch(request);

    let response = await result.json();
    console.log(response)
    let values = response.rates
    console.log(values)



    const btcPrice = values.BTC
    console.log(btcPrice)
    document.getElementById('btc-price').innerHTML = btcPrice

    const ltcPrice = values.LTC
    console.log(ltcPrice)
    document.getElementById('ltc-price').innerHTML = ltcPrice

    const ethPrice = values.ETH
    console.log(ethPrice)
    document.getElementById('eth-price').innerHTML = ethPrice
}
apiCall()
