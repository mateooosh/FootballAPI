<template>
    <footer class="footer p-4">
        <div class="container">
            <span class="text-muted">All Rights Reserved © 2020 Copyright: 
                <a class="font-weight-bold" href="#">MB Software, Inc.</a> 
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: #6c757d;

    &:hover{
        color: #3f4347;
    }
}

footer{
    border-top: 1px solid rgb(230, 230, 230);
    letter-spacing: 2px;
}
</style>