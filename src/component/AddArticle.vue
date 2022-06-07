<script lang="ts" setup>
import { ref } from 'vue';
import InputTextarea from '@/component/InputTextarea.vue';
import OutputTextarea from '@/component/OutputTextarea.vue';
import ArticleAction from '@/component/ArticleAction.vue';

const value1 = ref<string>('test value');
const scrollPosition = ref<number>(0);
const inputContent = ref<string>('');
</script>

<template>
  <div class="wrap">
    <nav class="title-wrap">
      文章标题
      <a-input class="title" v-model:value="value1" show-count :maxlength="100" />
      <a-button type="primary">保存为草稿</a-button>
      <a-button type="primary">发布文章</a-button>
    </nav>
    <section>
      <ArticleAction />
    </section>
    <main class="article-wrap">
      <section class="input-textarea">
        <InputTextarea
          v-model:scrollPosition="scrollPosition"
          v-model:inputContent="inputContent"
        />
      </section>
      <section class="output-textarea">
        <OutputTextarea :scrollPosition="scrollPosition" :inputContent="inputContent" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title-wrap {
    margin: 10px;
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
