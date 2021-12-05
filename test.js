var WebAPI = require('./src/api');
var myapi = new WebAPI();

// This snippet returns some select contents of the final block
// myapi.LastBlockHash().then(info => myapi.BlockInfo(info).then(info => console.log(info)));

// Test BlockContent
// myapi.LastBlockHash().then(info => myapi.BlockContent(info).then(info => console.log(info.length)));
// myapi.LastBlockHash().then(info => myapi.BlockContent(info).then(info => console.log(info[0])));

// Test AddressBalance
// let addr = "1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD";
// myapi.AddressBalance(addr).then(info => console.log(info));

// Test TxInfo
// let txhash = "4435b1e379d4bc1dba5b8f531cac4569a88c9be5cafb65821b6e99d3534aa49a";
// myapi.TxInfo(txhash).then(info => console.log(info.Outputs));
// myapi.TxInfo(txhash).then(info => console.log(info.Outputs.map(element => element.scriptpubkey_asm)[0]));

// Test LockScript
// let txhash = "4435b1e379d4bc1dba5b8f531cac4569a88c9be5cafb65821b6e99d3534aa49a";
// myapi.LockScript(txhash).then(info => console.log(info));

// Test AddressUTXO
// let addr = "1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD";
// myapi.AddressUTXO(addr).then(info => console.log(info));

// Finally, let's test the wallet application by making a purchase:
// let wallet = require('./src/wlt');
// wallet.NewWallet("", "cVkzQCBmSqsVWnTNqWD2quK2moRYN651jD9cFV6uR5kBGwWdXLsy")
// .then(w => {
//     return wallet.SendBitcoin(0.1, "n1K2krh7PGK4XEh1ouZAbH44itvECJY9tP");
// }).then(tx => console.log(tx));

// var BTCWallet = require('./src/wlt');
// var mywallet = new BTCWallet();
// mywallet.NewWallet().then(info => console.log(info));

// Test FetchRate
// myapi.FetchRate().then(info => console.log(info));