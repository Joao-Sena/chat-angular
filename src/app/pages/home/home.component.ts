import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // COMO NÃO ESTOU TRABALHANDO COM API IREI CRIAR UM OBJETO DE USUÁRIOS PARA NÃO ENCHER DE DADOS NA PÁGINA HOME
  public usuarios: any = [
    {
      foto: '../../../assets/img/foto-john.jpg',
      nome: 'John Appleseed',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '2 a.m'
    },
    {
      foto: '../../../assets/img/foto-robert.jpeg',
      nome: 'Robert William',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '3 a.m'
    },
    {
      foto: '../../../assets/img/foto-alyona.jpg',
      nome: 'Alyona Kosheeva',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '4 a.m'
    },
    {
      foto: '../../../assets/img/foto-jonathan.jpg',
      nome: 'Jonathan Leane',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '5 a.m'
    },
    {
      foto: '../../../assets/img/foto-albert.jpg',
      nome: 'Albert Steven',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '6 a.m'
    },
    {
      foto: '../../../assets/img/foto-bagus.jpg',
      nome: 'Bagus Fikri',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '7 a.m'
    },
    {
      foto: '../../../assets/img/foto-diana.png',
      nome: 'Diana Lekven',
      mensagem: 'Lorem ipsum dolor sit...',
      horario: '8 a.m'
    }
  ];

  public usuariosOnline: any = [
    {
      foto: '../../../assets/img/foto-robert.jpeg',
      nome: 'Robert William',
      status: 'Online'
    },
    {
      foto: '../../../assets/img/foto-albert.jpg',
      nome: 'Albert Steven',
      status: 'Online'
    },
    {
      foto: '../../../assets/img/foto-jonathan.jpg',
      nome: 'Jonathan Leane',
      status: 'Online'
    },
    {
      foto: '../../../assets/img/foto-bagus.jpg',
      nome: 'Bagus Fikri',
      status: 'Online'
    },
    {
      foto: '../../../assets/img/foto-alyona.jpg',
      nome: 'Alyona Kosheeva',
      status: 'Online'
    },
    {
      foto: '../../../assets/img/foto-online.png',
      nome: 'Muhammad Zayn',
      status: 'Online'
    },
    {
      foto: '../../../assets/img/foto-diana.png',
      nome: 'Diana Lekven',
      status: 'Online'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
