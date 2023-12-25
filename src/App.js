// import logo from './logo.svg';
import './App.css';
import { ConnectWallet, useAddress, useChainId , useConnectionStatus, useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import { contractAddress, contractAbi } from "./contract";

function App() {
  const address = useAddress();
  const chainId = useChainId();
  const status = useConnectionStatus();

  const tokenOneContributors = ["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000001"];
  const tokenTwoContributors = ["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000001"];
  
  const contractOneAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // const { contract } = useContract(contractOneAddress,_abi);
  
  if(status === "unknown" || status === "disconnected" || status === "connecting") {
  return (
    <div className="App">
      <header className="App-header">
      <ConnectWallet 
      modalSize="compact"
      theme="dark"
      modalTitle="Login Now"
      btnTitle="Connect"
       modalTitleIconUrl=""
      dropdownPosition={{
        side: "bottom", //  "top" | "bottom" | "left" | "right";
        align: "end", // "start" | "center" | "end";
      }}
      hideTestnetFaucet={true}
      switchToActiveChain={true}/>
      </header>
    </div>
  );
  }

  if(status === "connected" && chainId !== 1337) {
    return (
      <div className="App">
        <header className="App-header">
        <ConnectWallet 
        modalSize="compact"
        theme="dark"
        modalTitle="Login"
        btnTitle="Connect"
         modalTitleIconUrl=""
        dropdownPosition={{
          side: "bottom", //  "top" | "bottom" | "left" | "right";
          align: "end", // "start" | "center" | "end";
        }}
        hideTestnetFaucet={true}
        switchToActiveChain={true}/>
        </header>
      </div>
    );
  }

  if(status === "connected" && chainId === 1337) {
    
        
    // if(tokenOneContributors.includes(address) && tokenTwoContributors.includes(address)) {
    //   return(
    //     <h1>You're eligible for tokenOne & tokenTwo</h1>
    //   )
    // } else if(tokenOneContributors.includes(address)) {
    //   return(
    //     <h1>You're eligible for tokenOne</h1>
    //   )
    // } else if(tokenTwoContributors.includes(address)) {
    //   return(
    //     <h1>You're eligible for tokenTwo</h1>
    //   )
    // }
    return (
      <div className="App">
        <header className="App-header">
        <Web3Button
        contractAddress={contractAddress}
        contractAbi={contractAbi}
        action={(contract) => contract.call("increaseAllowance", ["0x5FbDB2315678afecb367f032d93F642f64180aa3","21000000000000"])}
        >
        Send Transaction
      </Web3Button>
        {/* <ConnectWallet 
        modalSize="compact"
        theme="dark"
        modalTitle="Login"
        btnTitle="Connect"
         modalTitleIconUrl=""
        dropdownPosition={{
          side: "bottom", //  "top" | "bottom" | "left" | "right";
          align: "end", // "start" | "center" | "end";
        }}
        hideTestnetFaucet={true}
        switchToActiveChain={true}/> */}
        </header>
      </div>
    );

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //     <Web3Button
    //   contractAddress={contractOneAddress}
    //   action={() =>
    //     mutateAsync({
    //       // Place your arguments here in an array, in the same order as your smart contract function
    //       args: ["0x8aD31B591a751AeFFC97f2887C27AD743a52Aac0","1"],
    //     })
    //   }
    // >
    //   Send Transaction
    // </Web3Button>
    //     {/* <ConnectWallet 
    //     modalSize="compact"
    //     theme="dark"
    //     modalTitle="Login"
    //     btnTitle="Connect"
    //      modalTitleIconUrl=""
    //     dropdownPosition={{
    //       side: "bottom", //  "top" | "bottom" | "left" | "right";
    //       align: "end", // "start" | "center" | "end";
    //     }}
    //     hideTestnetFaucet={true}
    //     switchToActiveChain={true}/> */}
    //     </header>
    //   </div>
    // );
  }
}

export default App;