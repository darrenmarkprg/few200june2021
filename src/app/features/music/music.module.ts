import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';

const routes: Routes = [
  {
    path: 'music',
    component: MusicComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'entry',
        component: EntryComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MusicComponent,
    EntryComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers)
  ]
  // exports: [ListComponent]
})
export class MusicModule { }
