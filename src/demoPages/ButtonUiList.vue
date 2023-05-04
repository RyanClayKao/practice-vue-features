<template>
    <div class="container">
        <div class="btn-list-container">
            <div class="btn-row">
                <label>主色(品牌色)</label>
                <div class="btn-pair">
                    <button type="button" class="btn btn-brand-outline">取消</button>
                    <button type="button" class="btn btn-brand">確定</button>
                </div>
            </div>
            <div class="btn-row">
                <label>Success</label>
                <div class="btn-pair">
                    <button type="button" class="btn btn-success-outline">取消</button>
                    <button type="button" class="btn btn-success">確定</button>
                </div>
            </div>
            <div class="btn-row">
                <label>Info</label>
                <div class="btn-pair">
                    <button type="button" class="btn btn-info-outline">取消</button>
                    <button type="button" class="btn btn-info">確定</button>
                </div>
            </div>
            <div class="btn-row">
                <label>Warn</label>
                <div class="btn-pair">
                    <button type="button" class="btn btn-warn-outline">取消</button>
                    <button type="button" class="btn btn-warn">確定</button>
                </div>
            </div>
            <div class="btn-row">
                <label>Danger</label>
                <div class="btn-pair">
                    <button type="button" class="btn btn-danger-outline">取消</button>
                    <button type="button" class="btn btn-danger">確定</button>
                </div>
            </div>
            <div class="btn-row">
                <label>Default</label>
                <div class="btn-pair">
                    <button type="button" class="btn btn-default-outline">取消</button>
                    <button type="button" class="btn btn-default">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    height: 100vh;
    width: auto;
    padding: 10% 0px;

    display: flex;
    justify-content: center;

}

.btn-list-container {
    width: 400px;
    display: grid;
    grid-template-rows: repeat(7, 50px);
    grid-template-columns: auto;
}

.btn-row {
    display: grid;    
    grid-template-columns: 0.5fr 1fr;
    column-gap: 5px;
    align-items: center;
}

.btn-pair {
    display: flex;
    justify-content: space-evenly;
}
</style>