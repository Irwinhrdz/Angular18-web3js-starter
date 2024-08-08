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

  web3: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private authWeb3Srv: AuthWeb3Service,
    private contractServices: ContractServices
  ) {
    this.web3 = this.authWeb3Srv.web3Instance;
  }

  connect() {
    this.authWeb3Srv.connect();
  }

  payTransaction(amount: number) {
    this.contractServices
      .payTransaction(amount).catch((error) => {
        console.error("Error:", error);
      });
  }

  ngOnInit(): void {
    this.authWeb3Srv.loginUser.subscribe((res: boolean) => {
      this.loginUser = res;
      !this.loginUser
        ? (this.addressUserView = false)
        : (this.addressUserView = true);
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
      console.log("balance", res);
      this.cdr.detectChanges();
    });
  }
}
