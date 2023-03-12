let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #140f10;">Una abogada que estudia programación. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
