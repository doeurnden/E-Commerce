<template>
    <div class="container">
        <aside class="aside-navbar">
            <div class="logo-brand">
                <div class="logo">
                    <div><font-awesome-icon class="icon" icon="store-alt" /></div>
                    <div><h2>DEN T-SHIRT</h2></div>
                </div>
                <div class="take-down">
                    <!-- <font-awesome-icon icon="caret-down" /> -->
                    <font-awesome-icon class="icon" icon="chevron-down" />
                </div>
            </div>
            <div class="admin-navbar">
                <div>
                    <div>
                        
                        <p>Dashboard</p>
                    </div>
                </div>
                <div></div>
            </div>
        </aside>
        <aside class="aside-info"></aside>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container{
    width: 90vw;
    height: 90vh;
    background-color: #2e2e48;
    color: white;
    display: flex;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .aside-navbar{
        width: 20%;
        background-color: #565664;
        .logo-brand{
            width: 100%;
            height: 10%;
            display: flex;
            // justify-content: space-between;
            .logo{
                width: 70%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .icon{
                    font-size: 2rem;
                }
            }
            .take-down{
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon{
                    border: 2px solid rgb(255, 255, 255);
                    border-radius: 50%;
                    // padding: .2rem;
                }
            }
        }
        .admin-navbar{
            width: 100%;
            height: 90%;
        }
    }
    .aside-info{
        width: 80%;
    }
}
</style>