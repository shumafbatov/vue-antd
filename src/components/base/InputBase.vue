<template>
  <div>
    <a-input-search
        v-model:value="value"
        placeholder="Найти"
        @search="onSearch"
    />
  </div>
</template>
<script lang="ts" setup>
import { InputSearch as AInputSearch   } from 'ant-design-vue';
import { ref } from "vue";
const value = ref('ok')
const onSearch = (val: string) => {
  console.log({ val });
}
</script>
