import { NextPage } from 'next';
import Head from 'next/head';
import WalletConnect from '../components/WalletConnect';
import TransactionTracer from '../components/TransactionTracer';

const pageStyles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1rem',
  },
  main: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
  },
  section: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  featureCard: {
    backgroundColor: '#f5f3ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e9d5ff',
  },
};


export default function Home() {
  return (
    <div style={pageStyles.container}>
      <Head>
        <title>PYUSD Tracker | Home</title>
      </Head>

      <header style={pageStyles.header}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/assets/pyusd-logo.svg" alt="PYUSD Logo" style={{ height: '40px' }} />
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b' }}>PYUSD Tracker</h1>
          </div>
          <WalletConnect />
        </div>
      </header>

      <main style={pageStyles.main}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section style={pageStyles.section}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Welcome to PYUSD Tracker
            </h2>
            <div style={pageStyles.grid}>
              <div style={pageStyles.featureCard}>
                <h3 style={{ fontWeight: 600, color: '#4f46e5', marginBottom: '0.5rem' }}>
                  Transaction Tracing
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  Get detailed execution traces using GCP's blockchain node.
                </p>
              </div>
              <div style={{ ...pageStyles.featureCard, backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }}>
                <h3 style={{ fontWeight: 600, color: '#059669', marginBottom: '0.5rem' }}>
                  Payment Flow
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  Send PYUSD payments with optimized Web3 flow.
                </p>
              </div>
            </div>
          </section>

          <TransactionTracer />
        </div>
      </main>
    </div>
  );
}