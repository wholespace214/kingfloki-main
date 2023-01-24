/* eslint-disable no-console */

import { ethers } from 'ethers';
import contracts from './contracts.json';
import { erc20ABI } from 'wagmi'

let signer: any = null;
let provider: any = null;

let NFT: any = null;

let NFTWithSigner:any = null;
let currencyContract: any = null

export const initializeWeb3 = async (provider_: any, signer_: any) => {
  currencyContract = new ethers.Contract(contracts.KINGFloki_abi.address, erc20ABI, signer_);
  NFTWithSigner = new ethers.Contract(contracts.KINGFloki_abi.address, contracts.KINGFloki_abi.abi, signer_);
  NFT = new ethers.Contract(contracts.KINGFloki_abi.address, contracts.KINGFloki_abi.abi, provider_);

  provider = provider_;
  signer = await signer_;
  console.log({ provider, signer });
};

export const RandomMintCostEth = async () => {
    const val = await NFT.randomNftMintCostETH()
    const _val = parseInt(val);
    return _val;
}