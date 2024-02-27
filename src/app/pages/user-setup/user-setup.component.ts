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
  users?: any;

  @ViewChild("removeItemModal", { static: false })
  removeItemModal?: ModalDirective;
  @ViewChild("editUserModal", { static: false })
  editUserModal?: ModalDirective;

  deletId: any;

  submitted = false;
  form: FormGroup;
  modalRef?: BsModalRef;

  config: any = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  breadCrumbItems: Array<{}>;
  selectedUserType: string = "";

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "User Setup" },
      { label: "All User", active: true },
    ];
  }

  confirm(id: any) {
    this.deletId = id;
    this.removeItemModal.show();
  }

  deleteUser() {
    // this.users.splice(this.deletId, 1);
    this.removeItemModal.hide();
  }

  editModal(){
    this.editUserModal.show();
  }

  edituser(){
    this.editUserModal.hide();
  }
}
