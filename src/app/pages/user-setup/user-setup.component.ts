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
  deletId: any;

  passwordForm: FormGroup;
  createUserForm: FormGroup;
  editUserForm: FormGroup;

  modalRef?: BsModalRef;

  config: any = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  breadCrumbItems: Array<{}>;
  selectedUserType: string = "";

  @ViewChild("removeItemModal", { static: false })
  removeItemModal?: ModalDirective;
  @ViewChild("editUserModal", { static: false })
  editUserModal?: ModalDirective;
  @ViewChild("passwodResetModal", { static: false })
  passwodResetModal?: ModalDirective;
  @ViewChild("createUserModal", { static: false })
  createUserModal?: ModalDirective;

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

    this.createUserForm = this.formBuilder.group({
      usertype: ["", [Validators.required]],
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  updateSelectedUserType(value: string) {
    this.selectedUserType = value;
  }

  get f() {
    return this.passwordForm.controls;
  }

  //Convenience getter for easy access to form fields of createuser form fields
  get c() {
    return this.createUserForm.controls;
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

  // Convenience getter for easy access to form fields of password reset form fields

  onResetPasswordSubmit() {
    if (this.passwordForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    console.log(this.passwordForm.value);
    this.passwordForm.reset();
    this.passwodResetModal.hide();
  }

  onCreateUserSubmit() {
    console.log(this.createUserForm.value);
    if (this.createUserForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.createUserForm.reset();
    this.createUserModal.hide();
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
