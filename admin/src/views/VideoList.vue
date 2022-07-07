<template>
  <div>
    <h1>视频列表</h1>
    <list-form
      modelName="videoes"
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
      <el-table-column prop="category.name" label="所属分类" />
      <el-table-column prop="title" label="视频标题" />
      <el-table-column prop="url" label="链接" />
      <el-table-column prop="fre" label="点击率" />
      <el-table-column prop="date" label="发布日期" />
      <el-table-column prop="cover" label="封面">
        <template slot-scope="scope">
          <img :src="scope.row.cover" style="height: 3rem;" alt />
        </template>
      </el-table-column>
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
  name: 'VideoList',
  mixins: [listPageMixin]
}
</script>
