<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../../img/calc.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
                    Emoji Calculator App
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <li class="nav-link"><router-link :to="{ name: 'home' }" class="nav-link" exact>Home</router-link></li>
                        <li class="nav-link"><router-link :to="{ name: 'calculator' }" class="nav-link" exact>Calculator</router-link></li>
                    </div>
                </div>
            </div>
        </nav>
</template>