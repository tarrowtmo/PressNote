# 虚拟滚动

```vue
<template>
	<div class="wrapper" ref="wrapper" @scroll="wrapperScroll($event)">
		<div class="wrapper-scroll" :style="{ height: containerHeight + 'px' }" style="position: relative">
			<div :style="{ transform: `translateY(${scrollTopWrapper}px)` }" style="position: absolute; width: 100%">
				<div v-for="(item, key) in showItem" :key="key" style="height: 40px; line-height: 40px">
					{{ item }}
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, computed, nextTick } from 'vue';
//设置10W条模拟数据
const count = ref(100000);
let arr = ref([]);
for (let index = 0; index < count.value; index++) {
	arr.value.push(index);
}

//容器真实高度
let containerHeight = ref(arr.value.length * 40);
//当前状态的索引
let startKey = ref(0);
//视窗内应该显示的 DOM 数量
let showItemNum = ref(0);
//容器dom节点
const wrapper = ref(null);
//容器高度
let wrapperHeight = ref(0);
nextTick(() => {
	//获取容器高度
	wrapperHeight.value = wrapper.value.clientHeight;
	//运算出应该显示的 DOM 数量
	showItemNum.value = Math.ceil(wrapperHeight.value / 40);
});
//片段容器偏移量
let scrollTopWrapper = ref(0);
//滚动事件
const wrapperScroll = (e) => {
	//计算当前状态的索引
	let tempNum = Math.floor(e.target.scrollTop / 40);

	//当前状态的索引发生变化才触发视图层刷新
	if (tempNum !== startKey.value) {
		startKey.value = tempNum;
		scrollTopWrapper.value = e.target.scrollTop;
	}
};
//对数据进行切片处理方法
const showItem = computed(() => {
	return [...arr.value.slice(startKey.value, showItemNum.value + startKey.value + 3)];
});
</script>
<style>
.wrapper {
	position: relative;
	width: 200px;
	height: 200px;
	overflow: auto;
	border: 1px solid #ccc;
}
</style>

```
