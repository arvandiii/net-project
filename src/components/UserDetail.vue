<template>
  <div>
    <h1 class="title">we are in User Detail component</h1>
    <p>User loaded with id: {{ $route.params.id }}</p>
    <router-link tag="button" :to="'/user/'+$route.params.id+'/edit'" class="button">Edit</router-link>
  </div>
</template>