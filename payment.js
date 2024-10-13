const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Networks.TESTNET;

async function checkBalance(publicKey) {
    try {
        const account = await server.loadAccount(publicKey);
        account.balances.forEach((balance) => {
            console.log(`Asset Type: ${balance.asset_type}, Balance: ${balance.balance}`);
        });
    } catch (error) {
        console.error('Hata: Bakiye sorgulama başarısız oldu.', error);
    }
}

async function sendPayment(senderSecret, recipientPublicKey, amount, memoText) {
    try {
        const sourceKeypair = StellarSdk.Keypair.fromSecret(senderSecret);
        const sourceAccount = await server.loadAccount(sourceKeypair.publicKey());

        const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
            fee: StellarSdk.BASE_FEE,
            networkPassphrase: StellarSdk.Networks.TESTNET
        })
        .addOperation(StellarSdk.Operation.payment({
            destination: recipientPublicKey,
            asset: StellarSdk.Asset.native(),
            amount: amount
        }))
        .addMemo(StellarSdk.Memo.text(memoText))
        .setTimeout(30)
        .build();

        transaction.sign(sourceKeypair);
        const result = await server.submitTransaction(transaction);
        console.log('Başarılı! İşlem ID:', result.id);
    } catch (error) {
        console.error('Hata: İşlem başarısız oldu.', error);
    }
}

const senderSecret = 'SA3I...';
const recipientPublicKey = 'GB3I...';
const amount = '10';
const memoText = 'Teşekkürler!';

sendPayment(senderSecret, recipientPublicKey, amount, memoText);
checkBalance(recipientPublicKey);
