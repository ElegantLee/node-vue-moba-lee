<template>
  <div>
    <h1>铭文列表</h1>
    <el-table :data="runes">
      <el-table-column
        prop="_id"
        label="ID"
      />
      <el-table-column
        prop="name"
        label="铭文名称"
      />
      <el-table-column
        prop="icon"
        label="图标"
      >
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height: 3rem;" alt="">
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/runes/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button
            type="danger"
            size="small"
            @click="remove(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      runes: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    /* 获取分类数据 */
    async fetch() {
      const res = await this.$http.get('rest/runes')
      this.runes = res.data
    },
    /* 删除分类数据 */
    async remove(row) {
      this.$confirm(`是否确定要删除铭文"${row.name}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        await this.$http.delete(`rest/runes/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch() // 重新拉取数据
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
