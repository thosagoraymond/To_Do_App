<template>
    <div class="todoApp">
        <TodoForm :todo-item="todo" @to-item="onAdd" />
        <TodoList :todo-list="todoList" @item-to-edit="onEdit"/>
    </div>
</template>

<script>

import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
import { mapActions, mapState } from 'pinia';
import { useTodoListStore } from "../stores/useTodoListStore";

export default {

    components: { TodoForm , TodoList },

    data() {
        return {
            todo:'',
            isEdit: false
        };
    },

    computed:{
        ...mapState(useTodoListStore, ['todoList']),
    },

    methods:{
        ...mapActions(useTodoListStore, ['addTodo']),

        onAdd(item){
            if (this.isEdit){

            }else{
                this.addTodo(item);
            }
          this.isEdit = false;
          this.todo = '';
          
          console.log("On add item --> ", this.todo);
        },
        onEdit(item){
            this.isEdit = true;
            this.todo = item.item;
        }
    }
}
</script>

<style lang="scss" scoped>
    .todoApp {
        padding-top: 2%;
    }
</style>