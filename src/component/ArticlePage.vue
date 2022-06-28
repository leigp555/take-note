<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination()"
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
import { storeToRefs } from 'pinia';
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
  kind: 'allArticle' | 'search' | 'favorite' | 'deleted' | 'draft';
  keyword?: string;
}>();
const { num } = storeToRefs(store_article);
const { kind, keyword } = toRefs(props);
const total_article = ref<number>(0);

// 显示全部文章
if (kind.value === 'allArticle') {
  total_article.value = num.value.allArticle;
  onMounted(() => {
    store_article.getAllArticle({ offset: 0, limit: 3 }).then((res) => {
      listData.value = res.articles;
    });
  });
}
// 显示搜索文章结果
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
// 显示收藏夹文章
if (kind.value === 'favorite') {
  total_article.value = num.value.favorite;
  onMounted(() => {
    store_article.getFavoriteArticle({ offset: 0, limit: 3 }).then((res) => {
      listData.value = res.articles;
    });
  });
}
// 显示草稿
if (kind.value === 'draft') {
  total_article.value = num.value.draft;
  onMounted(() => {
    store_article.getDraftArticle({ offset: 0, limit: 3 }).then((res) => {
      listData.value = res.articles;
    });
  });
}
// 显示已经删除的文章
if (kind.value === 'deleted') {
  total_article.value = num.value.deleted;
  onMounted(() => {
    store_article.getDeletedArticle({ offset: 0, limit: 3 }).then((res) => {
      listData.value = res.articles;
    });
  });
}

const pagination = () => {
  return {
    onChange: (page: number) => {
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
      if (kind.value === 'draft') {
        store_article
          .getDraftArticle({ offset: (page === 1 ? 0 : page - 1) * 3, limit: 3 })
          .then((res) => {
            listData.value = res.articles;
          });
      }
      if (kind.value === 'deleted') {
        store_article
          .getDeletedArticle({ offset: (page === 1 ? 0 : page - 1) * 3, limit: 3 })
          .then((res) => {
            listData.value = res.articles;
          });
      }
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
</style>
