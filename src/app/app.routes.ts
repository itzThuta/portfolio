import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadChildren: () => import('./portfolio-app/app.module').then(m => m.AppModule)}
];
