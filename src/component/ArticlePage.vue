<template>
  <div class="wrap-list">
    <section>
      <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <template #title>
                <a href="https://www.antdv.com/">{{ item.title }}</a>
              </template>
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </section>
    <section class="article-nav">
      <a-pagination v-model:current="current" :total="100" show-less-items />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface DataItem {
  title: string;
}
const current = ref(1);

// 一页只展示5个
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  },
  {
    title: 'Ant Design Title 4'
  }
];
</script>

<style lang="scss" scoped>
$navTop: 50px;
.wrap-list {
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .article-nav {
    display: flex;
    justify-content: center;
    margin-top: $navTop;
  }
}
</style>
