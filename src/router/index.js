import { createRouter, createWebHistory } from 'vue-router'
import GroupsView from '@/views/GroupsView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentsView from '@/views/StudentsView.vue'
import AttendanceSheetView from '@/views/AttendanceSheetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/students/:groupId',
      name: 'students',
      component: StudentsView,
    },
    {
      path: '/attend',
      name: 'attend',
      component: AttendanceSheetView,
    },
    {
      path: '/create_attendance/:groupId',
      name: 'create-attend',
      component: AttendanceSheetView,
    }
  ],
})

export default router
