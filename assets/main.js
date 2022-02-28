document.addEventListener("DOMContentLoaded", () => {

  const advice_title = document.getElementById('quoteID');
  const quote = document.getElementById('quote');
  const generator = document.getElementById('btn');

  function adviceGenerate(){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
    .then(res => res.json())
    .then (data => {
        advice_title.innerText = 'ADVICE #' + data['slip']['id']
        quote.innerText = '"' + data['slip']['advice'] + '"'
    })
  };
  
  generator.addEventListener("click", adviceGenerate);

  adviceGenerate();

});