<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import InputTextarea from '@/component/InputTextarea.vue';
import OutputTextarea from '@/component/OutputTextarea.vue';
import ArticleAction from '@/component/ArticleAction.vue';

import { articleStore } from '@/store/article';

const store_article = articleStore();
const router = useRouter();

store_article.getLastArticle();
const { title } = storeToRefs(store_article);

const articleTitle = ref<string>('');
// 初始化时获取初始的标题
onMounted(() => {
  articleTitle.value = title.value;
});
// 保存标题
const changeTitle = () => {
  store_article.$patch((state) => {
    state.title = articleTitle.value;
  });
  store_article.saveLocal();
};
// 保存为草稿
const saveDraft = () => {
  store_article.createArticle({ isPublic: false, state: 'draft' }).then(
    () => {
      router.push('/success');
    },
    () => {
      router.push('/fail');
    }
  );
};
// 正式发布为文章
const publish = () => {
  store_article.createArticle({ isPublic: false, state: 'normal' }).then(
    (res) => {
      router.push(`/success/${res.identity_number}`);
    },
    () => {
      router.push('/fail');
    }
  );
};
</script>

<template>
  <div class="wrap">
    <nav class="title-wrap">
      文章标题
      <a-input
        class="title"
        v-model:value="articleTitle"
        show-count
        :maxlength="100"
        @change="changeTitle"
        placeholder="请输入标题"
      />
      <a-button type="primary" @click="saveDraft">保存为草稿</a-button>
      <a-button type="primary" @click="publish">发布文章</a-button>
    </nav>
    <section>
      <ArticleAction />
    </section>
    <main class="article-wrap">
      <section class="input-textarea">
        <InputTextarea />
      </section>
      <section class="output-textarea">
        <OutputTextarea />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$wrapHeight: 100%;
$articleTitleMargin: 10px;
$articleTitleGap: 10px;
.wrap {
  height: $wrapHeight;
  display: flex;
  flex-direction: column;
  .title-wrap {
    margin: $articleTitleMargin;
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    gap: $articleTitleGap;
    .title {
      flex-shrink: 1;
    }
  }
  .article-wrap {
    flex-grow: 1;
    display: flex;
    width: 100%;
    .input-textarea {
      flex-grow: 0;
      flex-shrink: 1;
      width: 50%;
    }
    .output-textarea {
      width: 50%;
      flex-grow: 0;
      flex-shrink: 1;
    }
  }
}
</style>
