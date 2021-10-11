<template>
  <!-- var name='sessionData';
var num=120;
sessionStorage.setItem(name,num);//存储数据
sessionStorage.setItem('value2',119);
let dataAll=sessionStorage.valueOf();//获取全部数据
console.log(dataAll,'获取全部数据');
var dataSession=sessionStorage.getItem(name);//获取指定键名数据
var dataSession2=sessionStorage.sessionData;//sessionStorage是js对象，也可以使用key的方式来获取值
 console.log(dataSession,dataSession2,'获取指定键名数据');
sessionStorage.removeItem(name); //删除指定键名数据
  console.log(dataAll,'获取全部数据1');
 sessionStorage.clear();//清空缓存数据：localStorage.clear();
  console.log(dataAll,'获取全部数据2');   -->

  <div class="login">
    <el-form
      class="from"
      :rules="loginFromRules"
      :model="loginFromWork"
      ref="loginForm"
      v-if="isFlag"
    >
      <el-form-item prop="userName">
        <el-input
          placeholder="输入用户名"
          v-model="loginFromWork.userName"
        ></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          placeholder="输入密码"
          v-model="loginFromWork.passWord"
          type="password"
        ></el-input>
      </el-form-item>
      <el-button @click="myClick">登录</el-button>
      <div class="login-sugin" @click="loginClick">新用户注册</div>
    </el-form>
    <el-form class="from" ref="loginFormsu" v-else
      >.
      <el-form-item>
        <el-input placeholder="输入手机号"></el-input>
      </el-form-item>
      <el-form-item class="telephone">
        <el-input placeholder="填写验证码"></el-input>
        <el-button>获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="输入注册密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="确认密码"></el-input>
      </el-form-item>
      <el-button>注册</el-button>
      <el-button class="login-back" @click="loginBackClick">返回登陆</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isFlag: true,
      text: "",
      loginFromWork: {
        userName: "admin",
        passWord: "123456",
      },

      loginFromRules: {
        userName: [
          { required: true, message: "请输入登录名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["pushTokenAction"]),
    loginClick() {
      this.isFlag = !this.isFlag;
    },
    loginBackClick() {
      this.isFlag = !this.isFlag;
    },
    myClick() {
      this.$refs.loginForm.validate((valid) => {
        this.pushTokenAction(valid);
        if (!valid) return;
        //如果验证通过 那么就发送网络请求  请求token以及用户的信息 我们就判断一下 请求的结果 成功就是登录成功
        //那这里我直接判断token模拟一下
        window.sessionStorage.setItem("token", valid);
        console.log(this.$store.state.token);
        if (this.tokenGetter) {
          this.$router.push("/home");
          this.$toast.show("登录成功", 1000);
        } else {
          this.$toast.show("登录失败", 1000);
          console.log("登录失败");
          return;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["tokenGetter"]),
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  .from {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    .el-form-item {
      width: 100%;
      .el-form-item__label {
        width: 60px;
      }
    }
    .el-button {
      width: 100%;
    }
    .login-sugin {
      font-size: 12px;
      text-align: center;
      color: white;
      margin-top: 10px;
      padding: 10px 0;
    }

    .telephone {
      .el-form-item__content {
        display: flex;
      }
    }
    .login-back {
      margin: 0;
    }
  }
}
</style>


