import ListForm from '@/components/ListForm'
import ListOptionBtn from '@/components/ListOptionBtn'
export default {
  components: {
    ListForm,
    ListOptionBtn
  },
  data() {
    return {
      items: [], // 数据列表
      selectionList: [], // 选择的数据项
      pageSize: 10, // 每页显示的数据条数
      currentPage: 1, // 当前所在的页数
      totalSize: 0, // 总共有多少条数据
      searchKeyword: '', // 搜索的关键字
      modelName: this.$route.path.match(/\/(\w+?)\//i)[1]
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(
        `rest/${this.modelName}?page=${this.currentPage}&size=${
          this.pageSize
        }${this.searchKeyword ? '&search=' + this.searchKeyword : ''}`
      )
      this.items = res.data.items
      this.totalSize = res.data.totalCount
    },
    /* 删除数据 */
    async remove(row) {
      this.$confirm(`是否确定要删除"${row.name}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`rest/${this.modelName}/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch() // 重新拉取数据
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    /* 批量删除数据 */
    async removeMany() {
      if (this.selectionList.length) {
        this.$confirm(
          `是否确定要删除已选中的${this.selectionList.length}条数据?`,
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        )
          .then(async () => {
            await this.$http.delete(`rest/${this.modelName}/`, {
              data: this.selectionList
            })
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.fetch() // 重新拉取数据
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      } else {
        this.$message({
          message: '请选择要删除的数据',
          type: 'warning'
        })
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(this.currentPage)
      this.fetch()
    },
    handleSearchedData(searchedData) {
      this.items = searchedData
    },
    /* 选择的数据项发生变化 */
    handleSelectionChange(val) {
      this.selectionList = val
    }
  },
  created() {
    this.fetch()
  }
}
