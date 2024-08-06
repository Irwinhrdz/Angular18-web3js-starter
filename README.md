# Angular18Web3js

Angular 18 Web3js tailwind Solidity Sepolia template

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a template to implement Angular in its latest version with the Web3js library in standalone mode, it is a basic template to interact with your Metamask wallet and a smart contract that implements a different ERC-20 token to receive payments through that token in solidity.

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Nodejs in the latest version

- npm
  ```sh
  npm install npm@latest -g
  ```
  Angular 18
- npm
  ```sh
  npm install -g @angular/cli@18
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Irwinhrdz/Angular18-web3js-starter.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

   NOTE: You can use the settings that are currently in the project in contractAbi file, and skip to step 7

3. Enter your Token address in `../constants/contractAbi.ts`
   ```js
   export const MytokenAddress = "Token address to use";
   ```
4. Enter ABI of token in `../constants/contractAbi.ts`
   ```js
   export const MYTOKENABI = [];
   ```
5. Enter your Smartcontract address in `../constants/contractAbi.ts`
   ```js
   export const MyContractPayAddress = "Smart contract address to use";
   ```
6. Enter ABI of token in `../constants/contractAbi.ts`

   ```js
   export const MyContractPayABI = [];
   ```

7. Run project
   ```sh
   ng serve
   ```

<!-- USAGE EXAMPLES -->

## Usage

The use is very simple, once you run the project on your local you press the connect button, we make sure to be within the Sepolia testnet, once the metamask is connected, a button is enabled to transfer funds to the smart contract.

These funds are in the Token that we have added

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Disclaimer:

This is a basic example for educational purposes and may require further customization for production use. Be sure to test and secure your application thoroughly before deploying it in a real-world environment.

## Additional Notes:

Consider adding a section on smart contract deployment and interaction using tools like Truffle or Hardhat.
If your project uses external APIs or services, provide instructions on integrating them.
Include a section on security best practices for Web3 applications, such as handling private keys securely.
Provide links to relevant documentation for Angular, Web3, Solidity, and any other technologies used in the project.
This enhanced README aims to provide a clear, informative, and well-structured guide for developers using your Web3 Angular 18 application.
