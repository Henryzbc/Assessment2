<template>
  <div>
    <div class="flex_row align_center" style="padding: 10px 10px">
      <el-button class="mar_l10" @click="query" size="mini" type="primary"
        >query</el-button
      >
      <el-button
        class="mar_l10"
        size="mini"
        type="primary"
        @click="dialogFormShowF()"
        >Add</el-button
      >
    </div>
    <div>
      <el-table
        :data="orderList"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        height="550"
      >
        <el-table-column prop="id" label="ID" width="130">
        </el-table-column>
        <el-table-column prop="title" label="title"> </el-table-column>
        <el-table-column prop="note" label="note"> </el-table-column>
        <el-table-column prop="price" label="price" width="80"></el-table-column>
        <el-table-column prop="level" label="level" width="50"></el-table-column>
        <el-table-column
          prop="num"
          label="Evaluation"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="address"
          width="80"
        ></el-table-column>
        <el-table-column align="left" label="other" width="240">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleDetails(scope.$index, scope.row)"
              >Details</el-button
            >
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Add/Edit -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormShow"
      :close-on-click-modal="false"
    >
      <el-form ref="formF" :model="formF" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="title">
              <el-input
                size="mini"
                v-model="formF.title"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="price">
              <el-input
                size="mini"
                v-model="formF.price"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="level">
              <el-input
                size="mini"
                v-model="formF.level"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="Evaluation">
              <el-input
                size="mini"
                v-model="formF.num"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="address">
              <el-input
                size="mini"
                v-model="formF.address"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="ID">
              <el-input
                size="mini"
                v-model="formF.id"
                autocomplete="off"
                disabled
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="other">
              <el-input
                size="mini"
                v-model="formF.note"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" type="primary" @click="onSubMit('formF')"
          >SubMit</el-button
        >
      </div>
    </el-dialog>
    <!-- 明细 -->
    <el-dialog
      title="Detailes"
      :visible.sync="dialogFormShow1"
      :close-on-click-modal="false"
    >
      <el-descriptions
        class="margin-top"
        title=""
        :column="2"
        border
      >
        <el-descriptions-item>
          <template slot="label">
            ID
          </template>
          {{ formF.id }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            address
          </template>
          {{ formF.address }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            price
          </template>
          {{ formF.price }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            Evaluation
          </template>
          {{ formF.level }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            Evaluation Num
          </template>
          {{ formF.num }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            title
          </template>
          {{ formF.title }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            note
          </template>
          {{ formF.note }}
        </el-descriptions-item>
      </el-descriptions>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" type="primary" @click="dialogFormShow1=false"
          >close</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
      
<script>
import {
  orderListQuery,
  orderDelete,
  orderEdit,
  orderAdd,
} from "@/api/order/order";
import moment from "moment";
import { userQuery } from "@/api/user/userManger";
export default {
  data() {
    return {
      orderList: [],
      dialogFormShow: false,
      dialogFormShow1: false,
      dialogTitle: "",
      formF: {
        id: "",
        title: "",
        note: "",
        price: "",
        level: "",
        num: "",
        address: "",
      },
      formBase: {
        id: "",
        title: "",
        note: "",
        price: "",
        level: "",
        num: "",
        address: "",
      },
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      orderListQuery({}).then((res) => {
        this.orderList = res;
      });
    },
    onSubMit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param;
          //新增菜单
          if (this.dialogTitle == "Add") {
            orderAdd(this.formF).then((res) => {
              console.log(res);
              this.query();
            });
          } else {
            //修改菜单
            param = JSON.parse(JSON.stringify(this.formF));
            orderEdit(param).then((res) => {
              console.log(res);
              this.query();
              this.productEdit();
            });
          }
          this.$refs.formF.resetFields(); //清空所有表单项
          this.dialogFormShow = false;
        } else {
          return false;
        }
      });
    },
    handleEdit(index, row) {
      console.log(row);
      this.formF = { ...row };
      this.dialogFormShow = true;
      this.dialogTitle = "Edit";
    },
    handleDelete(index, row) {
      orderDelete(row.id).then((res) => {
        this.query();
      });
    },
    dialogFormShowF() {
      this.dialogFormShow = true;
      this.dialogTitle = "Add";
      this.formF = { ...this.formBase };
    },
    handleDetails(index, row) {
      this.dialogFormShow1 = true;
      this.formF = { ...row };
    },
  },
};
</script>
      
<style>
.el-select--mini {
  width: 100%;
}
.red {
  color: #f00;
}
</style>
      