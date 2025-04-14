export const PYUSD_ABI = [
    // ERC-20 Standard
    'function balanceOf(address owner) view returns (uint256)',
    'function transfer(address to, uint256 amount) returns (bool)',
    'function decimals() view returns (uint8)',
    
    // PYUSD Specific
    'function mint(address to, uint256 amount)',
    'function burn(uint256 amount)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
  ];