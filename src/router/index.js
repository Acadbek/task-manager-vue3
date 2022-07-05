import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addNewTask from '../views/AddNewTask'
import EditTask from '../views/EditTask'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'addNewTask',
    component: addNewTask
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditTask,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
