<template v-if="Component">
  <Transition mode="out-in">
      <KeepAlive>
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>

          <!-- loading state -->
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
</template>

<script>
import TestComponent from '../../components/TestComponent.vue'
export default {
    components: {
        'Component':TestComponent
    }
}
</script>

<style>

</style>