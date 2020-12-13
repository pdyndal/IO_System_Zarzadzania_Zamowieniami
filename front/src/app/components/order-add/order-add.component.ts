import { Component, OnInit } from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  faArrowLeft = faArrowLeft;
  faCheckCircle = faCheckCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
