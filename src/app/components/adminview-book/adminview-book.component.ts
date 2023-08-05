import { Component, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminBookService } from 'src/app/services/adminBookService/admin-book.service';

@Component({
  selector: 'app-adminview-book',
  templateUrl: './adminview-book.component.html',
  styleUrls: ['./adminview-book.component.scss']
})
export class AdminviewBookComponent {
  bookForm!: FormGroup;
  bookType: boolean = false;
  selectedFile: File | null = null;
  imagefile = new FormData();
  imageUrl: any;
  show: boolean = false;
  bookImage:any
  
  @ViewChild('fileInput') fileInput: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AdminviewBookComponent>,
    private adminBookService: AdminBookService, private formBuilder: FormBuilder, private snackBar: MatSnackBar,) {

    console.log(data != null);
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
    })

    if (this.data) {
      this.bookType = !this.bookType;
      this.bookForm.patchValue({
        name: this.data.bookName,
        author: this.data.author,
        description: this.data.description,
        quantity: this.data.quantity,
        price: this.data.price,
        discountPrice: this.data.discountPrice,
        bookImage: this.data.bookImage
      })
      this.bookImage=this.data.bookImage
    }
  }
  bookId = this.data ? this.data._id : '';

  ngOnInit(): void {
    console.log(this.bookId);
  }

  addUpdate() {
    let reqdata = {
      bookName: this.bookForm.value.name,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description,
      quantity: this.bookForm.value.quantity,
      price: this.bookForm.value.price,
      discountPrice: this.bookForm.value.discountPrice,
    }
    console.log(reqdata);

    if (this.bookForm.valid) {
      if (this.bookType) {
        console.log("Update");

        this.adminBookService.updateBooks(this.bookId, reqdata).subscribe((result: any) => {
          console.log("add", result);
          this.dialogRef.close(result);
          this.snackBar.open('Book Updateded !', 'ok', {
            duration: 4000
          });
        })

      } else {
        console.log("Add");
        this.adminBookService.AddBooks(reqdata).subscribe((result: any) => {
          console.log("add", result);
          this.dialogRef.close(result);
          this.snackBar.open('Book Added !', 'ok', {
            duration: 4000
          });
        })
      }
    } else {
      console.log("enter valid details");
      this.snackBar.open('Enter valid details !', 'ok', {
        duration: 4000
      });
    }
  }
  uploadFile() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.imagefile.append('file',this.selectedFile);
      // console.log(this.selectedFile)
      // Display the image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        this.show = !this.show;
      };
      reader.readAsDataURL(file);
      // You can also retrieve the file contents here if needed
      // const contents = reader;
      //console.log(contents);
    }
  }
}
