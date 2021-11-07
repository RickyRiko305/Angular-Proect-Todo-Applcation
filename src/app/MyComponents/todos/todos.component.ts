import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null
  todos: Todo[]
  //i!: number

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem ==null){
      this.todos= []
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
    //this.todos= [
      // {
      //   sno:1,
      //   title: "title 1",
      //   des: "description ",
      //   active: true
      // },
      // {
      //   sno:2,
      //   title: "title 2",
      //   des: "description ",
      //   active: true
      // },
      // {
      //   sno:3,
      //   title: "title 3",
      //   des: "description ",
      //   active: true
      // }
    //]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    console.log("delete")
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo: Todo){
    console.log(todo)
    console.log("add")
    
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  toggleTodo(todo: Todo){
    console.log(todo)   
    
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

}
