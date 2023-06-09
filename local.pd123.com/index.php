<?php include $_SERVER["DOCUMENT_ROOT"] . "/head.php"; ?>

<main>
    <div class="container">
        <h1 class="text-center">Список користувачів</h1>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <?php
            include $_SERVER["DOCUMENT_ROOT"] . "/connection_database.php";
            if (isset($dbh)) {
                // use the connection here
                $stm = $dbh->query('SELECT id, name, email FROM users');
                $rows = $stm->fetchAll();
                foreach ($rows as $row) {
                    echo "<tr>
                            <th>$row[0]</th>
                            <td>$row[1]</td>
                            <td>$row[2]</td>
                            <td>
                                <a href='/delete.php?id=$row[0]' class='text-danger' data-delete='$row[0]'>
                                    <i class='fa fa-times fs-4'></i>
                                </a>
                            </td>
                           </tr>";
                }
            }
            ?>

            </tbody>
        </table>

    </div>
</main>
<?php include $_SERVER["DOCUMENT_ROOT"] . "/modals/deleteModal.php"; ?>

<script src="/js/bootstrap.bundle.min.js"></script>
<script src="/js/axios.min.js"></script>

<script>
    window.addEventListener("load", (event) => {
        let hrefDelete="";
        const delBtns = document.querySelectorAll("[data-delete]");
        const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
        for (i=0;i<delBtns.length; i++) {
            delBtns[i].onclick = function(e) {
                e.preventDefault();
                console.log("Ви хочете видалить елемент");
                hrefDelete=this.href;
                deleteModal.show();
            }
        }
        document.getElementById("modalDeleteYes").onclick=function () {
            axios.post(hrefDelete).then(resp => {
               deleteModal.hide();
               location.reload();
            });
        }
    });
</script>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/footer.php"; ?>

