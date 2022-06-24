<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import InputTextarea from '@/component/InputTextarea.vue';
import OutputTextarea from '@/component/OutputTextarea.vue';
import ArticleAction from '@/component/ArticleAction.vue';
import { useCreateArticle } from '@/store/createArticle';
import { useGlobalStore } from '@/store/global';

const store = useCreateArticle();
const globalStore = useGlobalStore();
const router = useRouter();
const { initTitle } = storeToRefs(store);
const title = ref<string>(initTitle.value);
// 初始化时获取初始的标题,以及更新用户的邮箱和用户名
onMounted(() => {
  title.value = initTitle.value;
  globalStore.getUserInfo().then();
  globalStore.getUserAvatar().then();
});
// 保存标题
const changeTitle = () => {
  store.$patch((state) => {
    state.initTitle = title.value;
  });
  store.saveLocal();
};
// 保存为草稿
const saveDraft = () => {
  store.saveDraft().then(
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
  store.publish().then(
    () => {
      router.push('/success');
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
        v-model:value="title"
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
