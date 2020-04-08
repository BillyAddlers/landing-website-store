<template>
    <div id="footer">
        <footer>
            <div class="jumbotron">
                <div class="row">
                    <div class="col-sm-6">
                        Audiophile Store is a Website dedicated to Audiophile. We offer the best price for the best products.
                    </div>
                    <div class="col-sm-3">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="https://github.com/BillyAddlers/landing-store-vue">GitHub</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">

                    </div>
                </div>
                <span title="Made by github/BillyAddlers. Click over (C) to see my profile!">
                    <a class="no-padding"><a class="no-padding" href="https://github.com/BillyAddlers">©</a> 2019-{{yearNow}} Riichi Rusdiana | J-Dev . All right reserved.</a>
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
    const date = new Date();
    export default {
        name: "Footer",
        data: function () {
            return {
                yearNow: date.getFullYear()
            }
        },
    }
</script>

<style lang="scss">
</style>
