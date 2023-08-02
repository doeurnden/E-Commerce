<template>
    <div class="container">
        <aside class="aside-navbar">
            <div class="logo-brand">
                <div class="logo">
                    <div><font-awesome-icon class="icon" icon="store-alt" /></div>
                    <div>
                        <h2>DEN T-SHIRT</h2>
                    </div>
                </div>
                <div class="take-down">
                    <font-awesome-icon class="icon" icon="chevron-down" />
                </div>
            </div>
            <div class="admin-navbar">
                <div class="admin-navbar-top">
                    <div class="icon-name">
                        <font-awesome-icon class="icon" icon="table-cells-large" />
                        <p>Dashboard</p>
                    </div>
                    <div class="icon-name">
                        <font-awesome-icon class="icon" icon="money-bill" />
                        <p>Transactions</p>
                    </div>
                    <div class="icon-name">
                        <font-awesome-icon class="icon" :icon="['fas', 'box-open']" />
                        <p>Products</p>
                    </div>
                    <div class="icon-name">
                        <font-awesome-icon icon="list" />
                        <p>Order</p>
                    </div>
                    <div class="icon-name">
                        <font-awesome-icon class="icon" icon="user-group" />
                        <p>Customer</p>
                    </div>
                    <div class="icon-name">
                        <font-awesome-icon class="icon" icon="envelope" />
                        <p>Message</p>
                    </div>
                </div>
                <div class="admin-navbar-bottom">
                    <div class="icon-name">
                        <font-awesome-icon class="icon" icon="gear" />
                        <P>Settings</P>
                    </div>
                    <div class="icon-name">
                        <font-awesome-icon class="icon" icon="arrow-right" />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </aside>
        <aside class="aside-info">
            <div class="info-bar">
                <div class="navbar-content">
                    <h1>Dashboard</h1>
                </div>
                <div class="admin-profile"></div>
            </div>
            <div class="info-detel"></div>
        </aside>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 90vw;
    height: 90vh;
    background-color: #2e2e48;
    color: white;
    display: flex;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .aside-navbar {
        width: 20%;
        height: 100%;
        background-color: #565664;

        .logo-brand {
            width: 100%;
            height: 20%;
            display: flex;

            // justify-content: space-between;
            .logo {
                width: 70%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .icon {
                    font-size: 2rem;
                }
            }

            .take-down {
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;

                .icon {
                    border: 2px solid rgb(255, 255, 255);
                    border-radius: 50%;
                    // padding: .2rem;
                }
            }
        }

        .admin-navbar {
            width: 100%;
            height: 80%;
            display: flex;
            flex-direction: column;

            .admin-navbar-top {
                width: 100%;
                height: 80%;
                display: flex;
                flex-direction: column;

                .icon-name {
                    height: 3rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    padding-left: 1rem;

                    .icon {
                        width: 1rem;
                        height: 1rem;
                    }
                }

                :hover {
                    // border-radius: 5px;
                    background: #ffffff;
                    color: #475be8;
                    font-weight: bold;
                }
            }

            .admin-navbar-bottom {
                width: 100%;
                height: 20%;

                // background-color: cadetblue;
                .icon-name {
                    height: 50%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    padding-left: 1rem;

                    .icon {
                        width: 1rem;
                        height: 1rem;
                    }
                }

                :hover {
                    background: #ffffff;
                    color: #475be8;
                    font-weight: bold;
                }
            }
        }
    }

    .aside-info {
        height: 100%;
        width: 80%;
        .info-bar{
            height: 20%;
            width: 100%;
            display: flex;
            .navbar-content{
                width: 50%;
            }
            .admin-profile{
                width: 50%;
            }
        }
        .info-detel{
            width: 100%;
            height: 80%;
        }
    }
}</style>