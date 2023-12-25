import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThirdwebProvider, metamaskWallet, trustWallet } from "@thirdweb-dev/react";
import { Localhost } from "@thirdweb-dev/chains";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider 
    activeChain={Localhost} 
    supportedChains={[Localhost]}
    supportedWallets={[metamaskWallet(), trustWallet()]}
    clientId="e9a09b8d7a5af5f6e21025418edf0277"
    autoConnect={true}
    dAppMeta={{
      name: "My App",
      description: "My app description",
      logoUrl: "https://example.com/logo.png",
      url: "https://example.com",
      isDarkMode: true,
    }}>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);