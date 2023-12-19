import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
declare global {
  interface Window {
    unisat : any,
    litescribe : any
  }
}



function App() {

  const [ accounts, setAccounts ] = useState<string []>([]);
const [ network, setNetwork ] = useState<string>('');
const [ publicKey, setPublicKey ] = useState<string>('');
const [ balance , setBalance ] = useState<any>(null);


const connectWallet = async () => {
  
  try {
    let accounts = await window.litescribe.requestAccounts();
    
    setAccounts(accounts);
  } catch (e) {
    console.log('connect failed');
  }

  try {
    let res = await window.litescribe.getAccounts();
    
  } catch (e) {
    console.log(e);
  }
  
  try {
    let res = await window.litescribe.getNetwork();
    setNetwork(res);
  } catch (e) {
    console.log(e);
  }

  try {
    let res = await window.litescribe.getPublicKey();
    setPublicKey(res);
  } catch (e) {
    console.log(e);
  }

  try {
    let res = await window.litescribe.getBalance();
    setBalance(res);
  } catch (e) {
    console.log(e);
  }

  
}
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          LiteScribe wallet tester
        </p>
        <button onClick={()=>{connectWallet()}}>
          Wallet
        </button>

        <p>
          <label>
            Address<br/>
          </label>
          <input
            value={accounts[0]}
          >
          </input>
        </p>
       
        <p>
          <label>
            Network<br/>
          </label>
          <input
            value={network}
            disabled={true}
          >
          </input>
        </p>
        <p>
          <label>
            Public Key<br/>
          </label>
          <input
            value={publicKey}
            disabled={true}
          >
          </input>
        </p>
        <p>
          <label>
            Balance<br/>
          </label>
          <input
            value={balance?.total}
            disabled={true}
          >
          </input>
        </p>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
