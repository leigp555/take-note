<template>
  <div class="wrap-list" v-if="haveContent">
    <section>
      <a-list item-layout="horizontal" :data-source="articleDate">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="item.body">
              <template #title>
                <router-link :to="`/cat/${item.identity_number}`">{{
                  item.title
                }}</router-link>
              </template>
              <template #avatar>
                <a-avatar :src="avatar_url" />
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
  <div v-else>
    <SearchNull />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import SearchNull from '@/component/SearchNull.vue';
import { articleStore } from '@/store/article';
import { userStore } from '@/store/user';
import { Article } from '@/common/type';

const current = ref(1);
const store_article = articleStore();
const store_user = userStore();
const { avatar_url } = storeToRefs(store_user);
const haveContent = ref(false);

const props = defineProps<{
  kind: 'search' | 'allArticle' | 'favorite' | 'deleted';
}>();

const { kind } = toRefs(props);
const articleDate = ref<Article[]>();

// 查找所有文章
if (kind.value === 'allArticle') {
  onMounted(() => {
    store_article.getAllArticle({ offset: 0, limit: 5 }).then((res) => {
      articleDate.value = res.articles;
      haveContent.value = true;
    });
  });
}

// 查询文章
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
