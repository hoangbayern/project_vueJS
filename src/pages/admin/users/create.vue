<template>
    <form @submit.prevent="createUser">
        <a-card title="Create User" style="width: 100%;">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center mb-3">
                            <a-avatar shape="square" :size="200">
                                <template #icon>
                                    <img src="../../../assets/logo_user.png" he alt="">
                                </template>
                            </a-avatar>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <a-button type="primary">
                                <span>
                                    UploadImage
                                </span>
                            </a-button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-8">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 tetx-start text-sm-end">
                            <label for="">
                                <span class="text-danger me-1">*</span>
                                <span :class="{ 'text-danger': errors.status_id }">Status: </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select v-model:value="status_id" show-search placeholder="Status" style="width: 100%"
                                :options="users_status" :filter-option="filterOption"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.status_id" class="text-danger">{{ errors.status_id }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 tetx-start text-sm-end">
                            <label for="">
                                <span class="text-danger me-1">*</span>
                                <span :class="{ 'text-danger': errors.username }">Username: </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input v-model:value="username" placeholder="username" allow-clear />
                            <div class="w-100"></div>
                            <small v-if="errors.username" class="text-danger">{{ errors.username }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 tetx-start text-sm-end">
                            <label for="">
                                <span class="text-danger me-1">*</span>
                                <span :class="{ 'text-danger': errors.name }">Name: </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input v-model:value="name" placeholder="name" allow-clear />
                            <div class="w-100"></div>
                            <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 tetx-start text-sm-end">
                            <label for="">
                                <span class="text-danger me-1">*</span>
                                <span :class="{ 'text-danger': errors.email }">Email: </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input v-model:value="email" placeholder="email" allow-clear />
                            <div class="w-100"></div>
                            <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 tetx-start text-sm-end">
                            <label for="">
                                <span class="text-danger me-1">*</span>
                                <span :class="{ 'text-danger': errors.password }">Password: </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input v-model:value="password" placeholder="password" allow-clear />
                            <div class="w-100"></div>
                            <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 tetx-start text-sm-end">
                            <label for="">
                                <span class="text-danger me-1">*</span>
                                <span :class="{ 'text-danger': errors.department_id }">Departments: </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select v-model:value="department_id" show-search placeholder="Department" style="width: 100%"
                                :options="departments" :filter-option="filterOption"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.department_id" class="text-danger">{{ errors.department_id }}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                    <a-button type="danger me-2 mb-3">
                        <RouterLink :to="{ name: 'admin-users' }">
                            <span>Cancel</span>
                        </RouterLink>
                    </a-button>
                    <a-button type="primary" html-type="submit">
                        <span>Save</span>
                    </a-button>
                </div>
            </div>
        </a-card>
    </form>
</template>
  
<script>
import axios from 'axios'
import { defineComponent, ref, reactive, toRefs } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';


export default defineComponent({
    setup() {
        const users_status = ref([]);
        const departments = ref([]);
        const users = reactive({
            username: "",
            name: "",
            email: "",
            password: "",
            department_id: [],
            status_id: []
        });
        const errors = ref([]);
        const router = useRouter();

        const getUsersCreate = async () => {
            try {
                const response = await axios.get('http://project-laravel.local/api/users/create');
                departments.value = response.data.departments;
                users_status.value = response.data.status;
                // console.log(response.data.data.products);
            } catch (error) {
                console.error(error);
            }
        }
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        const createUser = async () => {
            try {
                const response = await axios.post('http://project-laravel.local/api/users', users);
                if (response) {
                    Swal.fire(
                        'Success!',
                        'User created successfully!',
                        'success'
                    )
                    router.push({ name: 'admin-users' })
                }
                // console.log(response.data.data.products);
            } catch (error) {
                errors.value = error.response.data.errors;
            }
        }
        getUsersCreate();
        return {
            departments,
            users_status,
            errors,
            filterOption,
            createUser,
            ...toRefs(users)
        }
    }

});
</script>
  