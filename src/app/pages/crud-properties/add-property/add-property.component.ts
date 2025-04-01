import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PropertyService } from '../../../sevices/poperty.service';
import { Property } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-property',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss',
})
export class AddPropertyComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  currentImageUrls: string[] = [];
  showErrorMessage = false;
  userId: Number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService
  ) {
    this.userId = Number(this.route.snapshot.params['userId']);
    this.form = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      bedrooms: [0, [Validators.required, Validators.min(0)]],
      bathrooms: [0, [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      forRent: [false],
      forSale: [false],
      imageURL: [''],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    if (id) {
      const property = this.propertyService.getPropertyById(id);

      if (property) {
        this.isEdit = true;
        this.currentImageUrls = property.images;
        this.form.patchValue(property);
      }
    }
  }

  onSubmit(): void {
    if (
      this.form.valid &&
      (this.form.value.forRent || this.form.value.forSale)
    ) {
      const property: Property = {
        ...this.form.value,
        userId: this.userId,
        image: this.currentImageUrls[0],
        images: this.currentImageUrls,
      };

      if (this.isEdit) {
        this.propertyService.updateProperty(property);
      } else {
        this.propertyService.addProperty(property);
      }
      this.router.navigate([`/profile/${this.userId}/properties`]);
    } else {
      this.showErrorMessage = true;
    }
  }

  shouldShowErrorMessage(field: string) {
    return (
      this.form.get(field)?.invalid &&
      (this.form.get(field)?.dirty ||
        this.form.get(field)?.touched ||
        this.showErrorMessage)
    );
  }

  addImage(event: Event): void {
    event.preventDefault();
    const imageUrl = this.form.get('imageURL')?.value;
    if (imageUrl) {
      this.currentImageUrls.push(imageUrl);
      this.form.get('imageURL')?.reset();
    }
  }

  removeImage(index: number): void {
    this.currentImageUrls.splice(index, 1);
  }
}
