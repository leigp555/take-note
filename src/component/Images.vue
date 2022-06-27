<template>
  <div class="img_wrap">
    <div>
      <a-list
        class="inner"
        item-layout="vertical"
        size="large"
        :pagination="pagination()"
        :data-source="listData"
      >
        <template #renderItem="{ item }">
          <a-list-item :key="item.identity_number">
            <a-list-item-meta>
              <template #title>
                <router-link :to="`/cat/${item.identity_number}`">
                  <img :src="item.path" alt="" style="max-width: 50vw" />
                </router-link>
              </template>
            </a-list-item-meta>
            {{ item.body }}
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { canvasStore } from '@/store/canvasImg';

interface Img {
  owner: string;
  path: string;
  identity_number: string;
  createdAt: string;
  updatedAt: string;
}
const listData = ref<Img[]>([]);
const store_canvas = canvasStore();
store_canvas.getAllImg({ offset: 0, limit: 5 }).then((res) => {
  if (res) {
    listData.value = res.images;
  }
});
const total_article = ref<number>(0);

const pagination = () => {
  return {
    onChange: (page: number) => {
      store_canvas
        .getAllImg({ offset: page === 1 ? 0 : (page - 1) * 3, limit: 3 })
        .then((res) => {
          if (res) {
            listData.value = res.images;
          }
        });
    },
    pageSize: 3,
    hideOnSinglePage: true,
    total: total_article.value,
    showQuickJumper: true
  };
};
</script>

<style lang="scss">
.ant-pagination {
  display: flex;
  justify-content: center;
}
.inner {
  border: 2px solid red;
  overflow-y: scroll;
}
</style>
