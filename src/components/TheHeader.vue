<template>
    <div class="container-fluid">
        <div class="row" style="background-color: green; padding: 5px;width: 100%;">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer()"><MenuOutlined></MenuOutlined></span>
            </div>

            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/logo.png" class="center-block" height="30px" width="32px" alt="">
            </div>

            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end">
                <span>Admin</span>
            </div>

            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawerUser()"><UserOutlined></UserOutlined></span>
            </div>
        </div>
    </div>

    <a-drawer
    v-model:visible="visible"
    title="Danh Mục"
    placement="left"
  >
   <TheMenu></TheMenu>
  </a-drawer>

  <a-drawer
    v-model:visible="visible_user"
    title="Tài Khoản"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import { UserOutlined, MenuOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import TheMenu from './TheMenu.vue';

export default defineComponent({
  components: {
    TheMenu,
    UserOutlined,
    MenuOutlined
  },
  setup() {
    const visible = ref(false);
    const visible_user = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };
    const showDrawerUser = () => {
      visible_user.value = true;
    };
    return {
      visible,
      visible_user,
      showDrawer,
      showDrawerUser
    };
  },
});
</script>