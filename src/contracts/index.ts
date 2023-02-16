/* eslint-disable no-console */
import { ethers } from 'ethers';
import contracts from './contracts.json';
import axios from 'axios';
import { toast } from 'react-toastify';

let signer: any = null;
let provider: any = null;

let NFT: any = null;

let NFTWithSigner: any = null;

export const initializeWeb3 = async (provider_: any, signer_: any) => {
    NFTWithSigner = new ethers.Contract(contracts.KingFlokiNFTs.address, contracts.KingFlokiNFTs.abi, signer_);
    NFT = new ethers.Contract(contracts.KingFlokiNFTs.address, contracts.KingFlokiNFTs.abi, provider_);

    provider = provider_;
    signer = await signer_;
    return true;
};

export const NFTMintCostInEth = async () => {
    if (NFT !== null && provider !== null) {
        const tx = await NFT.randomNftMintCostETH();
        return tx;
    }
}

export const getFreebiesCount = async () => {
    console.log("getFreebiesCount")
    console.log({ signer, NFTWithSigner })
    if (signer !== null && signer !== undefined) {
        const group_id = 0
        const ownerAddress = await signer.getAddress();
        console.log("getFreebiesCount - address: ", ownerAddress);
        console.log({ signer, NFTWithSigner })
        const freeMintAvailable = await NFTWithSigner.freeMintsAvailable(ownerAddress, group_id);
        const _freeMintAvailable = parseInt(freeMintAvailable);
        console.log("freeMintAvailable", freeMintAvailable, "parseInt: ", _freeMintAvailable);
        return _freeMintAvailable
    }
}

export const requestMintRandomNft = async (handleStatus: (value: number) => Promise<void>, quantity: number) => {
    if (signer !== null && signer !== undefined && NFTWithSigner !== null) {

        const group_id = 0
        const ownerAddress = await signer.getAddress();

        const freeMintAvailable = await getFreebiesCount();
        if (freeMintAvailable !== 0) {
            const tx = await NFTWithSigner.requestFreeMintRandomNft(ownerAddress, quantity, group_id);
            handleStatus(2)
            await tx.wait()
        } else {
            const _randomAmount = await NFTMintCostInEth();
            if (_randomAmount !== undefined) {
                const tx = await NFTWithSigner.requestMintRandomNft(ownerAddress, quantity, group_id, { value: _randomAmount.mul(quantity) });
                handleStatus(2)
                await tx.wait()
            }
        }

        handleStatus(3)
        return true;
    }
}

const generateTicketApi = async (ownerAddress: any, handleStatus: (value: number) => Promise<void>, idx: number) => {
    let api_call;
    try {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        api_call = await axios.get(`https://webhooks.kingfinance.co/pendingNfts?owner=${ownerAddress}`);
    } catch (error) {
        console.log("error: ", error)
        toast.error("sorry! something went wrong! ask help in the official group");
        return;
    }
    const awaiting_mints = api_call.data.data.length;
    if (awaiting_mints === 0) {
        if (idx < 4) {
            console.log("idx: ", idx);
            setTimeout(() => {
                (async () => {
                    await generateTicketApi(ownerAddress, handleStatus, idx + 1)
                })()
            }, 3000);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-throw-literal
            handleStatus(0);
            toast.error("sorry! something went wrong! ask help in the official group");
            return;
        }
    }
    return api_call
}

export const getNftsFromApi = async (handleStatus: (value: number) => Promise<void>) => {
    const ownerAddress = await signer.getAddress();
    /* eslint-disable no-console */
    console.log("owner?", ownerAddress)
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const api_call = await generateTicketApi(ownerAddress, handleStatus, 0)
    // if error, stop the function
    if (api_call == null) return;
    const awaiting_mints = api_call?.data.data.length;
    if (awaiting_mints === 0) {
        handleStatus(0);
        toast.error("sorry! something went wrong! refresh the page or ask help in the official group!");
        return;
    }
    const NftToMint = [];
    // save nft ids
    const NftIds = [];
    for (let i = 0; i < awaiting_mints; i++) {
        const _api_call = api_call?.data.data[i]
        const ticket = { tokenId: _api_call.token_id, quantity: _api_call.quantity, mintNonce: _api_call.mint_nonce, owner: ownerAddress, signature: _api_call.signature }
        const signedNFT = ticket
        NftToMint.push(signedNFT)
        NftIds.push(_api_call.token_id);
    }
    // mint nft with ticket
    const tx = await NFTWithSigner.mintRandomNfts(NftToMint)
    handleStatus(4);
    await tx.wait()
    handleStatus(5);
    /* eslint-disable no-console */
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`tokens ${NftToMint} minted`)

    // show nft images & data
    const finalResult = [];
    // loop for every nft id
    for (const single_nft of NftIds) {
        // get nft info
        const nft_info = await axios.get(`https://webhooks.kingfinance.co/tokenInfo?tokenId=${parseInt(single_nft)}`);
        // get nft image
        const nft_image = await axios.get(`https://webhooks.kingfinance.co/tokenImage?tokenId=${parseInt(single_nft)}`);
        // push to final results
        finalResult.push({ nft_info: nft_info.data, nft_image: nft_image.data })
    }

    console.log("finalResults", finalResult);

    return true;
}

export const isAbleToConnect = async (address: string | undefined) => {
    if (address !== undefined) {
        console.log("isAbleToConnect")
        // let isAble = false;
        // const ownerAddress = await signer.getAddress();

        // const isKingpassHolder = testPass(ownerAddress);
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const kingPass = await axios.get(`https://webhooks.kingfinance.co/userHasKingPass?owner=${address}`)
        const isKingpassHolder: boolean = kingPass.data.status ?? false;

        // console.log({ isKingpassHolder });
        // const now = new Date(Date.now()).toUTCString();
        // const sixteenth = 'Thu, 16 Feb 2023 00:00:00 GMT';
        // const seventeenth = 'Fri, 17 Feb 2023 00:00:00 GMT';

        // const datum_now = Date.parse(now);
        // const datum_six = Date.parse(sixteenth);
        // const datum_seven = Date.parse(seventeenth);

        // if(isKingpassHolder && (datum_now > datum_six)) {
        //     isAble = true;
        // } else if(datum_now > datum_seven) {
        //     isAble = true;
        // } else {
        //     isAble = false;
        // }

        // if you need to set Date, then just delete follwing bottom.
        return isKingpassHolder
        // return isAble;
    }
}

const testPass = (user_address: string) => {
    const kingpass_addresses = [
        "0xE6Aa61C88BC4a178E53aD2d2A3BC0b07Fcfd576a"
    ]
    let isActive = false;
    for (const single_address of kingpass_addresses) {
        if (single_address === user_address) {
            isActive = true;
        }
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`user ${user_address} kingpass status: ${isActive}`);
    return isActive
}
