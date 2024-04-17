<template>
  <div style="margin: 0px auto; max-width: 1560px;">
    <a-card
        title="Пример тестового задания"
    >
      <template #extra>span</template>
      <a-table
          :dataSource="dataSource"
          :columns="columns"
      />
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { Card as ACard, Table as ATable  } from 'ant-design-vue';
import { ref } from "vue";
const dataSource = ref([
      {
        key: '1',
        name: 'Mike',
        budget: 32,
        status: 'true',
        responsible: 'John Doe',
        createDate: '2024',
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        budget: 42,
        status: 'true',
        responsible: 'John Doe',
        createDate: '2024',
        address: '10 Downing Street',
      },
    ])

    const columns = ref([
      {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Бюджет',
        dataIndex: 'budget',
        key: 'budget',
      },
      {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Ответственный',
        dataIndex: 'responsible',
        key: 'responsible',
      },
      {
        title: 'Дата создания',
        dataIndex: 'createDate',
        key: 'createDate',
      },
    ])
</script>
