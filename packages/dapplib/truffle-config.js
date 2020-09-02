require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index raise mad smile imitate prison equal ghost'; 
let testAccounts = [
"0x9792074ba3808f5ea00d31689195b3689805ce9d86b57332acd60aea01a4027c",
"0x02daf14bf3e8e45fc62c831bc0269cef361963e8be053b001ffbd9989bbb2121",
"0x04b6400c5800b7a1f62cedec78a4a0251ad8aaa75f7ff66bd7c1d2b0e0fa3541",
"0x9c403d26f16453fb9be33cb30dfda911311a9090a7e944db439f86f556cc4f63",
"0x5867b79a15255f7fb5dbb67334d4fadd8c4a497948cac2226649b2b51928de59",
"0x33dafc6163c7a4b00a460732223441f2fdc76776a1f287579327c1fdda3d06d4",
"0xfc8d852233dfd455cd96d26b17abbc97e225c279670987bfccc0f7f3770e868d",
"0xef30a71b1caae8028f5ea7df512f74f096c0491e1f09d6b786623c2b19a23a0e",
"0x10ddbdb8f133993724759a8df157a40f444654cd711e432f3f29990fbfdda1c9",
"0x964712a0edc2c6a279889d36ed4e517d0483ac647b60c2a87033fdaadc2ccc57"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
