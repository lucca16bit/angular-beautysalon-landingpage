import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'navbar',
	imports: [],
	templateUrl: './navbar.html',
	styleUrl: './navbar.css',
})
export class Navbar {
	lastScrollPosition: number = 0;
	rotateChevron: boolean = false;
	showLangList: boolean = false;
	menuOpen: boolean = false;
	isHidden: boolean = false;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
		this.rotateChevron = false;
		this.showLangList = false;
	}

	@HostListener('window:scroll', [])
	handleWindowScroll() {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollPosition > this.lastScrollPosition) {
			this.showLangList = false;
			this.rotateChevron = false;
			this.isHidden = true;
		} else {
			this.isHidden = false;
		}
		this.lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
	}

	scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		this.menuOpen = false;
	}
}
