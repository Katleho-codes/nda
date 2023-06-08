<!-- $data_uri = "data:image/png;base64,iVBORw0K...";
$encoded_image = explode(",", $data_uri)[1];
$decoded_image = base64_decode($encoded_image);
file_put_contents("signature.png", $decoded_image); -->

<?php
$img = $_POST['signature-pad'];
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));
file_put_contents('./storage/signature.png', $data);