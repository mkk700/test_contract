// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract HachikoTest is ERC721Enumerable, Ownable, ReentrancyGuard {
  uint256 private constant MAX_SUPPLY = 300;
  bool private _isPublicSaleActive = false;
  string private _baseTokenURI;

  constructor(
    string memory name,
    string memory symbol,
    string memory baseTokenURI
  ) ERC721(name, symbol) {
    _baseTokenURI = baseTokenURI;
  }

  function withdraw() public onlyOwner {
    uint256 totalBalance = address(this).balance;
    require(
      payable(msg.sender).send(totalBalance),
      "Unable to withdraw."
    );
    assert(address(this).balance == 0);
  }

  function togglePublicSale() external onlyOwner {
    _isPublicSaleActive = !_isPublicSaleActive;
  }

  function isPublicSaleActive() external view returns (bool status) {
    return _isPublicSaleActive;
  }

  function setBaseTokenURI(string memory baseTokenURI) public onlyOwner {
    _baseTokenURI = baseTokenURI;
  }

  function mintPublic(uint256 amount) external payable nonReentrant() {
    require(_isPublicSaleActive, "Public sale is not active");
    require(
      totalSupply() + amount <= MAX_SUPPLY,
      "Mint would exceed max supply."
    );
    _mintMultiple(msg.sender, amount);
  }

  function reserve(uint256 amount) external onlyOwner {
    _mintMultiple(msg.sender, amount);
  }

  function _mintMultiple(address owner, uint256 amount) private {
    for (uint256 i = 0; i < amount; i++) {
      uint256 tokenId = totalSupply();
      _safeMint(owner, tokenId);
    }
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  receive() external payable {}
}
