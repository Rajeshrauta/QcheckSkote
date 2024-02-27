import { Component, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersData } from "./utilities/usersdata";
import { UsersModel} from "./utilities/user.model";
import { Observable } from 'rxjs';


@Component({
  selector: "app-user-setup",
  templateUrl: "./user-setup.component.html",
  styleUrl: "./user-setup.component.scss",
})
export class UserSetupComponent {
  usersData = UsersData;

  @ViewChild("removeItemModal", { static: false })
  removeItemModal?: ModalDirective;

  submitted = false;
  form: FormGroup;
  modalRef?: BsModalRef;
  config: any = {
    backdrop: true,
    ignoreBackdropClick: true,
  };
  breadCrumbItems: Array<{}>;

  transactions: UsersModel[] = [];
  // Table data
  content?: any;
  orderes?: any;
  ordersList!: Observable<UsersModel[]>;
  total: Observable<number>;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "User Setup" },
      { label: "All User", active: true },
    ];
  }


  confirm() {
    this.removeItemModal.show();
  }

  
  varyingModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
