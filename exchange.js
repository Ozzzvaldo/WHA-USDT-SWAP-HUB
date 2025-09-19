// Contract addresses and configuration
const CONTRACT_CONFIG = {
    EXCHANGE_CONTRACT_ADDRESS: '0x02ad3778d4992C9d3d0Ee3A336843209e4101f7B',
    WHA_TOKEN_ADDRESS: '0xef2fb5c7a91594d4d5dd6c17aea6cdfcba75916a',
    USDT_TOKEN_ADDRESS: '0x55d398326f99059fF775485246999027B3197955',
    BSC_CHAIN_ID: '0x38',
    BSC_NETWORK_PARAMS: {
        chainId: '0x38',
        chainName: 'BNB Smart Chain',
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18
        },
        rpcUrls: [
            'https://bsc-dataseed.binance.org/',
            'https://rpc.ankr.com/bsc',
            'https://bscrpc.com',
            'https://public-node.bscscan.com',
        ],
        blockExplorerUrls: ['https://bscscan.com/']
    }
};

// Contract ABIs
const EXCHANGE_ABI = [{"inputs":[{"internalType":"address","name":"_whaTokenAddress","type":"address"},{"internalType":"address","name":"_usdtTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"WHA_PRICE_IN_USDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"whaAmount","type":"uint256"}],"name":"sellWHA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawWHA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whaToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const WHA_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_mainWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"excluded","type":"bool"}],"name":"ExcludedFromFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMainWallet","type":"address"}],"name":"MainWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryWalletUpdated","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMainWallet","type":"address"}],"name":"setMainWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasury","type":"address"}],"name":"setTreasuryWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const USDT_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];


// Global variables
let provider = null;
let signer = null;
let userAddress = null;
let exchangeContract = null;
let whaContract = null;
let usdtContract = null;
const WHA_BUY_PRICE = 0.055;
let userWhaAllowance = 0;

// DOM elements
const connectWalletBtn = document.getElementById('connectWallet');
const walletInfoSection = document.getElementById('walletInfoSection');
const sellSection = document.getElementById('sellSection');
const whaAmountInput = document.getElementById('whaAmount');
const approveWHABtn = document.getElementById('approveWHA');
const sellTokensBtn = document.getElementById('sellTokens');
const loadingOverlay = document.getElementById('loadingOverlay');

// Notification system
function showNotification(message, type = 'info') {
    const notificationsContainer = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notificationsContainer.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

// Loading overlay functions
function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

// Utility functions
function formatAddress(address) {
    if (!address) return '-';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatNumber(number, decimals = 6) {
    if (!number) return '0';
    return parseFloat(number).toFixed(decimals);
}

// Check if MetaMask is installed
function isMetaMaskInstalled() {
    return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
}

// Switch to BSC network
async function switchToBSC() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CONTRACT_CONFIG.BSC_CHAIN_ID }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [CONTRACT_CONFIG.BSC_NETWORK_PARAMS],
                });
            } catch (addError) {
                throw new Error('Failed to add BSC network to MetaMask');
            }
        } else {
            throw switchError;
        }
    }
}

// Initialize contracts
function initializeContracts() {
    if (!provider || !signer) return;
    
    exchangeContract = new ethers.Contract(CONTRACT_CONFIG.EXCHANGE_CONTRACT_ADDRESS, EXCHANGE_ABI, signer);
    whaContract = new ethers.Contract(CONTRACT_CONFIG.WHA_TOKEN_ADDRESS, WHA_TOKEN_ABI, signer);
    usdtContract = new ethers.Contract(CONTRACT_CONFIG.USDT_TOKEN_ADDRESS, USDT_TOKEN_ABI, signer);
}

// Connect wallet function
async function connectWallet() {
    if (!isMetaMaskInstalled()) {
        showNotification('Please install MetaMask to use this application', 'error');
        window.open('https://metamask.io/download/', '_blank');
        return;
    }
    
    try {
        await switchToBSC();
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        const newAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = newAccounts[0];

        initializeContracts();
        updateWalletUI();
        await loadUserBalances();
        walletInfoSection.classList.remove('hidden');
        sellSection.classList.remove('hidden');
        connectWalletBtn.textContent = formatAddress(userAddress);
        showNotification('Wallet connected successfully!', 'success');
        
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification(`Failed to connect wallet: ${error.message}`, 'error');
    }
}

// Update wallet UI
function updateWalletUI() {
    if (!userAddress) return;
    document.getElementById('walletAddress').textContent = formatAddress(userAddress);
}

// Load user balances
async function loadUserBalances() {
    if (!userAddress || !provider) return;
    try {
        const bnbBalance = await provider.getBalance(userAddress);
        document.getElementById('bnbBalance').textContent = `${formatNumber(ethers.utils.formatEther(bnbBalance), 4)} BNB`;
        
        if (usdtContract) {
            const usdtBalance = await usdtContract.balanceOf(userAddress);
            document.getElementById('usdtBalance').textContent = `${formatNumber(ethers.utils.formatUnits(usdtBalance, 18), 2)} USDT`;
        }
        if (whaContract) {
            const whaBalance = await whaContract.balanceOf(userAddress);
            document.getElementById('whaBalance').textContent = `${formatNumber(ethers.utils.formatEther(whaBalance), 2)} WHA`;
        }
        if (whaContract && exchangeContract) {
            const allowance = await whaContract.allowance(userAddress, CONTRACT_CONFIG.EXCHANGE_CONTRACT_ADDRESS);
            userWhaAllowance = parseFloat(ethers.utils.formatEther(allowance));
            updateSellUI(); 
        }
    } catch (error) {
        console.error('Error loading user balances:', error);
        showNotification('Failed to load balances', 'error');
    }
}

// Calculate USDT amount
function calculateUsdtAmount(whaAmount) {
    if (!WHA_BUY_PRICE || !whaAmount) return 0;
    return whaAmount * WHA_BUY_PRICE;
}

// Update sell UI
async function updateSellUI() {
    const whaAmount = parseFloat(whaAmountInput.value) || 0;
    const usdtAmount = calculateUsdtAmount(whaAmount);
    document.getElementById('usdtReceive').textContent = formatNumber(usdtAmount, 2);

    if (whaAmount > 0) {
        approveWHABtn.disabled = false;
        if (userWhaAllowance >= whaAmount) {
            sellTokensBtn.disabled = false;
        } else {
            sellTokensBtn.disabled = true;
        }
    } else {
        approveWHABtn.disabled = true;
        sellTokensBtn.disabled = true;
    }
}

// Approve WHA
async function approveWHA() {
    const whaAmount = parseFloat(whaAmountInput.value);
    if (!whaAmount || whaAmount <= 0) {
        showNotification('Please enter a valid WHA amount', 'error');
        return;
    }
    if (!whaContract) {
        showNotification('WHA contract not initialized', 'error');
        return;
    }
    try {
        const amountWei = ethers.utils.parseUnits(whaAmount.toString(), 18);
        const tx = await whaContract.approve(CONTRACT_CONFIG.EXCHANGE_CONTRACT_ADDRESS, amountWei);
        showNotification('Approval transaction sent! Waiting for confirmation...', 'info');
        const receipt = await tx.wait();
        if (receipt.status === 1) {
            userWhaAllowance = whaAmount;
            updateSellUI();
            showNotification('WHA approved successfully!', 'success');
        } else {
            throw new Error('Transaction failed');
        }
    } catch (error) {
        console.error('Error approving WHA:', error);
        if (error.code === 4001) {
            showNotification('Transaction rejected by user', 'error');
        } else {
            showNotification(`Approval failed: ${error.message}`, 'error');
        }
    }
}

// Sell tokens
async function sellTokens() {
    const whaAmount = parseFloat(whaAmountInput.value);
    if (!whaAmount || whaAmount <= 0) {
        showNotification('Please enter a valid WHA amount', 'error');
        return;
    }
    if (!exchangeContract) {
        showNotification('Exchange contract not initialized', 'error');
        return;
    }
    try {
        const amountWei = ethers.utils.parseUnits(whaAmount.toString(), 18);
        const sellTx = await exchangeContract.sellWHA(amountWei);
        showNotification('Sell transaction sent! Waiting for confirmation...', 'info');
        const receipt = await sellTx.wait(); 
        if (receipt.status === 1) {
            const usdtAmount = calculateUsdtAmount(whaAmount);
            showNotification(`Successfully sold ${formatNumber(whaAmount, 2)} WHA tokens! Received ${formatNumber(usdtAmount, 2)} USDT!`, 'success');
            whaAmountInput.value = '';
            userWhaAllowance = 0;
            updateSellUI();
            await loadUserBalances();
        } else {
            throw new Error('Transaction failed');
        }
    } catch (error) {
        console.error('Error selling tokens:', error);
        if (error.code === 4001) {
            showNotification('Transaction rejected by user', 'error');
        } else {
            showNotification(`Sell failed: ${error.message}`, 'error');
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    connectWalletBtn.addEventListener('click', connectWallet);
    whaAmountInput.addEventListener('input', updateSellUI);
    approveWHABtn.addEventListener('click', approveWHA);
    sellTokensBtn.addEventListener('click', sellTokens);
    
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                userAddress = accounts[0];
                updateWalletUI();
                loadUserBalances();
            } else {
                window.location.reload();
            }
        });
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
});