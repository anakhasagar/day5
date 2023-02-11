import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private api:HeroService){}
  todos:any
  ngOnInit()
  {
    console.log("hello")
    this.api.getTodoData().subscribe(response=>{
      this.todos=response;
    })
  }
  

}
