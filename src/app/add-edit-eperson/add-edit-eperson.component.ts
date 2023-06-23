import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-eperson',
  templateUrl: './add-edit-eperson.component.html',
  styleUrls: ['./add-edit-eperson.component.css']
})
export class AddEditEPersonComponent implements OnInit {
  userTypes = [
    { id: 1, name: 'Select' },
    { id: 2, name: 'Admin User' },
    { id: 3, name: 'Public User' },
    // Add more user types here
  ];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      userType: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      language: ['', Validators.required],
      password: ['', Validators.required],
      canLogIn: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onUserTypeChange(): void {
    const selectedUserType = this.form.get('userType')?.value;

    // Update form fields based on the selected user type
    switch (selectedUserType) {
      case 'Admin User':
        this.addAdminUserFields();
        break;
      case 'Public User':
        this.addPublicUserFields();
        break;
      // Handle other user types
      default:
        this.removeAdditionalFields();
        break;
    }
  }

  addAdminUserFields(): void {
    this.form.addControl('photoId', this.formBuilder.control(''));
    this.form.addControl('dateOfBirth', this.formBuilder.control(''));
    // Add more admin user fields
  }

  addPublicUserFields(): void {
    this.form.addControl('photoId', this.formBuilder.control(''));
    this.form.addControl('dateOfBirth', this.formBuilder.control(''));
    this.form.addControl('aadharCardNumber', this.formBuilder.control(''));
    // Add more public user fields
  }

  removeAdditionalFields(): void {
    this.form.removeControl('photoId');
    this.form.removeControl('dateOfBirth');
    this.form.removeControl('aadharCardNumber');
    // Remove other additional fields
  }

  submitForm(): void {
    if (this.form.valid) {
      // Handle form submission
      console.log(this.form.value);
    }
  }
}