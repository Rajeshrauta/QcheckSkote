import { Component, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from "@angular/forms";
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
  @ViewChild("passwodResetModal", { static: false })
  passwodResetModal?: ModalDirective;

  deletId: any;

  passwordForm: FormGroup;

  form: FormGroup;
  modalRef?: BsModalRef;

  config: any = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  breadCrumbItems: Array<{}>;
  selectedUserType: string = "";

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.passwordMatchValidator = this.passwordMatchValidator.bind(this);
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "User Setup" },
      { label: "All User", active: true },
    ];

    this.passwordForm = this.formBuilder.group(
      {
        currentPassword: ["", Validators.required],
        newPassword: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  //validator to check if newPassword and confirmPassword match
  passwordMatchValidator: ValidatorFn = (
    control: FormGroup
  ): { [key: string]: boolean } | null => {
    const newPassword = control.get("newPassword").value;
    const confirmPassword = control.get("confirmPassword").value;

    if (confirmPassword != "" && newPassword !== confirmPassword) {
      control.get("confirmPassword").setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
  };

  // Convenience getter for easy access to form fields
  get f() {
    return this.passwordForm.controls;
  }

  onSubmit() {
    if (this.passwordForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    console.log(this.passwordForm.value);
    this.passwordForm.reset();
    this.passwodResetModal.hide();
  }

  confirm(id: any) {
    this.deletId = id;
    this.removeItemModal.show();
  }

  deleteUser() {
    // this.users.splice(this.deletId, 1);
    this.removeItemModal.hide();
  }

  editModal() {
    this.editUserModal.show();
  }

  edituser() {
    this.editUserModal.hide();
  }
}
