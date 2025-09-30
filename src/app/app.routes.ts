import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocumentsComponent } from './pages/documents/documents.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'docs',
        component: DocumentsComponent
    }
];
