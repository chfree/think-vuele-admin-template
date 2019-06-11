export default {
  data() {
    return {
      providers: {
        eduProviders: [],
        sexProviders: []
      }

    }
  },
  created() {
    this.initEduProvider()
    this.initSexProvider()
  },
  methods: {
    initEduProvider() {
      const initEduProviders = [{text: '博士', value: '01', id: '01'},
        {text: '硕士', value: '02', id: '02'},
        {text: '本科', value: '03', id: '03'},
        {text: '专科', value: '04', id: '04'},
        {text: '高中', value: '05', id: '05'}]
      this.providers.eduProviders = initEduProviders
    },
    initSexProvider() {
      const initSexProviders = [{id: '1', text: '男', value: '01'}, {id: '2', text: '女', value: '02'}]
      this.providers.sexProviders = initSexProviders
    }

  }
}
