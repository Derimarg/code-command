let initialHTML = `
<!-- HTML -->

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>

<body>
    <button>Welcome to CodeOne!</button>
</body>

</html>`;

let initialCSS = `/* CSS */

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
  border-top: 3px solid white;
  border-radius: 0 0 0.2em 0.2em;
  color: #fff;
  font-family: Helvetica, Arial, Sans-serif;
  font-size: 1em;
  transform-origin: 50% 5em;
}`;

let initialJS = `// JavaScript`;

export { initialHTML, initialCSS, initialJS };
