<template>
  <!-- 数组记得加 -->
  <div>
    <el-table
      :data="goodsList"
      border
      row-key="id"
      default-expand-all
      style="width: 100%"
    >
      <el-table-column prop="id" label="商品编号" width="160">
      </el-table-column>
      <el-table-column prop="specsname" label="商品名称" width="160">
      </el-table-column>
      <el-table-column prop="specsname" label="商品价格" width="160">
      </el-table-column>
      <el-table-column prop="specsname" label="市场价格" width="160">
      </el-table-column>
      <el-table-column prop="img" label="图片" width="300">
        <template slot-scope="item">
          <img class="img" :src="$imgUrl + item.row.img" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="是否新品" width="60">
        <template slot-scope="item">
          <el-tag type="success" v-if="item.row.status == 1">是</el-tag>
          <el-tag type="danger" v-else>否</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="是否热卖" width="60">
        <template slot-scope="item">
          <el-tag type="success" v-if="item.row.status == 1">是</el-tag>
          <el-tag type="danger" v-else>否</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="60">
        <template slot-scope="item">
          <el-tag type="success" v-if="item.row.status == 1">是</el-tag>
          <el-tag type="danger" v-else>否</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="primary" size="small" @click="edit(item.row.id)"
              >编辑</el-button
            >
            <el-button type="danger" size="small" @click="del(item.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="params.size"
      :current-page="params.page"
      ref="pagination"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { delSpecs } from "../../../util/axios";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      params: {
        size: 2,
        page: 1,
      },
    };
  },
  mounted() {
    this.getSpecsListAction(this.params);
    this.getSpecsTotalAction();
  },
  computed: {
    ...mapGetters({
      specsList: "specs/getSpecsList",
      total: "specs/getSpecsTotal",
    }),
  },
  methods: {
    ...mapActions({
      getSpecsListAction: "specs/getSpecsListAction",
      getSpecsTotalAction: "specs/getSpecsTotalAction",
    }),

    // 切换
    currentChange(page) {
      this.params.page = page;
      this.getSpecsListAction(this.params);
    },
    // 编辑
    edit(id) {
      this.$emit("edit", id);
    },
    // 删除
    del(id) {
      this.$confirm("确定要删除这条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("---------------");
          delSpecs({ id }).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              // 刷新数据 删除后这页没有数据将返回上一页
              if (this.params.page == 1) {
                this.params.page = 1;
              } else {
                if (this.total % this.params.size == 1) {
                  this.params.page--;
                }
              }
              this.getSpecsListAction(this.params);
              this.getSpecsTotalAction();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消",
          });
        });
    },
  },
};
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 10px;
}
.el-tag {
  margin-left: 5px;
}
</style>