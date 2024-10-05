<template>
  <div class="container">
    <div class="bgStyle"></div>
    <div class="loginBox">
      <div class="loginBox_title row_title">
        <img
          src="../../assets/image/back.png"
          class="row_title_img"
          @click="back"
        />register
      </div>
      <el-form
        ref="register"
        :model="registerList"
        label-width="140px"
        style="margin-top: 20px"
        :rules="rules"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="name：" label-width="140px" prop="loginName">
              <div class="label-align-left">
                <el-input
                  v-model="registerList.loginName"
                  placeholder=""
                  class="form-width100"
                ></el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="password：" label-width="140px" prop="password">
              <div class="label-align-left">
                <el-input
                  v-model="registerList.password"
                  type="password"
                  placeholder=""
                  class="form-width100"
                ></el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="password comfirm："
              label-width="140px"
              prop="passwordComfirm"
            >
              <div class="label-align-left">
                <el-input
                  v-model="registerList.passwordComfirm"
                  type="password"
                  placeholder=""
                  class="form-width100"
                ></el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="register_box">
          <el-col :span="12" :offset="6" class="text-center">
            <el-button
              type="plain"
              class="register_btn"
              size="small"
              round
              @click="register"
              >Comfirm</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user/login";
import { userQuery } from "@/api/user/userManger";
export default {
  name: "register",
  components: {},
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Enter your password again"));
      } else if (value !== this.registerList.password) {
        callback(new Error("The two password passwords are inconsistent!"));
      } else {
        callback();
      }
    };
    return {
      users: [],
      registerList: {
        loginName: "",
        password: "",
        passwordComfirm: "",
      },
      rules: {
        loginName: [
          { required: true, message: "Please enter the username", trigger: "blur" },
        ],
        password: [{ required: true, message: "Please enter the password", trigger: "blur" }],
        passwordComfirm: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    register() {
      let flag = this.users.find((e) => {
        return e.loginName == this.registerList.loginName;
      });
      if (flag) {
        this.$message({
          message: "The username already exists",
          type: "warning",
        });
        return;
      }
      this.$refs["register"].validate((valid) => {
        if (valid) {
          let param = { ...this.registerList };
          // param.password = md5(param.password);
          register(param).then((e) => {
            this.$message({
              message: "success！",
              type: "success",
            });
            this.back();
          });
          this.$refs.register.resetFields(); //清空所有表单项
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.push({
        path: "/",
      });
    },
  },
  created() {
    userQuery().then((res) => {
      this.users = res;
    });
  },
  mounted() {},
};
</script>
<style scoped>
.loginBox /deep/ .el-form-item__label {
  color: #aab2c1;
}
.loginBox /deep/ .el-form-item {
  margin-bottom: 15px;
}
body {
  margin: 0;
}
.container {
  width: 100%;
  height: 100%;
}
.bgStyle {
  /* height: 100vh; */
  /* background: -moz-linear-gradient(top, #000000 0%, #ffffff 100%); */
  /* background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#000000), color-stop(100%,#ffffff)); */
  /* background: -webkit-linear-gradient(top, #000000 0%,#ffffff 100%); */
  /* background: -o-linear-gradient(top, #000000 0%,#ffffff 100%); */
  /* background: -ms-linear-gradient(top, #000000 0%,#ffffff 100%); */
  /* background: linear-gradient(to bottom, #43a7a054 0%, #56e8db 100%); */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #276f81;
  background-size: 100% 100%;
  overflow: hidden;
  filter: blur(4px);
}
.loginBox {
  position: absolute;
  top: calc(50% - 120px);
  left: calc(50% - 250px);
  width: 460px;
  height: 340px;
  margin-top: -120px;
  background-color: #1a463d66;
  border-radius: 8px;
}

.loginBox_title {
  font-size: 18px;
  color: #fff;
}
.row_title {
  text-align: center;
  margin: 20px auto;
  /* width: 200px; */
  height: 30px;
  border-radius: 10px;
}
.row_title_img {
  float: left;
  width: 24px;
  margin-left: 10px;
}
.row_btn {
  text-align: center;
  margin: 30px auto;
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #cccccc4d;
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
  padding: 0 10px;
  cursor: pointer;
}
.row {
  margin: 20px auto;
  width: 200px;
  height: 40px;
  border: 1px solid #cccccc4d;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.row img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.row_btn {
  text-align: center;
  color: #fff;
}
.row input::-webkit-input-placeholder {
  color: #ccc;
  font-size: 12px;
}
.row input {
  width: 150px;
  background-color: transparent;
  outline: 0;
  color: #fff;
  border: none;
  -web-kit-appearance: none;
  -moz-appearance: none;
}
.label-align-left {
  width: 260px;
}
.register_box {
  margin-top: 6px;
}
.register_btn {
  width: 200px;
}
.codeGeting {
  background: #cdcdcd;
  border-color: #cdcdcd;
  color: #fff;
}
.yzmbox {
  display: flex;
  flex-direction: row;
}
</style>
