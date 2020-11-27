<template>
  <el-dialog
    :title="addInfo.isadd ? '添加菜单' : '修改菜单'"
    :visible.sync="addInfo.isShow"
    center
    :before-close="cancel"
  >
    <el-form :model="form" :rules="rules" ref="forData">
      <el-form-item label="一级分类" prop="pid" :label-width="formLabelWidth">
        <el-select v-model="form.pid" placeholder="请选择" @change="select">
          <el-option
            v-for="item in menuList"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类" prop="pid" :label-width="formLabelWidth">
        <el-select v-model="form.pid" placeholder="请选择" @change="select">
          <el-option
            v-for="item in menuList"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="商品名称"
        prop="catename"
        :label-width="formLabelWidth"
      >
        <el-input v-model="form.catename" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="catename" :label-width="formLabelWidth">
        <el-input v-model="form.catename" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="市场价格"
        prop="catename"
        :label-width="formLabelWidth"
      >
        <el-input v-model="form.catename" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        v-model="form.img"
        label="图片"
        :label-width="formLabelWidth"
      >
        <el-upload
          action="#"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="onChange"
          :auto-upload="false"
          :file-list="fileList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品规格" prop="pid" :label-width="formLabelWidth">
        <el-select v-model="form.pid" placeholder="请选择" @change="select">
          <el-option
            v-for="item in menuList"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="规格属性" prop="pid" :label-width="formLabelWidth">
        <el-select v-model="form.pid" placeholder="请选择" @change="select">
          <el-option
            v-for="item in menuList"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否新品" :label-width="formLabelWidth">
        <el-radio v-model="form.type" :value="1" :label="1">是</el-radio>
        <el-radio v-model="form.type" :value="2" :label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="是否热卖" :label-width="formLabelWidth">
        <el-radio v-model="form.type" :value="1" :label="1">是</el-radio>
        <el-radio v-model="form.type" :value="2" :label="2">否</el-radio>
      </el-form-item>
      <el-form-item
        v-model="form.status"
        label="状态"
        :label-width="formLabelWidth"
      >
        <el-switch
          v-model="form.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value="1"
          :inactive-value="2"
        >
        </el-switch>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="confirm" v-if="addInfo.isadd"
        >确 定</el-button
      >
      <el-button type="primary" @click="update" v-else>更新</el-button>
    </div>
  </el-dialog>
</template>

<script>
// 导入路由
import { homerouter } from "../../../router";
// 导入接口
import { postForm, getMenuListOne, editMenuList } from "../../../util/axios";
// 导入vux辅助性函数
import { mapGetters, mapActions } from "vuex";
export default {
  // 接收父组件的值
  props: ["addInfo"],
  data() {
    return {
      form: {
        title: "",
        pid: 0,
        icon: "",
        type: 1,
        url: "",
        status: 1,
      },
      homerouter,
      formLabelWidth: "120px",
      options: [
        {
          value: 2,
          label: "系统管理",
        },
        {
          value: 3,
          label: "商城管理",
        },
      ],
      icons: [
        "el-icon-setting",
        "el-icon-s-order",
        "el-icon-s-cooperation",
        "el-icon-s-promotion",
        "el-icon-s-goods",
        "el-icon-s-comment",
      ],
      rules: {
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        pid: [{ required: true, message: "请输入", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getMenuListAction();
  },
  computed: {
    ...mapGetters({
      menuList: "menu/getMenuList",
    }),
  },
  methods: {
    cancel() {
      // 传给父组件isShow值
      this.$emit("cancel", false);
      this.reset();
    },
    // 获取menuaction
    ...mapActions({
      getMenuListAction: "menu/getMenuListAction",
    }),
    reset() {
      this.form = {
        title: "",
        pid: 0,
        icon: "",
        type: 1,
        url: "",
        status: 1,
      };
    },
    //select被选中
    select(e) {
      e == 0 ? (this.form.type = 1) : (this.form.type = 2);
      console.log(e);
    },
    // 添加
    confirm() {
      this.$refs["forData"].validate((valid) => {
        if (valid) {
          postForm(this.form).then((res) => {
            if (res.data.code == 200) {
              console.log("响应成功", res);
              this.$message.success(res.data.msg);
              //关闭弹框
              this.cancel();
              this.getMenuListAction();
              this.reset();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error");
          return false;
        }
      });
    },
    // 编辑
    edit(e) {
      getMenuListOne({ id: e }).then((res) => {
        if (res.data.code == 200) {
          this.form = res.data.list;
          // 真坑
          this.form.id = e;
        }
      });
    },
    update() {
      console.log(this.form.id);
      let id = this.form.id;
      editMenuList(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          // 跟新数据
          this.getMenuListAction();
          // 关闭弹窗
          this.cancel();
        }
      });
    },
  },
};
</script>

<style lang="stylus"></style>