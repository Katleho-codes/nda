<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./scss/style.css" />
    <title>NDA</title>
  </head>

  <body>

    <div class="wrapper">

      <canvas id="signature-pad" class="signature-pad" width="400" height="200"></canvas>
      <!-- <div>
          <input type="hidden" name="signature-pad" />
        </div>
        <button type="submit">Submit</button>
      </div> -->

    </div>
    <div>
      <button id="save">Save</button>
      <button id="clear">Clear</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/signature_pad@4.0.0/dist/signature_pad.umd.min.js"></script>

    <script src="./index.js"></script>
  </body>

</html>