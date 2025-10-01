import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ExamplesComponent } from './pages/examples/examples.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'docs',
        component: DocumentsComponent
    },
    {
        path:'examples',
        component: ExamplesComponent
    }
];
