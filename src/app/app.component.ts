import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Model, Lists } from './model';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  model = new Model()
  isDisplay = false
  getUser() {
    return this.model.user
  }

  getLists() {
    if(this.isDisplay){
      return this.model.list;
    }
    return this.model.list.filter((item) => !item.action)
  }
  AddTodo(value: string) {
    if (value != '') {
      this.model.list.push(new Lists(value, false))
    }
  }
  // title = 'todo-list';
  // list = [
  //   {
  //     description: "Yemək",
  //     action: true
  //   }
  //   , {
  //     description: 'İdman',
  //     action: true
  //   }, {
  //     description: 'Dərs',
  //     action: false
  //   }, {
  //     description: 'Film',
  //     action: true
  //   }
  // ]
}
