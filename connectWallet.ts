import { ethers } from "ethers";

export async function connectWallet() {
  if (typeof window === "undefined") return { error: "Browser environment required." };

  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const ethBalance = ethers.utils.formatEther(balance);
      return { address, ethBalance };
    } catch (err) {
      return { error: "User denied wallet connection." };
    }
  } else {
    return { error: "MetaMask not detected." };
  }
}
