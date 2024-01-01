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

  constructor(private el: ElementRef) {}

  @HostListener('window:click', ['event'])
  clickout(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event)) {
      console.log('clicked');
      this.closeDropdown();
    }
  }

  @HostListener('window:keydown.escape', ['event'])
  onEscape(event: KeyboardEvent) {
    this.closeDropdown();
  }

  closeDropdown() {
    this.openDropdownIndex = null;
  }

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
