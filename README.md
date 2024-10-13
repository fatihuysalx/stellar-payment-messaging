# stellar-payment-messaging


Requirements
To run this project, you’ll need:

Node.js (14.x or above)
Stellar SDK (included in the dependencies)



Installation
Clone the repository to your local machine:

git clone https://github.com/yourusername/stellar-payment-messaging.git
cd stellar-payment-messaging



Install the necessary dependencies by running:

npm install




Configuration
Set up your Stellar account keys:

In the payment.js file, replace SENDER_PRIVATE_KEY and RECIPIENT_PUBLIC_KEY with the appropriate keys.

const sourceSecret = 'SENDER_PRIVATE_KEY';
const destinationPublicKey = 'RECIPIENT_PUBLIC_KEY';

You can create a Stellar Testnet account and fund it with Test XLM at Stellar Laboratory.




Usage
To use the system, follow these steps:

Start the application:

node payment.js



Check the terminal output:

If the transaction is successful, you’ll see a message like this:

Success! Transaction result: { transaction details }

Any errors or issues will also be displayed in the terminal. These may include insufficient funds or connection issues with the Stellar Testnet.


Deploying to Stellar Testnet
To test the system on the Stellar Testnet:

Ensure the account is funded:

Use the Stellar Laboratory to fund your account with Test XLM.

Run the script:

Each time you run node payment.js, a new transaction will be sent. You can run the script multiple times to send multiple transactions for testing purposes.
