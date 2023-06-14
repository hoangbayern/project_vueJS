<template>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
    >
      <a-menu-item key="admin-users">
        <RouterLink :to="{name: 'admin-users'}">
            <span><UserOutlined></UserOutlined>   Users</span>
        </RouterLink>
      </a-menu-item>
      <a-menu-item key="admin-roles">
        <RouterLink :to="{name: 'admin-roles'}">
            <span><TagOutlined></TagOutlined>   Roles</span>
        </RouterLink>
      </a-menu-item>
      <a-menu-item key="admin-settings">
        <RouterLink :to="{name: 'admin-settings'}">
            <span><SettingOutlined></SettingOutlined>   Settings</span>
        </RouterLink>
      </a-menu-item>
    </a-menu>
</template>

<script>
import { UserOutlined, TagOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        TagOutlined,
        SettingOutlined
    },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['admin-users'],
      openKeys: ['sub1'],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>