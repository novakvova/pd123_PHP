<?php include $_SERVER["DOCUMENT_ROOT"] . "/head.php"; ?>

<main>
    <div class="row justify-content-sm-center h-100">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div class="card shadow-lg">
                <div class="card-body p-5">
                    <h1 class="fs-4 card-title fw-bold mb-4">Вхід</h1>
                    <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
                        <div class="mb-3">
                            <label class="mb-2 text-muted" for="email">Електронна пошта</label>
                            <input id="email" type="email" class="form-control" name="email" value="" required="" autofocus="">
                            <div class="invalid-feedback">
                                Вкажіть пошту
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="mb-2 w-100">
                                <label class="text-muted" for="password">Пароль</label>
                                <a href="forgot.html" class="float-end">
                                    Відновити пароль?
                                </a>
                            </div>
                            <input id="password" type="password" class="form-control" name="password" required="">
                            <div class="invalid-feedback">
                                Пароль є обов'язковим
                            </div>
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="form-check">
                                <input type="checkbox" name="remember" id="remember" class="form-check-input">
                                <label for="remember" class="form-check-label">Запамятати мене</label>
                            </div>
                            <button type="submit" class="btn btn-primary ms-auto">
                                Вхід
                            </button>
                        </div>
                    </form>
                </div>
                <div class="card-footer py-3 border-0">
                    <div class="text-center">
                        У вас немає акууту? <a href="register.php" class="text-dark">Створити зараз</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/footer.php"; ?>

