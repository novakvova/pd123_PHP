<?php
$name = "";
$email= "";
$password= "";
if($_SERVER["REQUEST_METHOD"]=="POST") {
    //echo "<br/><br/><br/>";
    if(isset($_POST["name"]))
        $name=$_POST["name"]; //Супер глобальний масив, який зберігає значенян полів форми
    if(isset($_POST["email"]))
        $email=$_POST["email"]; //Супер глобальний масив, який зберігає значенян полів форми
    if(isset($_POST["password"]))
        $password=$_POST["password"]; //Супер глобальний масив, який зберігає значенян полів форми
    if(!empty($name)&&!empty($email)&&!empty($password)) {
        try {
            //підклюичти до Бази даних
            $dbh = new PDO('mysql:host=localhost;dbname=pd123', "root", "123456");
            //Cтворює запит до БД
            $sql = "INSERT INTO users (name, email, password) VALUES(?, ?, ?);";
            $stmt= $dbh->prepare($sql); //сворити параметризований запит
            $stmt->execute([$name, $email, $password]);
            $dbh = null;
            header('Location: /'); //Перехід на головну сторінку
            exit;
        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    //echo "<h3>$name</h3>";
}
?>
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
                            <input id="name" type="text" class="form-control" name="name" value="<?php echo $name; ?>" required=""
                                   autofocus="">
                            <div class="invalid-feedback">
                                Вкажіть ім'я
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="mb-2 text-muted" for="email">Електронна адреса</label>
                            <input id="email" type="email" class="form-control" name="email" value="<?php echo $email; ?>" required="">
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

