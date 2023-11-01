import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
//   const { address, isConnecting, isDisconnected } = useAccount()

//   if (isConnecting) return <div>Connecting…</div>
//   if (isDisconnected) return <div>Disconnected</div>

  return (
    <>
      <button onClick={() => open()}>Connect Wallet</button>
      <button onClick={() => open({ view: "Networks" })}>
        Switch Network 
      </button>
    </>
  );
}
