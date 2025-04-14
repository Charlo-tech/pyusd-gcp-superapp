import '../styles/global.css';
import type { AppProps } from 'next/app';
import { DAppProvider, Config, ChainId } from '@usedapp/core';

const config: Config = {
  readOnlyChainId: 11155111 as ChainId,
  readOnlyUrls: {
    11155111: `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;