# 快速开始

本节将介绍如何在项目中使用 CaoKunTSVue3UI

## 用法

```
// 在main.ts中导入 使用

import CaokunTsvue3UI from 'caokun-tsvue3-ui';
import '../node_modules/caokun-tsvue3-ui/lib/style.css';
const app = createApp(App);

app.use(CaokunTsvue3UI).mount('#app');
```
## 导入后再页面中使用
```
<template>
    <hn-info-collapse title="组件hn-info-collapse" style="width: 100%">
      <template #content>
        <div>hn-info-collapse 的内容区域</div>
      </template>
    </hn-info-collapse>
    <hn-left-jewel-box title="组件hn-left-jewel-box" style="width: 100%">
      <template #content>
        <div>hn-left-jewel-box 的内容区域</div>
      </template>
  </hn-left-jewel-box>
</template>
```