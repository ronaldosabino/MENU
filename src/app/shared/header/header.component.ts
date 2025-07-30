import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showSidebar: boolean = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      (document.getElementById('themeSwitch') as HTMLInputElement).checked =
        true;
    }
  }

  toggleTheme(event: any): void {
    const isChecked = event.target.checked;

    if (isChecked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  openSidebar() {
    this.showSidebar = true;
    document.body.style.overflow = 'hidden'; // Bloqueia scroll
  }

  closeSidebar() {
    this.showSidebar = false;
    document.body.style.overflow = ''; // Restaura scroll
  }
}
