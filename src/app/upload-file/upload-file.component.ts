import { Component, OnInit } from '@angular/core';
import { SharedAPIService } from '../shareServices/shared-api.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor(private apiService: SharedAPIService) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    const fileInput:any = event.target;
    const fileLabel:any = document.getElementById("fileLabel");
    if (fileInput.files.length > 0) {
      fileLabel.textContent = fileInput.files[0].name;
    } else {
      fileLabel.textContent = "Choose a file";
    }
  }

  uploadFile() {
    const fileInput:any = document.getElementById("file") as HTMLInputElement;
    const fileLabel:any = document.getElementById("fileLabel");
    if (!fileInput.files[0]) {
      alert("Please select a file.");
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    const allowedExtensions = /(\.xlsx|\.xls|\.csv)$/i;
    if (!allowedExtensions.exec(file.name)) {
      alert("Please upload only Excel or CSV files.");
      fileInput.value = ''; 
      return;
    }

    reader.onload = () => {
      const base64Data = reader.result?.toString().split(",")[1]; // Get the Base64 data
      console.log(base64Data); // Display the Base64 data in the console

      fileLabel.textContent = "Choose a file";
      fileInput.value = '';
    };

    reader.readAsDataURL(file);

    this.apiService.uploadCSV(file).subscribe(
      (response:any) => {
        console.log('File uploaded successfully:', response);
        // Handle response as needed
      },
      (error:any) => {
        console.error('Error uploading file:', error);
        // Handle error
      }
    );
  }

}
