// components/home/BrandRecommend/BrandRecommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { type: String, value: '' },
  },

  /**
   * 组件的初始数据
   */
  data: {
    brandArr: [
      {kw: '义获嘉', imgSrc: '../../../assets/image/BrandRecommend/brandYihuojia.png'},
      {kw: '3M', imgSrc: '../../../assets/image/BrandRecommend/brand3M.png'},
      {kw: 'GC', imgSrc: '../../../assets/image/BrandRecommend/brandGC.png'},
      {kw: 'DMG', imgSrc: '../../../assets/image/BrandRecommend/brandDMG.png'},
      {kw: 'MANI', imgSrc: '../../../assets/image/BrandRecommend/brandMANI.png'},
      {kw: '麦瑞斯', imgSrc: '../../../assets/image/BrandRecommend/brandMetrex.png'},
      {kw: 'CURAPROX', imgSrc: '../../../assets/image/BrandRecommend/brandCURAPROX.png'},
      {kw: '康保利', imgSrc: '../../../assets/image/BrandRecommend/brandCranberry.png'},
      {kw: 'VOCO', imgSrc: '../../../assets/image/BrandRecommend/brandVOCO.png'},
      {kw: '麦迪康', imgSrc: '../../../assets/image/BrandRecommend/brandMedicom.png'},
      {kw: '沪鸽', imgSrc: '../../../assets/image/BrandRecommend/brandHUGE.png'},
      {kw: '松风', imgSrc: '../../../assets/image/BrandRecommend/brandSongfeng.png'},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
