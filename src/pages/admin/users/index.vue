<template>
    <a-card title="List User" style="width: 100%">
        <div class="row mb-3">
            <div class="col-12 d-flex justify-content-end">
                <RouterLink :to="{ name: 'admin-users-create' }">
                    <a-button type="primary">
                        <PlusOutlined></PlusOutlined>
                    </a-button>
                </RouterLink>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="users" :columns="columns">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'status'">
                            <span v-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
                            <span v-else-if="record.status_id == 1" class="text-success">{{ record.status }}</span>
                        </template>
                        <template v-if="column.key === 'action'">
                            <RouterLink :to="'/admin/users/edit/' + record.id">
                                <a-button type="primary" class="me-2">
                                    <EditOutlined></EditOutlined>
                                </a-button>
                            </RouterLink>
                        </template>
                        <template v-if="column.key === 'action'">
                            <RouterLink :to="'/admin/users/show/' + record.id">
                                <a-button type="info" class="me-2">
                                    <EyeOutlined></EyeOutlined>
                                </a-button>
                            </RouterLink>
                        </template>
                        <template v-if="column.key === 'action'">
                            <a-button type="danger" @click="deleteUser(record.id)">
                                <DeleteOutlined></DeleteOutlined>
                            </a-button>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </a-card>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { PlusOutlined, EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import Swal from 'sweetalert2'

export default defineComponent({
    setup() {
        const users = ref([]);

        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Departments',
                dataIndex: 'departments',
                key: 'departments',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'action',
            },

        ]

        const getUser = async () => {
            try {
                const response = await axios.get('http://project-laravel.local/api/users');
                users.value = response.data;

                // console.log(response.data.data.products);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
        const deleteUser = async (id) => {
    try {
        // Sử dụng sweet alert để confirm trước khi xóa user
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You can not revert this changes!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (result.isConfirmed) {
            const response = await axios.delete(`http://project-laravel.local/api/users/${id}`);
            const index = users.value.findIndex((user) => user.id === id);
            users.value.splice(index, 1);
            console.log(response);
            // Hiển thị thông báo xóa thành công bằng sweet alert
            Swal.fire(
                'Deleted!',
                'Your user has been deleted.',
                'success'
            )
        }
    } catch (error) {
        console.error(error);
    }
}

        return {
            users,
            columns,
            deleteUser
        }
    },
    components: {
        PlusOutlined,
        EditOutlined,
        EyeOutlined,
        DeleteOutlined
    }
});
</script>