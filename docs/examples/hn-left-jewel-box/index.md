<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    details > summary:first-of-type {
        font-size: 16px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# hn-left-jewel-box 组件

## 基础用法

使用 title来指定折叠面板的标题。

<div class="example">
    <div>
      <hn-info-collapse title="基础信息" style="width: 100%">
        <template #content>
          <div>内容区域</div>
        </template>
      </hn-info-collapse>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <hn-info-collapse title="基础信息" style="width: 100%">
      <template #content>
        <div>内容区域</div>
      </template>
    </hn-info-collapse>
  </div>
</template>
<script lang="ts" setup>

</script>
<style>

</style>
```

</details>




## 内容区域

使用 #content 来指定折叠面板的内容区域。

<div class="example">
    <div>
      <hn-info-collapse title="基础信息" style="width: 100%">
        <template #content>
          <div>内容区域</div>
        </template>
      </hn-info-collapse>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <hn-info-collapse title="基础信息" style="width: 100%">
      <template #content>
        <div>内容区域</div>
      </template>
    </hn-info-collapse>
  </div>
</template>
<script lang="ts" setup>

</script>
<style>

</style>
```

</details>
