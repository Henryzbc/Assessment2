<template>
  <div>
    <div class="flex_row" style="padding: 10px 10px">
      <el-button @click="query" size="mini" type="primary">query</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        border
        height="550"
        :default-expand-all="false"
      >
        <el-table-column
          prop="id"
          label="ID"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="loginName"
          label="loginName"
          align="center"
        ></el-table-column>
        <el-table-column prop="password" label="password" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="createTime" align="center">
        </el-table-column>
        <el-table-column align="center" label="">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="user Edit"
      :visible.sync="dialogFormShow"
      :close-on-click-modal="false"
    >
      <el-form label-width="80px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="loginName">
              <el-input
                size="mini"
                v-model="loginName"
                autocomplete="off"
                disabled
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="password">
              <el-input
                size="mini"
                v-model="password"
                autocomplete="off"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="ID">
              <el-input
                size="mini"
                v-model="id"
                autocomplete="off"
                disabled
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="createTime">
              <el-input
                size="mini"
                v-model="createTime"
                autocomplete="off"
                disabled
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="onClose()">Cancel</el-button>
        <el-button size="mini" type="primary" @click="onSubMit()"
          >SubMit</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
      
<script>
import moment from "moment";
import { userQuery, userEdit } from "@/api/user/userManger";
export default {
  data() {
    return {
      tableData: [],
      dialogFormShow: false,
      createTime: "",
      id: "",
      password: "",
      loginName: "",
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      userQuery().then((res) => {
        res.map((e) => {
          e.createTime = moment(Number(e.id)).format("YYYY/MM/DD hh:mm:ss");
        });
        this.tableData = res;
        console.log(this.tableData);
      });
    },
    onClose() {
      this.dialogFormShow = false;
    },
    handleEdit(index, row) {
      this.dialogFormShow = true;
      this.password = row.password;
      this.id = row.id;
      this.createTime = row.createTime;
      this.loginName = row.loginName;
    },
    onSubMit() {
      this.dialogFormShow = false;
      userEdit({
        password: this.password,
        loginName: this.loginName,
      }).then((res) => {
        console.log(res);
        this.query();
      });
    },
  },
};
</script>