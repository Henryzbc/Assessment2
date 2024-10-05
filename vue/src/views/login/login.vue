
<template>
  <div class="bgStyle">
    <div class="loginBox">
      <div class="loginBox_title">welcome</div>
      <div class="row_title">user name</div>
      <div class="row">
        <img :src="userImg" alt />
        <input
          type="text"
          name="username"
          v-model="username"
          placeholder="Please enter the username"
          maxlength="20"
          autocomplete="off"
        />
      </div>
      <div class="row_title">user password</div>
      <div class="row">
        <img :src="passwordImg" alt />
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Please enter the password"
          maxlength="20"
        />
      </div>
      <div class="row_btn" @click="doLogin()">login</div>
      <div class="registerBox">
        <div class="register">
          <a>
            <router-link to="/register">register</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menu, menu1 } from "@/common/contant";
import { login } from "@/api/user/login";
import userImg from "@/assets/image/user.png";
import passwordImg from "@/assets/image/password.png";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userImg: userImg,
      passwordImg: passwordImg,
      size: "",
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    doLogin() {
      if (!this.username) {
        this.$message({
          message: "Please enter the username！",
          type: "warning",
        });
        return;
      }
      if (!this.password) {
        this.$message({
          message: "Please enter the password",
          type: "warning",
        });
        return;
      }
      login({
        loginName: this.username,
        password: this.password,
      }).then((e) => {
        console.log(e);
        if (e.code == "200") {
          localStorage.setItem("loginName", this.username);
          this.username = "";
          this.password = "";
          this.$router.push({
            path: "/home",
          });
        } else {
          this.$message({
            message: e.msg,
            type: "warning",
          });
        }
      });
    },
   
    toRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
  mounted() {
    if (window.screen.width < 750) {
      this.size = "100%";
    } else {
      this.size = "";
    }
  },
};
</script>
<style scoped>
.bgStyle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #276f81;
  background-size: 100% 100%;
  overflow: hidden;
}
.loginBox {
  width: 600px;
  height: 380px;
  background-color: #56581d26;
  border-radius: 8px;
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
}

.loginBox_title {
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin: 20px auto;
  width: 300px;
  height: 20px;
  border-radius: 10px;
}
.row_title {
  font-size: 13px;
  font-weight: bold;
  color: #7a7878;
  padding: 4px 0;
  width: 320px;
  height: 20px;
  line-height: 20px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: left;
}
.row_slider {
  width: 320px;
  height: 40px;
  line-height: 40px;
  margin: 30px auto;
  /* margin-top: 20px; */
}
.row {
  margin: 0px auto;
  width: 300px;
  height: 40px;
  border: 1px solid #cccccc4d;
  border-radius: 10px;
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
  margin: 30px auto;
  width: 300px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #cccccc4d;
  border-radius: 10px;
  font-size: 17px;
  color: #fff;
  padding: 0 10px;
}
.row_btn:hover {
  background-color: #56581d26;
  font-size: 18px;
  cursor: pointer;
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
.loginBox_bottom {
  width: 300px;
  height: 20px;
  line-height: 20px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.loginBox_bottom_left span {
  color: #555555;
  margin-left: 2px;
}
.loginBox_bottom_right {
  color: #1d79af;
}
.registerBox {
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 20px auto;
  text-align: center;
  color: #1d79af;
  font-size: 15px;
  border-top: 1px solid #bdbdbd;
}
.pointer_a:hover {
  cursor: pointer;
  color: #000000;
}
.pointer_b:hover {
  cursor: pointer;
  color: #158bcf;
}
.pointer_c:hover {
  cursor: pointer;
  color: rgb(109, 109, 109) !important;
}

.type {
  text-align: left;
  line-height: 30px;
  height: auto;
  color: #000;
  font-weight: bold;
  font-size: 24px;
  margin: 10px;
}
.title {
  text-align: left;
  line-height: 30px;
  height: auto;
  color: blue;
  font-size: 20px;
  margin: 10px;
}
.title:hover {
  cursor: pointer;
  background: #cacafd6b;
}
.value {
  padding: 0 20px;
  text-align: left;
  line-height: 30px;
  color: #ccc;
  font-size: 18px;
  text-indent: 35px;
}
.yambtn {
  background: #3899a4;
  border: none;
}
</style>
