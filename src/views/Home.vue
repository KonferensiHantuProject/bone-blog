<template>
  <div class="home">
    Home

    <p>Nama saya adalah {{ name }} umurku {{ age }}</p>
    <button @click="handleClick">Klik</button>
    <button @click="age++">Tambah 1 Umur</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  setup() {
    console.log('set up')

    // const p = ref(null)

    const name = ref('Mario')
    const age = ref(45)

    const handleClick = () => {
      name.value = 'Luigi'
      age.value = 35
    }

    return {
      name,
      age,
      handleClick,
    }
  }
}
</script>
