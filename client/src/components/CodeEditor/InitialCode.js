let initialHTML = `
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>

<body>
    <button>Welcome to Code Command!</button>
</body>

</html>`;

let initialCSS = `
button {
  animation: wiggle 2s linear infinite;
}

body {
  background: #000;
  color : white;
}

button {
  position: absolute;
  left : 42.5vw;
  top : 42%;
  height: 5em;
  width: 15em;
  background: #444;
  background: linear-gradient(top, #555, #333);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: Helvetica, Arial, Sans-serif;
  font-size: 1em;
  transform-origin: 50% 5em;
}`;

let initialJS = ``;

export { initialHTML, initialCSS, initialJS };
