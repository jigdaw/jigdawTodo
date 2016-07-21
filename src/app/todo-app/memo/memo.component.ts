import { Component } from '@angular/core';
import { Todo } from '../../todo'
@Component({
  moduleId: module.id,
  inputs: ['todo'],
  selector: '[memo]',
  templateUrl: 'memo.component.html',
  styleUrls: ['memo.component.css']
})
export class MemoComponent {
  todo: Todo
  constructor() {}

  ngOnInit() {

  }

}
