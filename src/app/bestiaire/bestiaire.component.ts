import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bestiaire',
  templateUrl: './bestiaire.component.html',
  styleUrls: ['./bestiaire.component.css']
})
export class BestiaireComponent implements OnInit{
  @ViewChild('isaacDesc') isaacDesc!: ElementRef;
  @ViewChild('necroDesc') necroDesc!: ElementRef;
  @ViewChild('monoDesc') monoDesc!: ElementRef;
  @ViewChild('usgDesc') usgDesc!: ElementRef;

  descStatus!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showTest(input: string){
    // console.log(this.isaacStatus)
    // if (this.isaacStatus == true){
    //   this.isaacDesc.nativeElement.classList.add('hidden');
    // } else {
    //   this.isaacStatus = true;
    //   this.isaacDesc.nativeElement.classList.remove('hidden');
    // }

    switch(input) {
      case "isaac":
        console.log('Isaac Clarke')
        this.necroDesc.nativeElement.classList.add('hidden');
        this.monoDesc.nativeElement.classList.add('hidden');
        this.usgDesc.nativeElement.classList.add('hidden');
        this.isaacDesc.nativeElement.classList.remove('hidden');
        break;

      case 'necro':
        console.log('Necromorph')
        this.isaacDesc.nativeElement.classList.add('hidden');
        this.monoDesc.nativeElement.classList.add('hidden');
        this.usgDesc.nativeElement.classList.add('hidden');
        this.necroDesc.nativeElement.classList.remove('hidden');
        break;

      case 'monolithe':
        console.log('Monolithe')
        this.isaacDesc.nativeElement.classList.add('hidden');
        this.necroDesc.nativeElement.classList.add('hidden');
        this.usgDesc.nativeElement.classList.add('hidden');
        this.monoDesc.nativeElement.classList.remove('hidden');
        break;

      case 'usg':
        console.log('USG-Ishimura')
        this.isaacDesc.nativeElement.classList.add('hidden');
        this.necroDesc.nativeElement.classList.add('hidden');
        this.monoDesc.nativeElement.classList.add('hidden');
        this.usgDesc.nativeElement.classList.remove('hidden');
        break;

      default:
        console.log(`Game Over`);
    }


  }

}
