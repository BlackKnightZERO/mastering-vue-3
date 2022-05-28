import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import TemplateSyntax from '../views/Docs/TemplateSyntax.vue'
import SuspenseCombiningWithOtherComponents from '../views/Docs/SuspenseCombiningWithOtherComponents.vue'

//yt
import Reactivity1 from '../views/YT/CustomStore/Reactivity1.vue'
import Reactivity2 from '../views/YT/CustomStore/Reactivity2.vue'
import SuspenseTable from '../views/YT/Suspense/SuspenseTable'
import SettingsProvider from '../views/YT/ProvideInject/SettingsProvider'
import SlotContainer from '../views/YT/Slots/SlotContainer'
import CarouselContainer from '../views/YT/Carousel/CarouselContainer'
import SkeletonLoaderContainer from '../views/YT/SkeletonLoader/SkeletonLoaderContainer'
import DynamicComponentContainer from '../views/YT/DynamicComponent/DynamicComponentContainer'

//vueuse
import ListUseFetch1 from '../views/VueUse/useFetch1/ListUseFetch1'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // Docs
  {
    path: '/template-syntax',
    name: 'TemplateSyntax',
    component: TemplateSyntax
  },
  {
    path: '/suspense-combining-with-other-components',
    name: 'SuspenseCombiningWithOtherComponents',
    component: SuspenseCombiningWithOtherComponents
  },

  // YT
  {
    path: '/yt/reactivity-1',
    name: 'Reactivity1',
    component: Reactivity1
  },
  {
    path: '/yt/reactivity-2',
    name: 'Reactivity2',
    component: Reactivity2
  },
  {
    path: '/yt/suspense-table',
    name: 'SuspenseTable',
    component: SuspenseTable
  },
  {
    path: '/yt/provide-inject',
    name: 'SettingsProvider',
    component: SettingsProvider
  },
  {
    path: '/yt/slots-image',
    name: 'SlotContainer',
    component: SlotContainer
  },
  {
    path: '/yt/carousel',
    name: 'CarouselContainer',
    component: CarouselContainer
  },
  {
    path: '/yt/skeleton-loader',
    name: 'SkeletonLoaderContainer',
    component: SkeletonLoaderContainer
  },
  {
    path: '/yt/dynamic-components',
    name: 'DynamicComponentContainer',
    component: DynamicComponentContainer
  },

  // VueUse
  {
    path: '/vue-use/list-use-fetch-1',
    name: 'ListUseFetch1',
    component: ListUseFetch1
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
