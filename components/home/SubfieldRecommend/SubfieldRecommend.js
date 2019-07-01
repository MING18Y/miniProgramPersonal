// components/home/SubfieldRecommend/SubfieldRecommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subfieldData: { type: Object, value: {} }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
  // ...

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageError: function(e) {
      console.log('sss handleImageError')
      // let errorImgIndex= e.target.dataset.errorimg //获取循环的下标
      // var imgObject="carlistData["+errorImgIndex+"].img" //carlistData为数据源，对象数组
      // var errorImg={}
      // errorImg[imgObject]="https://w.chesudi.com/Public/web/img/onerrorcar.png" //我们构建一个对象
  
      this.triggerEvent('handleImageError')
  
    }
  },

  
})
