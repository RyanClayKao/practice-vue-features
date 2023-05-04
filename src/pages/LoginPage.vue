<template>
    <div class="page-container">
        <form>
            <div class="form-header">練習系統</div>
            <div class="form-content">
                <div class="form-group">
                    <label>帳號</label>
                    <input type="text" v-model="userId" maxlength="20" required>
                </div>
                <div class="form-group">
                    <label>密碼</label>
                    <input type="password" v-model="password" maxlength="50" required>
                </div>
                <div>
                    <a href="#" id="forgotPasswordLink">忘記密碼</a>
                </div>
            </div>
            <div class="form-operations">
                <button type="button" class="btn btn-brand-outline">註冊</button>
                <button type="button" class="btn btn-brand" @click="login">登入</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: "",
            password: ""
        }
    },
    methods: {
        login() {
            const userId = this.userId;
            const password = this.password;
            console.log(`userId: ${userId}, password: ${password}`);
        }
    }
}
</script>

<style scoped>
.page-container {
    height: 100vh;
    width: 100vw;
    background-color: var(--color-brand-light);
    display: flex;
    justify-content: center;
}

form {
    position: relative;
    top: 15%;
    width: 250px;
    height: 280px;

    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px 50px;
    box-shadow: 1px 1px 5px #ccc;

    background-color: white;

    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-areas: "title"
                        "content"
                        "operations"
                        "footer";
}

.form-header {
    color: var(--color-brand);
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    grid-area: title;
}

.form-content {
    grid-area: content;
    display: grid;
    grid-template-rows: 3.3rem 3.3rem 1rem;
    row-gap: 10px;
}

.form-group {
    display: grid;
    grid-template-rows: 1rem 1rem auto;
    row-gap: 5px;
}

.form-group label {}

.form-group input {
    height: 2rem;
    font-size: 1.2rem;
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 0px 5px;
}

.form-group input:hover,
.form-group input:focus {
    border: 1px solid var(--color-default-dark);
    outline-color: var(--color-default-dark);
}

#forgotPasswordLink {
    text-decoration: none;
    font-size: 0.8rem;
}

.form-operations {
    grid-area: operations;
    display: flex;
    justify-content: space-around;
}
</style>