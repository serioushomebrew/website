<?php 
    require_once '../github-webhook-pull.php';
    if(!isset($_GET['token']) || strcmp($_GET['token'], $token) !== 0)
    {
        echo 'DENIED';
        exit;
    }

    exec('/usr/local/git/bin/git pull 2>&1', $result);
    print_r($result);
