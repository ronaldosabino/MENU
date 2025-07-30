import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  adress: boolean = false;

  openModalAdress(): void {
    this.adress = true;
    document.body.style.overflow = 'hidden'; // trava o scroll
  }

  closeModalAdress(): void {
    this.adress = false;
    document.body.style.overflow = ''; // libera o scroll
  }
}
