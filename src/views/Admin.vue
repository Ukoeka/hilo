<template>
<div class="bars mb-3">
                <div :class="[this.display  > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
                <div :class="[this.display > 1 ? 'active-bar each-bar' : 'each-bar']"></div>
                <div :class="[this.display > 2 ? 'active-bar each-bar' : 'each-bar']"></div>
                <div :class="[this.display == 4 ? 'active-bar each-bar' : 'each-bar']"></div>
            </div>
</template>