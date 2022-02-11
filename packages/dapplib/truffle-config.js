require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile pumpkin install narrow future shallow'; 
let testAccounts = [
"0xb87be89e5f5ae3635d9f069c4e2cdfc02de5e0d796e25aecc92e896e79b008e6",
"0x8da7709701c20dcbf67613254de294140be28d605ba37898bbf986ffeb4e7c80",
"0xe62638c537d90f391d83022264d85557e19dcd504c843f857b742a3824fbdf1a",
"0x99e8b4980f7fa91dd438127128cf3c306d954fb65109326c470a85bffb9d06dc",
"0xdd7da96e72b105a1c5772135bdf5e0dc8079a0bd43c40d1d3cbe933145e16764",
"0x37beecd2447625007981f06604e1ee6922e351efdf21e13a88dc5c918913a39e",
"0xd1ea6eb0072f56454d6fdeb0530b6c6c9d5e2aefd346421483f874b69ac95328",
"0xe5dc3f6e579d079a52b9e9bda4573b59dbbf6ab38a1a3702941a864b5eca290c",
"0x1f73cab883d48fc7b23c933236c96e3ee169d3d5c1f9b9ba66f9df2e3683b8a3",
"0x805328e012ebcb5d986c2ad16d1bfa378dbdd528dff605f5c4eadcbc380a9ffa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

