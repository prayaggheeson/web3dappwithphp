import { useWeb3Modal,useAccount } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
  return <div>{address}</div>

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button>
    </>
  );
}
