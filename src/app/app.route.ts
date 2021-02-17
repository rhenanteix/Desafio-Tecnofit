import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { HomeExercicioComponent } from './home-exercicios/home/home.component'
import { CadastrarComponent } from './Crud/cadastrar/cadastrar.component';
import { EditarComponent } from './Crud/editar/editar.component';
import { DetalhesComponent } from './Crud/detalhes/detalhes.component';
import { DetalhesExercicioComponent } from './Exercicios/detalhes/detalhes.component';
import { CadastrarExercicioComponent } from './Exercicios/cadastrar/cadastrar.component';

export const route : Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home',  component: HomeComponent},
{path: 'exercicio', component: HomeExercicioComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'editar/:id', component: EditarComponent},
{path: 'detalhes/:id', component: DetalhesComponent},
{path: 'newexercise', component: CadastrarExercicioComponent },
{path: 'detail/:id', component: DetalhesExercicioComponent}
]