<template>
  <div class="index">
    <section class="l">
      <ul class="l-ul" @dragstart="dragstart" @dragend="dragend">
        <li
          class="l-ul-item"
          v-for="(val, key, index) in typeList"
          :key="index"
          draggable
        >
          <span :class="val.icon" class="icon"></span>
          <p class="text">{{ val.name }}</p>
        </li>
      </ul>
    </section>
    <section class="c">
      <div class="c-show">123</div>
    </section>
    <section class="r">3</section>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      typeList: {
        banner: {
          name: "轮播图",
          icon: "el-icon-picture-outline",
          com: "banner"
        },
        product: {
          name: "商品详情",
          icon: "el-icon-goods",
          com: "product"
        },
        image: {
          name: "图片",
          icon: "el-icon-picture",
          com: "image"
        }
      }
    };
  },
  components: {},
  methods: {
    dragstart() {
      console.log("start");
    },
    dragend() {
      console.log("end");
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  height: 100%;
  .l,
  .r {
    flex: 0 0 400px;
    height: 100%;
  }
  .l {
    .l-ul {
      margin: 30px 45px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      color: $grey;
      .l-ul-item {
        width: 80px;
        height: 80px;
        text-align: center;
        transition: all 0.3s;
        .icon {
          font-size: 46px;
          display: inline-block;
          margin-bottom: 10px;
        }
      }
      .l-ul-item:hover {
        cursor: pointer;
        background-color: $deepgrey;
        border-radius: 4px;
      }
    }
  }
  .c {
    margin: 10px 0;
    flex: 1 0;
    height: 95%;
    .c-show {
      width: 100%;
      height: 100%;
      background-color: wheat;
    }
  }
}
</style>
