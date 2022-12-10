<template>
    <div class="container py-4">

        <div class="p-5 mb-4 bg-light rounded-3 justify-content-center">
            <div class="container-fluid py-5 ">
                <div class="calculator card">

                    <div class="calculator-screen z-depth-1">
                        {{ expression }}
                    </div>

                    <form @submit.prevent="calculate">
                        <div class="calculator-keys">

                            <button type="button" class="operator btn btn-info"
                                @click.stop="expression += '+'">👽</button>
                            <button type="button" class="operator btn btn-info"
                                @click.stop="expression += '-'">💀</button>
                            <button type="button" class="operator btn btn-info"
                                @click.stop="expression += '*'">👻</button>
                            <button type="button" class="operator btn btn-info"
                                @click.stop="expression += '/'">😱</button>

                            <button type="button" @click.stop="expression += '7'"
                                class="btn btn-light waves-effect">7</button>
                            <button type="button" @click.stop="expression += '8'"
                                class="btn btn-light waves-effect">8</button>
                            <button type="button" @click.stop="expression += '9'"
                                class="btn btn-light waves-effect">9</button>


                            <button type="button" @click.stop="expression += '4'"
                                class="btn btn-light waves-effect">4</button>
                            <button type="button" @click.stop="expression += '5'"
                                class="btn btn-light waves-effect">5</button>
                            <button type="button" @click.stop="expression += '6'"
                                class="btn btn-light waves-effect">6</button>


                            <button type="button" @click.stop="expression += '1'"
                                class="btn btn-light waves-effect">1</button>
                            <button type="button" @click.stop="expression += '2'"
                                class="btn btn-light waves-effect">2</button>
                            <button type="button" @click.stop="expression += '3'"
                                class="btn btn-light waves-effect">3</button>


                            <button type="button" @click.stop="expression += '0'"
                                class="btn btn-light waves-effect">0</button>
                            <button type="button" class="decimal function btn btn-secondary"
                                @click.stop="expression += '.'">.</button>
                            <button type="button" class="all-clear function btn btn-danger btn-sm"
                                @click.stop="expression = ''">AC</button>

                            <button type="submit" class="equal-sign operator btn btn-default">=</button>

                        </div>
                    </form>
                </div>
            </div>

            <div class="container-fluid py-5 ">
                <div class="calculator card">

                    <p>👽 = +</p>
                    <p>💀 = -</p>
                    <p>👻 = *</p>
                    <p>😱 = /</p>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { evaluate } from "mathjs";

export default {
    data() {
        return {
            expression: "",
        };
    },
    methods: {
        calculate() {
            this.expression = evaluate(this.expression)
        }
    }
}

</script>

<style>
.calculator {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
}

.calculator-screen {
    width: 100%;
    height: 80px;
    border: none;
    background-color: #252525;
    color: #fff;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
    font-size: 4rem;
}

button {
    height: 60px;
    font-size: 2rem !important;
}

.equal-sign {
    height: 98%;
    grid-area: 2 / 4 / 6 / 5;
}

.calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
}
</style>