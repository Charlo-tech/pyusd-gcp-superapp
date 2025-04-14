import { BlockchainNodeEngineClient } from '@google-cloud/blockchain-node-engine';

type TraceConfig = {
  tracer?: 'callTracer' | 'prestateTracer';
  timeout?: string;
};

export const getBlockchainNodeClient = () => {
  return new BlockchainNodeEngineClient({
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
  });
};

export const traceTransaction = async (
  transactionHash: string,
  config: TraceConfig = { tracer: 'callTracer' }
) => {
  const client = getBlockchainNodeClient();
  
  const [response] = await client.debugTraceTransaction({
    name: `projects/${process.env.GCP_PROJECT_ID}/locations/us-central1/blockchainNodes/eth-node`,
    transactionHash,
    tracerConfig: config,
  });

  return response;
};

export const traceBlock = async (blockNumber: number) => {
  const client = getBlockchainNodeClient();
  
  const [response] = await client.traceBlock({
    name: `projects/${process.env.GCP_PROJECT_ID}/locations/us-central1/blockchainNodes/eth-node`,
    blockNumber: blockNumber.toString(),
  });

  return response;
};