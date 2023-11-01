import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

//internal dependency
import Alreadyuser from "./Components/Alreadyuser";
import Deposit from "./Components/Deposit";
import Login from "./Components/Login";
import WalletBalance from "./Components/WalletBalance";
import ConnectButton from "./Components/ConnectButton";



// 1. Get projectId
const projectId = "837b34bf82a3115b3280ec48cf44f03b";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum ];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });



export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectButton/>
      <h1>API Data fetch</h1>
      <Deposit />
      <WalletBalance />
      <Login />
      <Alreadyuser />
    </WagmiConfig>
  );
}
