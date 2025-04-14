import { useCallback } from 'react';

declare global {
  interface Window {
    phantom?: {
      ethereum?: any;
    };
  }
}
import { useEthers } from '@usedapp/core';
import { WalletConnectConnector } from '@usedapp/wallet-connect-connector';

export default function WalletConnect() {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  
  const buttonStyles = {
    base: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    connected: {
      backgroundColor: '#ef4444',
      color: 'white',
      padding: '0.5rem 1rem',
    },
    disconnect: {
      backgroundColor: '#6366f1',
      color: 'white',
    },
  };

  const connectPhantom = useCallback(async () => {
    if (window.phantom?.ethereum) {
      await activateBrowserWallet();
    } else {
      window.open('https://phantom.app/', '_blank');
    }
  }, [activateBrowserWallet]);

  return (
    <div style={{ 
      backgroundColor: '#f1f5f9',
      padding: '1rem',
      borderRadius: '0.5rem',
    }}>
      {account ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ 
            fontSize: '0.875rem',
            fontFamily: 'monospace',
            color: '#475569',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            Connected: {account}
          </p>
          <button 
            onClick={deactivate}
            style={{ ...buttonStyles.base, ...buttonStyles.connected }}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectPhantom}
          style={{ ...buttonStyles.base, ...buttonStyles.disconnect }}
        >
          <img src="/assets/phantom-icon.png" style={{ width: '24px', height: '24px' }} />
          Connect Phantom Wallet
        </button>
      )}
    </div>
  );
}