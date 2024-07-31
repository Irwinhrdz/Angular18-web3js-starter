import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbiInput, Web3 } from 'web3';
import Swal from 'sweetalert2';
import {
  MyContractPayABI,
  MYTOKENABI,
  MyContractPayAddress,
  MytokenAddress
} from '../app/constants/contractAbi'
import { CHAIN_ID } from '../app/constants/eth-constant';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ContractServices {
  web3: any = null;

  get web3Instance() { return this.web3; }

  chainIds: string[] = CHAIN_ID;
  contractBalance: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  // The address of the smart contract
  contractAddress = MyContractPayAddress;
  MytokenAddress = MytokenAddress;

  // The ABI (Application Binary Interface) of the smart contract
  contractABI = MyContractPayABI;
  coinContractABI = MYTOKENABI;

  contract: any
  coinContract: any

  constructor() {
    
    if (typeof window.ethereum !== 'undefined') {
      
      this.web3 = new Web3(window.ethereum);
      window.ethereum.enable(); 

      this.web3.eth.setProvider("https://ethereum-sepolia-rpc.publicnode.com");
     //console.log(Web3.givenProvider)
     
      // Create an instance of the smart contract
      this.contract = new this.web3.eth.Contract(this.contractABI as AbiInput[], this.contractAddress);
      this.coinContract = new this.web3.eth.Contract(this.coinContractABI as AbiInput[], this.MytokenAddress);

      this.getAmountMytoken()
    
    } else {
        
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tienes instalado MetaMask!'
      });
    }
  }
  
  async getAmountMytoken() {
   this.contractBalance.next(await this.coinContract.methods.balanceOf(this.contractAddress).call())  
  }

  //  conect to smart contracto to pay trasaction
  payTransaction(amount: number){
   this.handlePayTransaction(amount);
  }

  async handlePayTransaction(amount:number){

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const selectedAddress = accounts[0];
   
   
      
        // Config Web3 provider metamask
        this.web3.setProvider(window.ethereum);


        /// approve My Token
        await this.coinContract.methods.approve(this.contractAddress, amount).send({
            from: selectedAddress,
            to: this.MytokenAddress
        });
        
        // pay transaction
        await this.contract.methods.payTransaction(amount, 0, "test message").send({
            from: selectedAddress,
            to: this.contractAddress,
          
        });

  }

 
}
