<template>
  <div>
    <h1>Counter</h1>
    <br>
    <button class="button is-primary" @click="$store.state.counter++">Increment</button>
    <button class="button is-primary" @click="$store.state.counter--">Decrement</button>
  </div>
</template>
