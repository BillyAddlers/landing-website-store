<template>
    <div id="featuring">
        <div class="row">
            <div class="col" align="right">
                <img class="profile-image mb-3 mb-lg-0 mb-lg-5 mr-md-0" src="../assets/images/products/audio2 2.jpg" alt="Avatar">
            </div>
            <div class="col" align="left">
                <h4>Featuring Product</h4>
                <h5>ATH-CKX9iS</h5>

                <p> Music is your energy for life – the fuel for your heart and soul.
                    SonicFuel® headphones are specifically designed for active, daily use, to power you forward by delivering extraordinary comfort, style and an immersive listening experience that never sounds artificial, processed or filtered.
                    Just pure sonic goodness for the high-octane tempo of your life.</p>
                <p> The ATH-CKX9iS SonicFuel® in-ear headphones feature stay-in-place fit, providing unique comfort in addition to optimal sound.
                    The C-tip configuration nestles within the ear where it locks in place for extra stability.
                    Customize your comfort with a multitude of C-tip & silicone eartip sizes or use the included Comply™ foam eartips for true sonic immersion.</p>

                <a class="btn btn-success" href="https://www.bukalapak.com/p/hobi-koleksi/musik/sound-system-rekaman/2etbvf-jual-audio-technica-ath-ckx9is" role="button">Buy now</a>

                <router-link class="btn btn-info" to="/products/featuring">Product Details</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Featuring"
    }
</script>

<style lang="scss">
    #featuring {
        .profile-image {
            width: auto;
            height: 40rem;
            object-fit: cover;
        }
        .row {
            margin: 2rem;
            .align-left {
                alignment: left;
            }
            .align-right {
                alignment: right;
            }
        }
    }
</style>
