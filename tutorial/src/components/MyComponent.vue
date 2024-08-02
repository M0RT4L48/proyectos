<template>
        <div  class="my-component">
        <h1 v-bind:class="{highlighted: isHighlighted}"> {{ title  }}</h1>
        <button v-on:click="toggleHighlight">toggle highlight </button>
        <input v-model="message">

        <ul>
            <li v-for="item in list" :key="item.id">{{ item.text }}</li>
        </ul>
    </div>

</template>

<style scoped>
.highlighted{
    color: gold
}
</style>

<script>
export default{
    name: 'MyComponent',
    data(){
        return{
            message: 'Hello World With Vue',
            title: 'this is the title',
            isHighlighted: false,
            isVisible: true,
            list: [
                {id: 1 ,text:'first item'},
                {id: 2 ,text:'second item'},
                {id: 3 ,text:'third item'}
            ]
        }
    },
    methods:{
        toggleVisibility(){
            this.isVisible = !this.isVisible;
        },
        sayHello(){
            alert('Hello!');
        },
        toggleHighlight(){
            this.isHighlighted = !this.isHighlighted;
        }
    }
}
</script>