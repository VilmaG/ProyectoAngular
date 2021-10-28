import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { PaisComponent } from "./components/pais/pais.component";
import { PeruComponent } from "./components/peru/peru.component";

const routes:Routes = [
    {

    path:'',
    children:[
       {
        path:'',
        redirectTo:'pais',
        pathMatch: 'full'
        },
        {
            path:'pais',
            component: PaisComponent
            },
        {
        path:'peru',
        component: PeruComponent
        }
        
    ]
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }