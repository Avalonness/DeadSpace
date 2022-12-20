import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Paperkit';
  i: number = 1

  constructor(
    private router: Router
     ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }



// EVENT MOUSEWHEEL
  @HostListener('mousewheel', ['$event'])
  onMousewheel(event: WheelEvent){
    event.preventDefault();


    if(event.deltaY < 0){
     this.i--

     if(this.i == 0) {
      this.i = 1
     }
     console.log(this.i)


  }


    if(event.deltaY>0){
           this.i++

     if(this.i == 5) {
      this.i = 4
     }
     console.log(this.i)
  }

  setTimeout( () => {window.location.hash = `#ancre${this.i}`}, 200)

  }


}



