import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { HeroSection } from "../../components/hero-section/hero-section";

@Component({
	selector: 'home',
	imports: [Footer, HeroSection],
	templateUrl: './home.html',
})
export class Home {}
