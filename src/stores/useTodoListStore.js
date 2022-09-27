import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList',{
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false })
        },
        deleteTodo(itemID) {
          console.log("Delete");
            this.todoList = this.todoList.filter((object) => {
              // console.log("Id to delete --> ", object.id);
              return object.id !== itemID;
            });
        },
        toggleCompleted(idToFind) {
          console.log("Toggle Completed");
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
          editTodoTask(payload){
            console.log("Testing edit",todo);
            // console.log("Checking the data --> ", this.todoList.find((obj) => obj.id === idToEdit));
            const itemToEdit =  this.todoList.find((obj) => obj.id === payload.id);
            itemToEdit.item = payload.item;

            console.log("The value assigned", this.todoList);
            return this.todoList;
          }
    },
})