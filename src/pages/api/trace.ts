import { NextApiRequest, NextApiResponse } from 'next';
import { BlockchainNodeEngineClient } from '@google-cloud/blockchain-node-engine';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new BlockchainNodeEngineClient();
  const { transactionHash } = req.body;

  try {
    const [response] = await client.debugTraceTransaction({
      name: `projects/${process.env.GCP_PROJECT_ID}/locations/us-central1/blockchainNodes/eth-node`,
      transactionHash,
      tracerConfig: { tracer: 'callTracer' }
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Tracing failed' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb'
    },
    responseLimit: '4mb',
  },
};