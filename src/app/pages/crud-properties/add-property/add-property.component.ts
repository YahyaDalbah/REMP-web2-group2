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
  selectedFiles: File[] = [];
  uploadProgress: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService
  ) {
    this.form = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      bedrooms: [0, [Validators.required, Validators.min(0)]],
      bathrooms: [0, [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      isForRent: [false],
      isForSale: [false],
      imageURL: [''],
    });
  }

  ngOnInit(): void {
    let property: Property;
    const id = Number(this.route.snapshot.params['id']);
    if (id) {
      this.propertyService.getPropertyById(id).subscribe({
        next: (data) => {
          property = data;
          if (property) {
            this.isEdit = true;
            this.currentImageUrls = property.images;
            this.form.patchValue(property);
          }
          return property;
        },
      });
    }
  }

  onSubmit(): void {
    if (
      this.form.valid &&
      (this.form.value.isForRent || this.form.value.isForSale)
    ) {
      const property: Property = {
        ...this.form.value,
        image: this.currentImageUrls[0],
        images: this.currentImageUrls,
        status: 'available',
        price: parseFloat(this.form.value.price),
      };

      if (this.isEdit) {
        this.propertyService.updateProperty(property.id, property).subscribe({
          next: (data) => this.router.navigate([`/profile/properties`]),
        });
      } else {
        this.propertyService.createProperty(property).subscribe({
          next: (data) => this.router.navigate([`/profile/properties`]),
        });
      }
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  uploadImages(): void {
    if (this.selectedFiles.length === 0) return;

    this.uploadProgress = 0;

    this.propertyService.uploadImages(this.selectedFiles).subscribe({
      next: (event: any) => {
        if (event.type === 1 && event.loaded && event.total) {
          // Upload progress
          this.uploadProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === 4) {
          // Upload complete
          this.currentImageUrls = [
            ...this.currentImageUrls,
            ...event.body.urls,
          ];
          this.selectedFiles = [];
          this.uploadProgress = null;
        }
      },
      error: (error: any) => {
        console.error('Upload failed:', error);
        this.uploadProgress = null;
        // Handle error (show message to user)
      },
    });
  }

  removeImage(index: number): void {
    this.currentImageUrls.splice(index, 1);
  }
}
