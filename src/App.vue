<script setup>
import { ref,computed } from 'vue'
const filme = ref([]);
const novosFilmes = ref("");
const novasNotas = ref("");
class Filme {
  constructor(nome, nota) {
    this.nome = nome
    this.nota = Number(nota)
  }
}
function adicionar() {
  if (novosFilmes.value !== "" && novasNotas.value >= 0 && novasNotas.value <= 10) {
  filme.value.push(
  new Filme(novosFilmes.value, novasNotas.value)
  );
    novosFilmes.value = ""
    novasNotas.value =""
  };
};
function remover(index){
  filme.value.splice(index,1)
};

const filmesOrdenados = computed(() => {
  return [...filme.value].sort((a, b) => b.nota - a.nota)
})
/**
 * AI Assistance Notice
 * Esta função foi desenvolvida com auxílio de IA (ChatGPT).
 * O código foi revisado e compreendido pelo autor.
 */
function corNota(nota){
  if (nota >= 8) return "bg-green-500"
  if (nota >= 5) return "bg-yellow-500"
  return "bg-red-500"
};
</script>

<template >
  <div class="m-auto min-h-screen   bg-[#454A50] " >
    <h1 class="text-3xl font-bold p-1 mb-2 mx-auto text-center text-white">
      Avaliação de Filme
    </h1>
    
  <div 
  >      
    <div
   class=" mt-4 mx-auto ml-[35vw] mb-4 "
   >
    <input 
      v-model="novosFilmes"
      placeholder="Digite o filme"
      class="border p-2 mr-2 text-black rounded-[7px]"
    />
    <input 
     type="number"
     v-model.number="novasNotas"
     min="0"
     max="10"
     step="1"
     placeholder="Digite a nota"
     class="border p-2 mr-2 text-black rounded-[7px]"
    >
 
    <button 
      @click="adicionar"
      class="bg-black text-white p-2 rounded"
    >
      Adicionar
    </button>
    
    </div>
    <div class="w-[100vw] h-[1px]  bg-black " ></div>
      <ul class="mt-3 w-fit ml-[23vw] bg-white rounded-md">
        <li 
          v-for="(item,index) in filmesOrdenados"
          :key="index"
          class="flex items-center justify-between p-2  flex-1 gap-5" 
        >
          <div 
          class="flex"
          > 
            <div 
            class="flex justify-center items-center w-[18vw] h-[4vh] bg-[#3df7db] rounded-l-md"
            >
            {{ item.nome }}
            </div>
            <div 
            class="flex justify-center items-center w-[6vw] h-[4vh]  rounded-r-md"
            :class="corNota(item.nota)"
            > 
            {{ item.nota }}
            </div>  
          </div>
          <button 
          @click="remover(index)"
          class="bg-black text-white p-1 rounded"
          >
          Remover
          </button>
        </li>
      </ul>  
    </div>
  </div>  
</template>
