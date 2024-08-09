import { ChangeDetectorRef, Component, OnInit, signal } from "@angular/core";
import { AuthWeb3Service } from "../../services/auth-web3.service";
import { ContractServices } from "../../services/contract.service";

@Component({
  selector: "app-web3",
  standalone: true,
  imports: [],
  templateUrl: "./web3.component.html",
  styleUrls: ["./web3.component.css"],
})
export class web3Component implements OnInit {
  loginUser: boolean = false;
  addressUser: string = "";
  addressUserView: boolean = false;
  contractBalance = signal<string>("");
  previousBalance = signal<string>("");

  web3: any;

  loader: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private authWeb3Srv: AuthWeb3Service,
    private contractServices: ContractServices
  ) {
    this.web3 = this.authWeb3Srv.web3Instance;
  }

  connect() {
    this.loader = true;

    try {
      this.authWeb3Srv.connect();
    } catch (error) {}
  }

  payTransaction(amount: number) {
    this.loader = true;
    this.contractServices.payTransaction(amount).catch((error) => {
      console.error("Error:", error);
      this.loader = false;
    });
  }

  ngOnInit(): void {
    this.authWeb3Srv.loginUser.subscribe((res: boolean) => {
      this.loginUser = res;
      !this.loginUser
        ? (this.addressUserView = false)
        : ((this.addressUserView = true), (this.loader = false));
      this.cdr.detectChanges();
    });

    this.authWeb3Srv.addressUser.subscribe((res: string) => {
      this.addressUser = res;
      this.cdr.detectChanges();
    });
    this.getBalance();
  }

  getBalance() {
    this.contractServices.contractBalance.subscribe((res: string) => {
      this.contractBalance.set(res);
      setTimeout(() => {
        this.previousBalance.set(res);
      }, 1000);
      // console.log("balance", res);
      this.loader = false;
      this.cdr.detectChanges();
    });
  }
}
