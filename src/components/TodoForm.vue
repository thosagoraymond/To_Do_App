<template>
    <div class="container">
        <form @submit.prevent="onAdd()">
            <div class="d-flex justify-content-center">
                <div class="col-sm-8">
                    <input v-model="todo" type="text" class="form-control" placeholder="Add a todo item ..." />      
                </div>
                <div class="col-sm-1">
                    <button class="btn btn-primary rounded-3">Add</button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    
    import { ref } from "vue";

    export default {
        props:{
            todoItem:{
                type: String,
                default:''
            }
        },
        // setup() {
        //     const todo = ref("");
        //     // const store = useTodoListStore();

        //     // function addItemAndClear(item) {
        //     //     if (item.length === 0) {
        //     //         return;
        //     //     }
        //     //     store.addTodo(item);
        //     //     todo.value = "";
        //     // }

        //     // return { todo, addItemAndClear }
        // },
        data(){
            return{
                todo: ''
            }
        },
        watch: {
            todoItem:{
                handler(val){
                    console.log(val);
                    this.todo = val;
                },
                deep: true
            }
        },
        methods:{
            onAdd(){
                this.$emit('to-item', this.todo);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>