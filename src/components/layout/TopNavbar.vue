<template>
    <nav>
        <header>練習系統</header>
        <ul>
            <li>
                <router-link to="/">首頁</router-link>
            </li>
            <li>
                <router-link to="/register">註冊</router-link>
            </li>
            <li>
                <router-link to="/login">登入</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: white;
    border-bottom: 1px solid var(--color-default-dark);    
    padding: 0px 10%;
    height: 48px;
    display: flex;
    align-items: center;
}

header {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-brand);
}

ul {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 10px 30px;
}

li {
    list-style: none;
    padding: 3px 12px;    
    margin: 3px 0px;
}

li:hover {
    border-bottom: 4px solid var(--color-brand);    
}

li a {
    text-decoration: none;
    color: var(--color-info);
}


</style>