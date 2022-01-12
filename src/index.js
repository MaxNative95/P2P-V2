import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMaskProvider } from './hooks/metamask'
import { BrowserRouter } from "react-router-dom";
import { Router } from './router/index';

import 'bootstrap/dist/css/bootstrap.min.css'

function getLibrary(provider, connector) {
  return new Web3(provider)
}

ReactDOM.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <Router />
      </MetaMaskProvider>
    </Web3ReactProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

