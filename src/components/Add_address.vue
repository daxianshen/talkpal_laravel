<template>
  <div class="addressDetail">
      <p class="justify_between border_bottom">
        <span>收货人</span>
        <input type="text" placeholder="请填写收货人" v-model="consignee.full_name">
      </p>
      <p class="justify_between border_bottom">
        <span>联系电话</span>
        <input type="text" placeholder="请填写手机号" v-model="consignee.phone_number">
      </p>
      <p class="justify_between border_bottom">
        <span>所在地区</span>
        <span  @click="choose" v-if="consignee.region">{{consignee.region}}</span>
        <span  @click="choose" v-else>请选择 <img src="../image/more.png"></span>
      </p>
      <p class="justify_between">
        <span>详细地址</span>
        <!-- <input type="text" placeholder="填写详细地址"> -->
        <textarea name="city" id="city" cols="20" placeholder="请填写详细地址" v-model="consignee.address"></textarea>
      </p>
      <div class="btn" @click="add_addressFn">保存</div>
      <div class="divwrapBox" v-if="show" @click="showFalse">
        <!-- <button  @click="choose">点我选择区域</button> -->
        <div class="divwrap" @click.stop="showTrue">
            <v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
        </div>
      </div>
    </div>
</template>

<script>
import VDistpicker from "v-distpicker"
import axios from 'axios'

export default {
  name: "closed",
  components: { VDistpicker },
  data() {
    return {
      show: false,
      consignee: {
        full_name: "",
        phone_number: "",
        region: "",
        address: "",
        province: "",
        city: "",
        district: ""
      }
    }
  },
  methods: {
    choose() {
      this.show = !this.show;
    },
    add_addressFn() {
      let n = '';
      for (let key in this.consignee) {
        if(!this.consignee[key]){
          switch (key) {
            case 'full_name':
              n = '收货人'
              break;
            case 'phone_number':
              n = '电话'
              break;
            case 'region':
              n = '地区'
              break;
            case 'address':
              n = '地址'
              break;
          }
          if(n.length == 0){
            alert(n + "不能为空");
            return
          }
        }else{
          if(key == 'phone_number'){
            let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
            if (!reg.test(this.consignee[key])) {
                alert("请输入有效的手机号码！");
                return
            }
          }
        }
      }
      this.postAddress();
    },
    showFalse() {
      this.show = false;
    },
    showTrue() {
      // this.show = true;
    },
    postAddress() {
      this.$api.post(this.$utils.url + 'addresses', {
        address: {
          province: this.consignee.province,
          city: this.consignee.city,
          district: this.consignee.district,
          line1: this.consignee.address,
          phone_number: this.consignee.phone_number,
          full_name: this.consignee.full_name,
          street: "null",
          postal_code: "null"
        }
      })
      .then((response) => {
        console.log(response.data.data);
        this.address = response.data.data;
        if(confirm("保存成功!")){
          this.$router.go(-1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },
    onChangeProvince(a) {
      this.consignee.region = a.value;
      this.consignee.province = a.value;
      // console.log(a);
    },
    onChangeCity(a) {
      this.consignee.region = this.consignee.province + a.value;
      this.consignee.city = a.value;
      // console.log(a);
    },
    onChangeArea(a) {
      this.consignee.region = this.consignee.region + a.value;
      this.consignee.district = a.value;
      // console.log(a);
      this.show = false;
    }
  }
}
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

html,body,#app{
  background-color: #ffffff;
}
.addressDetail p {
  padding: 0 1.25rem;
  line-height: 3rem;
  color: #445266;
  font-size: 0.875rem;
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

.btn{
  color: #ffffff;
  padding: 0.9rem 0;
  font-size: 0.875rem;
  background-color: #4dc7e7;
  border-radius: 5px;
  border: 0;
  margin: 0 1.25rem;
  text-align: center
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
  background-color: #ffffff;
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
