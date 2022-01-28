
export const ABI =  [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "balance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "Balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fees",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const balanceOptions = {
    chain: "avalanche",
    contractAddress: "0x8B4370eA7d7aa5C0107C0Eb31D96bf4E2aFE17d1",
    functionName: "balance",
    abi: ABI
};

export const depositOptions = (avax)  => ({
    chain: "avalanche",
    contractAddress: "0x8B4370eA7d7aa5C0107C0Eb31D96bf4E2aFE17d1",
    functionName: "deposit",
    msgValue: avax,
    abi: ABI
});

export const withdrawOptions = ()  => ({
    chain: "avalanche",
    contractAddress: "0x8B4370eA7d7aa5C0107C0Eb31D96bf4E2aFE17d1",
    functionName: "withdraw",
    abi: ABI
});



