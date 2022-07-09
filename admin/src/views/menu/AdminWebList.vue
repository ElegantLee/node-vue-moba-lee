<template>
  <div>
    <h1>后台页面列表</h1>
    <list-form
      modelName="admin_webs"
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
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="path" label="路由地址" />
      <el-table-column prop="menu.name" label="对应的菜单" />
      <el-table-column prop="rights" label="操作权限">
        <template v-slot="{row: {rights}}">
          <el-tag
            v-for="(item, index) of rights"
            :key="'rtag' + index"
            :type="methodType[item]"
          >{{item}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" />
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
  // eslint-disable-next-line vue/name-property-casing
  name: 'AdminWebList',
  mixins: [listPageMixin],
  data() {
    return {
      methodType: {
        POST: 'success',
        PUT: 'warning',
        DELETE: 'danger'
      }
    }
  }
}
</script>
