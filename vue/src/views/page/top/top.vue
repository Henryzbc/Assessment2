<template>
  <div class="topBox">
    <div class="top-bar__right">
      <img
        class="top-bar__img"
        src="../../../assets/image/user1.jpg"
      />
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout" divided>logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      userName: "",
    };
  },
  created() {
    if (localStorage.getItem("loginName")) {
      this.userName = localStorage.getItem("loginName");
    }
  },
  mounted() {},
  computed: {},
  props: [],
  methods: {
    handleCommand(item) {
      console.log(item);
      if (item == "logout") {
        this.logout();
      } 
    },
    logout() {
      console.log("logout");
      localStorage.setItem("loginName", "");
      localStorage.setItem("menuList", "");
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style>
.topBox {
  position: relative;
  height: 50px;
  padding: 0 20px;
  background: #121a41;
  /* background: rgb(248, 248, 248); */
  text-align: center;
  line-height: 50px;
}
.top_row {
  height: 50px;
  display: flex;
  align-items: center;
  /* float: right; */
  text-align: center;
  margin: 0 10px;
}
.userInfoBar {
  /* width: 50px; */
}
.userInfoBar img {
  width: 30px;
}
.userhead {
  width: 34px;
  height: 34px;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.userhead img {
  width: 30px;
}
.fr {
  float: right;
}
.pwdBox {
  position: fixed;
  z-index: 10;
  width: 300px;
  height: 200px;
  background: #ccc;
  top: 20%;
  left: 50%;
}
</style>
