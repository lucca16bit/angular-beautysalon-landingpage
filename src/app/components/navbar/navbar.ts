import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'navbar',
	imports: [RouterModule],
	templateUrl: './navbar.html',
	styleUrl: './navbar.css',
})
export class Navbar {
	rotateChevron: boolean = false;
	menuOpen: boolean = false;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
		this.rotateChevron = false;
	}
}
