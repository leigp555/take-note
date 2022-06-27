<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <a-list-item-meta>
          <template #title>
            <router-link :to="`/cat/${item.identity_number}`">{{
              item.title
            }}</router-link>
          </template>
          <template #avatar><a-avatar :src="avatar_url" /></template>
        </a-list-item-meta>
        {{ item.body }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import { defineProps, toRefs, ref, onMounted, computed, watchEffect } from 'vue';
import { articleStore } from '@/store/article';
import { userStore } from '@/store/user';
import { Article } from '@/common/type';

const store_article = articleStore();
const store_user = userStore();
const listData = ref<Article[]>([]);
const avatar_url = computed(() => {
  return store_user.avatar_url;
});

const props = defineProps<{
  kind: 'allArticle' | 'search' | 'favorite';
  keyword?: string;
}>();
const { kind, keyword } = toRefs(props);

if (kind.value === 'allArticle') {
  onMounted(() => {
    store_article.getAllArticle({ offset: 0, limit: 3 }).then((res) => {
      listData.value = res.articles;
    });
  });
}
if (kind.value === 'search') {
  watchEffect(() => {
    if (keyword && keyword.value) {
      store_article
        .searchArticle({ keyword: keyword!.value, offset: 0, limit: 3 })
        .then((res) => {
          listData.value = res.articles;
        });
    }
  });
}

if (kind.value === 'favorite') {
  onMounted(() => {
    store_article.getAllArticle({ offset: 0, limit: 3 }).then((res) => {
      listData.value = res.articles;
    });
  });
}

const pagination = {
  onChange: (page: number) => {
    console.log(page);
    if (kind.value === 'allArticle') {
      store_article
        .getAllArticle({ offset: (page === 1 ? 0 : page - 1) * 3, limit: 3 })
        .then((res) => {
          listData.value = res.articles;
        });
    }
    if (kind.value === 'search') {
      if (keyword && keyword.value) {
        store_article
          .searchArticle({ keyword: keyword!.value, offset: 0, limit: 3 })
          .then((res) => {
            listData.value = res.articles;
          });
      }
    }
    if (kind.value === 'favorite') {
      store_article
        .getFavoriteArticle({ offset: (page === 1 ? 0 : page - 1) * 3, limit: 3 })
        .then((res) => {
          listData.value = res.articles;
        });
    }
  },
  pageSize: 3,
  hideOnSinglePage: true,
  total: 20,
  showQuickJumper: true
};
</script>

<style lang="scss">
.ant-pagination {
  display: flex;
  justify-content: center;
}
</style>
