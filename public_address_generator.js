// Run this if you want to generate a Public Address. 

const {
    Keypair,
    PublicKey
} = require("@solana/web3.js");

const keyPair = new Keypair();
const publicKey = new PublicKey(keyPair._keypair.publicKey).toString();

console.log("\nYour Public key: " + publicKey + "\n");


