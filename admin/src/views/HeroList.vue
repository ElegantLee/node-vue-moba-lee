<template>
  <div>
    <h1>英雄列表</h1>
    <list-form
      modelName="heroes"
      :currentPage="currentPage"
      :size="pageSize"
      :selectionList="selectionList"
      :removeMany="removeMany"
      @keywordChange="searchKeyword = $event"
      @searchData="handleSearchedData"
    ></list-form>
    <el-table :data="items">
      <el-table-column
        prop="_id"
        label="ID"
      />
      <el-table-column
        prop="name"
        label="英雄名称"
      />
      <el-table-column
        prop="title"
        label="称号"
      />
      <el-table-column
        prop="avatar"
        label="头像"
      >
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height: 3rem;" alt="">
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <ListOptionBtn :modelName="modelName" :row="scope.row" :removeOne="remove"/>
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
  name: 'HeroList',
  mixins: [listPageMixin]
}
</script>
