<template>
<div class="container">
        <!-- <div v-for="todo in todoList" :key="todo.id">
            <div>
                <div class="col-sm-4">
                    <span :class="{ completed: todo.completed }" >{{ todo.item }}</span>
                    <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
                    <span @click="deleteTodo(todo.id)">&#10060;</span>
                </div>                
            </div>
        </div> -->

        <table class="table table-hover col-sm-8">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody v-for="todo in todoList" :key="todo.id">
                    <tr>
                        <th scope="row">{{ todo.item }}</th>
                        <td>To-Do</td>
                        <td>
                            <div class="text-center">
                                <!-- <span @click="editTodo(todo)">&#9998</span> -->

                                <button class="btn btn-primary rounded-3" @click="editTodo(todo)">
                                Edit</button>
                            </div>
                        </td>

                        <td>
                            <div class="text-center">
                                <!-- <span @click="deleteTodo(todo.id)"> <font-awesome-icon icon="fa-solid fa-trash" /></span> -->
                                <span @click="deleteTodo(todo.id)">&#10060</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props:{
            todoList:{
                type: Array,
                default:()=> []
            }
        },

        methods:{
            editTodo(todo){
              this.$emit('item-to-edit', todo);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .completed {
        text-decoration: line-through;
    }
</style>