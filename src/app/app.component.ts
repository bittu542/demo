import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pratice';
  todaydate: Date;
  personal: any[];
  albumdetails: any[];
  constructor(private myservice: MyserviceService) {}
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];
      isavailable = true;    


      myClickFunction(event) { 
        alert("Button is clicked"); console.log(event); 
     } 
     changemonths(event) { 
        alert("Changed month from the Dropdown");
     } 
     ngOnInit() { 
      this.todaydate = this.myservice.showTodayDate(); 
      this.myservice.getData().subscribe((data)=>{
      //  this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
         this.personal = Array.from(Object.keys(data),k=>data[k]);
        // console.log(this.personal);
        // console.log(data['0']['email']);
      })
      
   } 
   onClickSubmit(data) {
      console.log(JSON.stringify(data));
      alert("Entered Email id : " + JSON.stringify(data)); 
   }

   onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, 
          event.previousIndex, event.currentIndex);
    } else {
       transferArrayItem(event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex);
    }
 }
}
