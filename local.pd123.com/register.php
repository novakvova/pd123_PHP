<?php include $_SERVER["DOCUMENT_ROOT"] . "/head.php"; ?>

<main>
    <div class="row justify-content-sm-center h-100">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div class="card shadow-lg">
                <div class="card-body p-5">
                    <h1 class="fs-4 card-title fw-bold mb-4">Реєстрація</h1>
                    <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
                        <div class="mb-3">
                            <label class="mb-2 text-muted" for="name">Ім'я</label>
                            <input id="name" type="text" class="form-control" name="name" value="" required=""
                                   autofocus="">
                            <div class="invalid-feedback">
                                Вкажіть ім'я
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="mb-2 text-muted" for="email">Електронна адреса</label>
                            <input id="email" type="email" class="form-control" name="email" value="" required="">
                            <div class="invalid-feedback">
                                Вкажіть пошту
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="mb-2 text-muted" for="password">Пароль</label>
                            <input id="password" type="password" class="form-control" name="password" required="">
                            <div class="invalid-feedback">
                                Вкажіть пароль
                            </div>
                        </div>

                        <p class="form-text text-muted mb-3">
                            By registering you agree with our terms and condition.
                        </p>

                        <div class="align-items-center d-flex">
                            <button type="submit" class="btn btn-primary ms-auto">
                                Реєструватися
                            </button>
                        </div>
                    </form>
                </div>
                <div class="card-footer py-3 border-0">
                    <div class="text-center">
                        Already have an account? <a href="login.php" class="text-dark">Вхід</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</main>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/footer.php"; ?>

