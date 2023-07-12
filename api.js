var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ltc = document.getElementById("litecoin");
var sol = document.getElementById("solana");
var ada = document.getElementById("cardano");
var link = document.getElementById("chainlink");


var liveprice = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Ccardano%2Csolana%2Cchainlink&vs_currencies=usd&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    btc.dataset.change = response.bitcoin.usd_24h_change.toFixed(1);
    btcChange = btc.dataset.change >= 0 ? "<span class='change positive'>" + btc.dataset.change + "%</span>" : "<span class='change negative'>" + btc.dataset.change + "%</span>";
    document.getElementById("bitcoin-change").innerHTML = btcChange;

    eth.innerHTML = response.ethereum.usd;
    eth.dataset.change = response.ethereum.usd_24h_change.toFixed(1);
    ethChange = eth.dataset.change >= 0 ? "<span class='change positive'>" + eth.dataset.change + "%</span>" : "<span class='change negative'>" + eth.dataset.change + "%</span>";
    document.getElementById("ethereum-change").innerHTML = ethChange;

    ltc.innerHTML = response.litecoin.usd;
    ltc.dataset.change = response.litecoin.usd_24h_change.toFixed(1);
    ltcChange = ltc.dataset.change >= 0 ? "<span class='change positive'>" + ltc.dataset.change + "%</span>" : "<span class='change negative'>" + ltc.dataset.change + "%</span>";
    document.getElementById("litecoin-change").innerHTML = ltcChange;

    sol.innerHTML = response.solana.usd;
    sol.dataset.change = response.solana.usd_24h_change.toFixed(1);
    solChange = sol.dataset.change >= 0 ? "<span class='change positive'>" + sol.dataset.change + "%</span>" : "<span class='change negative'>" + sol.dataset.change + "%</span>";
    document.getElementById("solana-change").innerHTML = solChange;

    ada.innerHTML = response.cardano.usd.toFixed(2);
    ada.dataset.change = response.cardano.usd_24h_change.toFixed(1);
    adaChange = ada.dataset.change >= 0 ? "<span class='change positive'>" + ada.dataset.change + "%</span>" : "<span class='change negative'>" + ada.dataset.change + "%</span>";
    document.getElementById("cardano-change").innerHTML = adaChange;

    link.innerHTML = response.chainlink.usd;
    link.dataset.change = response.chainlink.usd_24h_change.toFixed(1);
    linkChange = link.dataset.change >= 0 ? "<span class='change positive'>" + link.dataset.change + "%</span>" : "<span class='change negative'>" + link.dataset.change + "%</span>";
    document.getElementById("chainlink-change").innerHTML = linkChange;
});


