<template>
  <div class="closed">
    <div class="closedGoods">
      <p class="justify_between border_bottom">
        <span>兑换礼品</span>
        <span>粉红猪小妹</span>
      </p>
      <p class="justify_between">
        <span>数量</span>
        <span>x1</span>
      </p>
    </div>
    <div>
      <p class="justify_between border_bottom">
        <span>收货人</span>
        <input type="text" placeholder="" v-model="consignee.name">
      </p>
      <p class="justify_between">
        <span>联系电话</span>
        <input type="text" placeholder="" v-model="consignee.phone">
      </p>
      <p class="justify_between border_bottom">
        <span>所在地区</span>
        <span  @click="choose" v-if="consignee.region">{{consignee.region}}</span>
        <span  @click="choose" v-else>请选择 <img src="../image/more.png" alt=""></span>
      </p>
      <p class="justify_between">
        <span>详细地址</span>
        <!-- <input type="text" placeholder="填写详细地址"> -->
        <textarea name="city" id="city" cols="20" placeholder="填写详细地址" v-model="consignee.address"></textarea>
      </p>
    </div>
    <div class="footer">
      <span class="exchangeNum">需要派点：3654</span>
      <span class="exchange"  @click="closedBolFn(true)">确认</span>
    </div>
    <div v-if="closedSuccessBol" class="successBox">
      <div class="successBoxContent">
        <img :src="recharge">
        <span>兑换成功</span>
        <p>恭喜你成功兑换<br>粉红猪小妹</p>
        <span @click="closedBolFn(false)">好的</span>
      </div>
    </div>
    <div class="divwrapBox" v-if="show">
      <!-- <button  @click="choose">点我选择区域</button> -->
      <div class="divwrap">
          <v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
import Recharge from '../../static/img/recharge.png'

export default {
  name: "closed",
  components: { VDistpicker },
  data() {
    return {
      closedSuccessBol: false,
      consignee: {
        name: "",
        phone: "",
        region: "",
        address: ""
      },
      show: false,
      region: "",
      recharge: Recharge
    };
  },
  methods: {
    closedBolFn: function(bol) {
      
      let n = '';
      for (let key in this.consignee) {
      //  console.log(this.consignee[key]);
        if(!this.consignee[key]){
          switch (key) {
            case 'name':
              n = '收货人'
              break;
            case 'phone':
              n = '电话'
              break;
            case 'region':
              n = '地区'
              break;
            case 'address':
              n = '地址'
              break;
            default:
              break;
          }
          alert(n + "不能为空");
          return
        }else{
          if(key == 'phone'){
            let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
            if (!reg.test(this.consignee[key])) {
                alert("请输入有效的手机号码！");
                return
            }
          }
        }
      }
      this.closedSuccessBol = bol;
      if(!bol){
        this.$router.replace('/');
      }
    },
    choose() {
      this.show = !this.show;
    },
    onChangeProvince(a) {
      this.consignee.region = a.value;
      // console.log(a);
    },
    onChangeCity(a) {
      this.consignee.region = this.consignee.region + a.value;
      // console.log(a);
    },
    onChangeArea(a) {
      this.consignee.region = this.consignee.region + a.value;
      // console.log(a);
      this.show = false;
    }
  }
};
</script>

<style>
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bec1c8;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #bec1c8;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #bec1c8;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #bec1c8;
}

html,
body,
#app,
.closed {
  width: 100%;
  height: 100%;
}

.closed {
  position: relative;
  background-color: #ffffff;
}

.closed p {
  padding: 0 1.25rem;
  line-height: 3rem;
  color: #445266;
  font-size: 0.875rem;
}

.closedGoods {
  border-bottom: 9px solid #efeff4;
}

.justify_between {
  display: flex;
  justify-content: space-between;
}

.justify_between > span:nth-child(2) {
  display: inline-flex;
  align-items: center;
  color: #bec1c8;
}

.justify_between > span:nth-child(2) > img {
  height: 1rem;
  margin-left: 0.5rem;
}

.border_bottom {
  border-bottom: 1px solid #efeff4;
}

input[type="text"] {
  border: 0px;
  text-align: right;
  color: #bec1c8;
}

textarea {
  border: 0px;
  text-align: right;
  outline: none;
  resize: none;
  line-height: 1.5rem;
  color: #bec1c8;
  padding-top: 1rem;
}

.footer {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3px 0;
  border-top: 1px solid #efeff4;
}

.footer .exchangeNum {
  margin-left: 0.5rem;
}

.footer .exchange {
  color: #ffffff;
  padding: 0.9rem 2.18rem;
  font-size: 0.875rem;
  background-color: #4dc7e7;
  border-radius: 5px;
  margin-left: 1rem;
  margin-right: 0.3rem;
}

.successBox {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
}

.successBox .successBoxContent {
  position: absolute;
  width: 71.3%;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: 20%;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 6.5px;
  padding: 10.3% 0 5.2%;
}

.successBoxContent > img {
  width: 51%;
  margin: 0 auto;
}

.successBoxContent > p {
  line-height: 1rem;
  margin: 1rem 0;
  color: #bec1c8;
}

.successBoxContent > span:nth-of-type(1) {
  font-weight: bold;
  color: #445266;
  margin-top: 0.9rem;
}

.successBoxContent > span:nth-of-type(2) {
  color: #ffffff;
  padding: 0.9rem 2.18rem;
  font-size: 0.875rem;
  background-color: #4dc7e7;
  border-radius: 50px;
  /* width: 10%; */
  margin: 0 26.2%;
}

.divwrapBox {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.divwrap {
  height: 400px;
  overflow-y: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.divwrap >>> .distpicker-address-wrapper {
  color: #999;
}

.divwrap >>> .address-header {
  position: fixed;
  bottom: 400px;
  width: 100%;
  background: #000;
  color: #fff;
}

.divwrap >>> .address-header ul li {
  flex-grow: 1;
  text-align: center;
}

.divwrap >>> .address-header .active {
  color: #fff;
  border-bottom: #666 solid 8px;
}

.divwrap >>> .address-container .active {
  color: #000;
}
</style>
