import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CepService } from 'src/app/cep.service';
import { LocalstorageService } from '../localstorage.service';
import { EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Exercicio } from '../Exercicio';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesExercicioComponent implements OnInit {

  constructor(private Http : HttpClient, private cepService : CepService, private storage : LocalstorageService, private actRoute : ActivatedRoute) { }

  id : string;
  exs;
  ex;

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    this.exs = this.storage.listaEx();
    this.ex = this.exs.find(p => p.id == this.id);
    console.log(this.exs);
  }  

}
