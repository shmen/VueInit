<template>
<div class="animate-layer">
    <s class="clouds cloud-01"></s>
    <s class="clouds cloud-02"></s>
    <s class="clouds cloud-03"></s>
    <s class="clouds cloud-04"></s>
    <s class="clouds cloud-05"></s>
    <s class="clouds cloud-06"></s>
    <s class="balloon balloon-01"></s>
    <s class="balloon balloon-02"></s>
    <s class="bg"></s>
</div>
</template>
<script>
export default {
    name: 'animate-layer'
}
</script>
<style lang="scss" rel="stylesheet/scss">
.animate-layer {
    top: 50px;
    right: 0;
    left: 0;
    height: 500px;
    overflow: hidden;
    z-index: 0;
    background: url("../assets/images/background.png") #f0f0f0 repeat-x;
    position: absolute;
    .clouds {
        background-repeat: no-repeat;
        animation: flutter 10s linear infinite backwards;
        background-image: url("../assets/images/cloud.png");
        z-index: 0;
        position: absolute;
    }
    .balloon {
        background-image: url("../assets/images/balloon.png");
        background-repeat: no-repeat;
        animation: flutter 10s linear infinite,shake 20s ease infinite;
        animation-fill-mode: backwards;
        position: absolute;
    }
    .bg {
        display: block;
        width: 100%;
        min-width: 960px;
        height: 500px;
        background: url("../assets/images/mountain.png") repeat-x bottom center;
    }
    .cloud-01 {
        top: 10px;
        left: 6%;
        width: 229px;
        height: 57px;
        background-position: 0 0;
        animation-duration: 108s;
        animation-delay: -84.6s;
    }
    .cloud-02 {
        top: 18%;
        left: 88%;
        width: 116px;
        height: 32px;
        background-position: 0 -57px;
        animation-duration: 79.2s;
        animation-delay: -7.74s;
    }
    .cloud-03 {
        top: 32%;
        left: 1%;
        width: 120px;
        height: 38px;
        background-position: 0 -89px;
        animation-duration: 90s;
        animation-delay: -73.8s;
    }
    .cloud-04 {
        top: 45%;
        left: 92%;
        width: 157px;
        height: 46px;
        background-position: 0 -127px;
        animation-duration: 64.8s;
        animation-delay: -4.14s;
    }
    .cloud-05 {
        top: 56%;
        left: 3%;
        width: 230px;
        height: 48px;
        background-position: 0 -173px;
        animation-duration: 86.4s;
        animation-delay: -68.4s;
    }
    .cloud-06 {
        top: 70%;
        left: 80%;
        width: 148px;
        height: 47px;
        background-position: 0 -221px;
        animation-duration: 97.2s;
        animation-delay: -5.4s;
    }
    .balloon-01 {
        top: 12%;
        left: 20%;
        width: 57px;
        height: 77px;
        background-position: 0 -224px;
        animation-duration: 120s,20s;
        animation-delay: -78s;
    }
    .balloon-02 {
        top: 40%;
        left: 80%;
        width: 167px;
        height: 224px;
        background-position: 0 0;
        animation-duration: 80s,30s;
    }
}
@-webkit-keyframes flutter {
    0% {
        left: 100%;
    }
    100% {
        left: -20%;
    }
}
@keyframes flutter {
    0% {
        left: 100%;
    }
    100% {
        left: -20%;
    }
}
</style>
