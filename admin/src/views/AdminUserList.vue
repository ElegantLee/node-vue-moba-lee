<template>
  <div>
    <h1>管理员列表</h1>
    <list-form
      modelName="admin_users"
      :currentPage="currentPage"
      :size="pageSize"
    :selectionList="selectionList"
      :removeMany="removeMany"
      @keywordChange="searchKeyword = $event"
      @searchData="handleSearchedData"
    ></list-form>
    <el-table :data="items" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="_id" label="ID" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="role.name" label="角色" />
      <el-table-column prop="role.description" label="描述" />
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <ListOptionBtn
            :modelName="modelName"
            :row="scope.row"
            :removeOne="remove"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize"
    ></el-pagination>
  </div>
</template>

<script>
import listPageMixin from '@/mixins/listPageMixin.js'
export default {
  name: 'AdminUserList',
  mixins: [listPageMixin]
}
</script>
