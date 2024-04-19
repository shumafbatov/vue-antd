<template>
  <div style="margin: 0px auto; max-width: 1560px;">
    <a-card
        title="Order details"
    >
      <template #extra>
        <a-input
            placeholder="Search"
            @change="onSearchDebounced"
        >
          <template #suffix>
            <SearchOutlined style="color: rgba(0, 0, 0, 0.45)"/>
          </template>
        </a-input>
      </template>

      <a-table
          :dataSource="gitFilteredOrders(searchValue)"
          :columns="columns"
      />
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { Card as ACard, Table as ATable  } from 'ant-design-vue'
import { onMounted, ref } from "vue"
import { columns } from './constants'
import { Input as AInput   } from 'ant-design-vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'
import { debounce } from '@/utils'

const orderStore = useOrderStore()
const { getOrders, gitFilteredOrders } = storeToRefs(orderStore)

const searchValue = ref('')

onMounted(async () => {
  await orderStore.fetchOrders()
})

const onSearch = (event: InputEvent)=>{
  const { value } = event.target as { value: string }
  searchValue.value = value
  console.warn( `Searching for value: '${value}'` );
}

const onSearchDebounced = debounce(onSearch, 1000)
</script>
