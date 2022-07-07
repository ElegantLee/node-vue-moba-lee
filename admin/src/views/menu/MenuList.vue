<template>
  <div>
    <h1>菜单列表</h1>
    <list-form
      modelName="menus"
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
      <el-table-column prop="parent.name" label="上级" />
      <el-table-column prop="name" label="名称" />
      <el-table-column label="图标">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
          <span style="margin-left: 10px;">{{scope.row.icon}}</span>
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
  name: 'MenuList',
  mixins: [listPageMixin]
}
</script>
