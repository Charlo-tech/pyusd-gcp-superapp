# PY-USD-GCP-BLOCKCHAIN SUPERAPP

This project is an all in one attempt to create a one stop webapp for all your PY-USD needs. The project makes use of Phantom Wallet with Test tokens on both Solana Devnet and Ethereum Sepolia for diversibility purposes. The project is built using Next Js and intergrated into GCP blockchain RPC to fetch transaction data. A feature yet to be implemented is the payment feature to ensure that users connected to the app with their wallet can pay for services with their coins securely on web3. The test coins have been minted from [Paxos](faucet.paxos.com).

The project brings transparency to the PYUSD network and it is a fun way to look at and analyze transactions.

## Installation and set up.
The following are instructions to install and run the webapp.

```bash
git clone https://github.com/Charlo-tech/pyusd-gcp-superapp

#install dependencies
cd pyusd-gcp-superapp
npm install

#run dev server
npm run dev
```
This should spin up a server on the localhost and open up the web app.

## Add environment variables

Find and include your environment variables on this file to ensure smooth running. Replace placeholders with real values.
```bash
NEXT_PUBLIC_INFURA_ID=your_infura_key
GCP_PROJECT_ID=your-gcp-project-id
GCP_CLIENT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GCP_PRIVATE_KEY="your-private-key"
NEXT_PUBLIC_NETWORK=sepolia
```


## Setting up GCP RPC
You can find the Google Blockchain RPC links [Here](https://console.cloud.google.com/blockchain/rpc?pli=1&invt=AbusSg&project=gen-lang-client-0386792005). 
A quickstart guide to get started with the RPC links and basic use is found [Here](https://cloud.google.com/blockchain-rpc/docs/quickstart).

To set up your local Google cloud SDK for the project, instructions are as follows:
```bash
# Authenticate with GCP
gcloud auth login

# Enable required services
gcloud services enable \blockchainnodeengine.googleapis.com \cloudbuild.googleapis.com \run.googleapis.com

# Create blockchain node (Testnet)
gcloud blockchain-node-engine nodes create eth-node \--location=us-central1 \--network=testnet \--blockchain-type=ethereum
```
## More features

More features to be added are the payment option to transfer PYUSD coins over the network to pay for services as Payment as a service. The fact that PYUSD is a stablecoin makes it ideal for paying for things whose value doesn't change over time.

## License

[MIT](https://choosealicense.com/licenses/mit/)
