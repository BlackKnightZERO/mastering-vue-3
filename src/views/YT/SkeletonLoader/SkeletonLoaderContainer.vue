<template>
  <div>
    <h2>Async Component, Suspense, Skeleton Loader</h2>
    <br>
    <Suspense>
        <template #default>
            <ProfileCard />
        </template>
        <template #fallback>
            <ProfileCardSkeleton />
        </template>
    </Suspense>
    <br>
    <ProfileCardSkeleton />
  </div>
</template>

<script setup>
import ProfileCard from "./ProfileCard.vue";
import ProfileCardSkeleton from "./ProfileCardSkeleton.vue";
</script>

<style>

</style>