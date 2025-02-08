import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  toggleMenu(): void {
    const menu = document.querySelector(".menu-links") as HTMLElement;
    const icon = document.querySelector(".hamburger-icon") as HTMLElement;
  
    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }

  email = 'kuku.zayn@gmail.com';

  telegram = '@itz_not_thuta'
  
}
