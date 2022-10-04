 var btn = document.getElementsByClassName('btn')
 btn.addEventListener('click', function Onclick(event) {
     btn.classList.add('fade')
     let recognition = new webkitSpeechRecognition()
     recognition.lang = 'en-GB'
     recognition.addEventListener('result', (e) => {
         document.querySelector('.text').value = e.results[0][0].transcript
         btn.classList.remove('fade')
     })
     recognition.start()
 })