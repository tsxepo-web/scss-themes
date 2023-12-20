import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scss-themes';
  isMenuVisible = false;
  openDropdownIndex: number | null = null;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleDropdown(index: number) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }
  isDropdownOpen(index: number): boolean {
    return this.openDropdownIndex === index;
  }
}
