import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';

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
