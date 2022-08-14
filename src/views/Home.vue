<template>
  <div class="home">
    <h1>Home</h1>

    <input type="text" v-model="search">
    <p>Pencarian - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">Stop Watching</button>
    <!-- <p>Nama saya adalah {{ boneOne.name }} umurku {{ boneOne.age }}</p>
    <button @click="updateBoneOne">Klik</button>
    <button @click="boneOne.age++">Tambah 1 Umur</button>
    <input type="text" v-model="boneOne.name">

    <h2>Reactive</h2>
    <p>{{ boneTwo.name }} - {{ boneTwo.age }}</p>
    <button @click="updateBoneTwo">Update Bone Two</button> -->
  </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',
  setup() {

    // const boneOne = ref({ name: "tono", age: 51})
    // const boneTwo = reactive({ name: "toni", age: 21})
    // const p = ref(null)

    // const name = ref('Mario')
    // const age = ref(45)

    // const handleClick = () => {
    //   name.value = 'Luigi'
    //   age.value = 35
    // }

    // const updateBoneOne = () => {
    //   boneOne.value.name = 'Luigi'
    //   boneOne.value.age = 35
    // }

    // const updateBoneTwo = () => {
    //   boneTwo.name = 'Laigi'
    //   boneTwo.age = 45
    // }
    const search = ref('')
    const names = ref(['mario', 'bobi', 'boni', 'luigi', 'browser', 'apel', 'pisng', 'katak'])

    // Ketika terjadi perubahan
    const stopWatch = watch(search, () => {
      console.log('watch jalan')
    })

    // Pas inisial jalan
    const stopWatchEffect = watchEffect(() => {
      console.log('watch effect jalan', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    return {
      names, 
      search,
      matchingNames,
      handleClick
    }
  }
}
</script>
