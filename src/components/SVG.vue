
<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="aaa" width="900" height="675"
        viewBox="0 0 900 675" :style="{ fill: fillColor, stroke: strokeColor, 'stroke-width': strokeWidth }">
        <rect class="b" width="100%" height="100%" />

        <filter x="-0.05" y="-0.05" width="1.1" height="1.1" id="solid">
            <feFlood flood-color="#000000" />
            <feComposite in="SourceGraphic" operator="over" />
        </filter>

        <image width="100%" height="100%" :xlink:href="imageUrl" transform="matrix(1 0 0 1 0.5 0)">

        </image>
        <text transform="matrix(1 0 0 1 450 645)" class="text st0" xml:space="preserve" filter="url(#solid)" opacity="0">
            <tspan x="0" dy="0em">{{ text }}</tspan>
        </text>
        <text transform="matrix(1 0 0 1 450 645)" class="text st1" xml:space="preserve">
            <tspan x="0" dy="0em">{{ text }}</tspan>
        </text>
        <text transform="matrix(1 0 0 1 450 645)" class="text st2" xml:space="preserve">
            <tspan x="0" dy="0em">{{ text }}</tspan>
        </text>
    </svg>
</template>

<script setup>

const props = defineProps({
    imageUrl: {
        type: String,
    },
    text: {
        type: String,
    },
})
</script>

<style xmlns="http://www.w3.org/2000/svg" type="text/css">
.b {
    fill: rgba(0, 0, 0, 0);
}

.text {
    font-family: "微軟正黑體", "Microsoft JhengHei", "黑體-繁", "蘋果儷中黑", "sans-serif";
    font-size: 40px;
    text-anchor: middle;
    dominant-baseline: baseline;
}

.st0 {
    fill: rgba(0, 0, 0, 0);
}

.st1 {
    fill: #000000ff;
    stroke-width: 6px;
    stroke: #000000ff;
    stroke-linejoin: round;
}

.st2 {
    fill: #ffffffff;
}

.op {
    opacity: 0;
}
</style>