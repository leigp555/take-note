<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { articleStore } from '@/store/article';

const text = ref<HTMLTextAreaElement>();
onMounted(() => {
  text.value = document.getElementById('article-text') as HTMLTextAreaElement;
});
const store_article = articleStore();
const { body } = storeToRefs(store_article);
function insertAtCursor(
  contentEl: HTMLTextAreaElement,
  leftValue: string,
  rightValue: string
) {
  const startPos = contentEl.selectionStart;
  const endPos = contentEl.selectionEnd;
  if (contentEl.selectionStart) {
    const text = `${
      body.value.substring(0, startPos) +
      leftValue +
      body.value.substring(startPos, endPos)
    }${rightValue}${body.value.substring(endPos, body.value.length)}`;
    contentEl.value = text;
    store_article.$patch((state) => {
      state.body = text;
    });
    store_article.saveLocal();
  } else {
    const text = leftValue + contentEl.value + rightValue;
    contentEl.value = text;
    store_article.$patch((state) => {
      state.body = text;
    });
    store_article.saveLocal();
  }
}
const insert = (type: string) => {
  if (type === 'code') {
    insertAtCursor(text.value!, '```', '```');
  } else if (type === 'img') {
    insertAtCursor(text.value!, '![在这里插入图片描述]', '(图片链接)');
  } else if (type === 'weight') {
    insertAtCursor(text.value!, '**', '**');
  } else if (type === 'scale') {
    insertAtCursor(text.value!, '*', '*');
  } else if (type === 'delete') {
    insertAtCursor(text.value!, '~~', '~~');
  } else if (type === 'unOrderList') {
    insertAtCursor(text.value!, ' - List item', '');
  } else if (type === 'orderedList') {
    insertAtCursor(text.value!, ' 1. List item', '');
  } else if (type === 'link') {
    insertAtCursor(text.value!, '[链接描述]', '(链接地址)');
  }
};
</script>

<template>
  <div class="action">
    <a-button type="primary" @click="insert('code')">代码块</a-button>
    <a-button type="primary" @click="insert('img')">图片</a-button>
    <a-button type="primary" @click="insert('weight')">加粗</a-button>
    <a-button type="primary" @click="insert('scale')">斜体</a-button>
    <a-button type="primary" @click="insert('delete')">删除线</a-button>
    <a-button type="primary" @click="insert('unOrderList')">无序列表</a-button>
    <a-button type="primary" @click="insert('orderedList')">有序列表</a-button>
    <a-button type="primary" @click="insert('link')">超链接</a-button>
  </div>
</template>

<style lang="scss" scoped>
.action {
  padding: 5px 10px;
  display: flex;
  gap: 10px;
}
</style>
