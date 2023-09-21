<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Taskist</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" aria-current="page" to="/app">Todo</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/latihan">Latihan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/filtering">Filtering</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/lifecycle">Lifecycle</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/form">form</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/LatihanForm">LatihanForm</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/list">list</a>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" aria-current="page" to="/app/article">Article</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>