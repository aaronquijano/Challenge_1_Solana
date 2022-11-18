const {
    Connection,
    PublicKey,
    clusterApiUrl,
    // Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");


// The User input from command line will be stored here.
// If you don't have a Public Address to input, just run 
// the public_key_generator.js inside this directory.   
const publicKey = process.argv.slice(2).toString();


const forAirDrop = async () => {
    try {
        // The connection to Devnet.
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

        // The await function for air dropping to user inputed Public Address.
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(publicKey),
            2 * LAMPORTS_PER_SOL
        );

        console.log("\nSuccessfully Airdropped 2 SOL to this Address: " + publicKey + "\n");
    } catch (error) {
        console.log("Theres an Error : " + error);
    }
}

forAirDrop();

