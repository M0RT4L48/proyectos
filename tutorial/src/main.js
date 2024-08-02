import { createApp } from 'vue';

createApp({
  data() {
    return {
      titulo: 'Hola Mundo con Vue',
      frutas: [
        { nombre: 'Pera', cantidad: 10 },
        { nombre: 'Manzana', cantidad: 0 },
        { nombre: 'Platano', cantidad: 11 }
      ],
      nuevaFruta: ''
    };
},
    methods:{
        agregarFruta(){
        this.frutas.push({
            nombre: this.nuevaFruta, cantidad: 0
        });
        this.nuevaFruta = '';
    }
  },
  computed: {
    sumarFrutas() {
      let total = 0;
      for (const fruta of this.frutas) {
        total += fruta.cantidad;
      }
      return total;
    }
  }
  
  //cambia la logica
  //computed:{
    //sumarFrutas(){
      //this.total = 0;
      //for(fruta of this.frutas){
       // this.total = this.total + fruta.cantidad;
      //}
     // return this.total;
    //}
  //}
}).mount('#app');
