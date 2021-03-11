import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent implements OnInit {

  flag: any;


  photos = [];

  ngOnInit(): void {
  }
  
  onSelectFile(event) {

    this.flag = event.target.id;
  console.log (this.flag);
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  if (this.flag ==="photo") {
                    this.photos.push(event.target.result); 
                    console.log(this.photos);
                  }

     
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

}
