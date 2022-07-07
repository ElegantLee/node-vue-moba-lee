<template>
  <div>
    <el-button
      v-permission="editBtnPermission"
      type="primary"
      size="small"
      @click="$router.push(`/${modelName}/edit/${row._id}`)"
    >编辑</el-button>
    <el-button
      v-permission="deleteBtnPermission"
      type="danger"
      size="small"
      @click="removeOne(row)"
    >删除</el-button>
  </div>
</template>

<script>
export default {
  name: 'ListOptionBtn',
  props: {
    modelName: {
      type: String,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    removeOne: {
      type: Function,
      required: true
    },
    editBtnHide: {
      type: Boolean,
      required: false
    },
    deleteBtnHide: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    editBtnPermission() {
      return this.editBtnHide ? { action: 'PUT' } : { action: 'PUT', effect: 'disabled' }
    },
    deleteBtnPermission() {
      return this.deleteBtnHide ? { action: 'DELETE' } : { action: 'DELETE', effect: 'disabled' }
    }
  }
}
</script>

<style>
</style>