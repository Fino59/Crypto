const apikey = {
    key: 'b663c1c3-51bf-4cf8-a6cb-1a3c9857a364'
}


fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var texto = "";
    
    for(let i = 0; i < 15; i++){

       texto = texto + `
      
        <div class="media">
            <img src="./img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <p>${api.data[i].first_historical_data}</p>            
            </div>
        </div>
   
        `;

        document.getElementById("coins").innerHTML = texto;
        
    }
})
.catch((error) => {
    console.error(error.message);
});