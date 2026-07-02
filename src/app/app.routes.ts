import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: '',
		component: Home,
	},
	// {
	// 	path: 'about',
	// 	component: About,
	// },
	// {
	// 	path: 'contact',
	// 	component: Contact,
	// },
	// {
	// 	path: 'catalog',
	// 	component: Catalog,
	// },
	// {
	// 	path: 'schedule',
	// 	component: Schedule,
	// },
	// {
	// 	path: 'gallery',
	// 	component: Gallery,
	// },
];
