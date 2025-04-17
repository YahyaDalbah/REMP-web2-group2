import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
}) 
export class ReviewComponent {
  postContent: string = '';
  showMediaOptions: boolean = false;
  showCategoryOptions: boolean = false;
  selectedFile: File | null = null;
  selectedImage: string | null = null;
  
  posts = [
    {
      userName: 'Wafa Adham',
      userAvatar: 'assets/images/user.jpg',
      content: 'Wow! This is amazing!',
      likes: 0,
      comments: 0
    }
  ];

  createPost() {
    if (this.postContent.trim() || this.selectedImage) {
      const newPost = {
        userName: 'Wafa Adham',
        userAvatar: 'assets/images/user.jpg',
        content: this.postContent,
        image: this.selectedImage,
        likes: 0,
        comments: 0
      };
      this.posts.unshift(newPost);
      this.postContent = '';
      this.selectedImage = null;
      this.selectedFile = null;
    }
  }

  addLike(post: any) {
    post.likes++;
  }

  addComment(post: any) {
    post.comments++;
  }

  toggleMediaOptions() {
    this.showMediaOptions = !this.showMediaOptions;
    this.showCategoryOptions = false;
  }

  toggleCategoryOptions() {
    this.showCategoryOptions = !this.showCategoryOptions;
    this.showMediaOptions = false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
