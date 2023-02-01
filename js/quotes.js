var quotes =[
    '<q>Be yourself; everyone else is already taken.</q> <span class="d-block fw-bold">― Oscar Wilde</span>',
    '<q>Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.</q><span class="d-block fw-bold"> ― Albert Einstein</span>',
    ' <q>So many books, so little time.</q> <span class="d-block fw-bold"> ― Frank Zappa</span>',
    ' <q>A room without books is like a body without a soul.</q><span class="d-block fw-bold"> ― Marcus Tullius Cicero</span>',
    ' <q>True sorrow is as rare as true love.</q><span class="d-block fw-bold"> ― Marcus Tullius Cicero</span>',
    ' <q>RELIGION: BECAUSE THINKING IS HARD.</q><span class="d-block fw-bold"> ― Dan Brown, Origin</span>',
    ' <q>He’s telling me a secret—his lips were made for kissing. I’ll never tell a soul as long as he doesn’t stop. I should stop.</q><span class="d-block fw-bold"> ― Dianna Roman, Until I Saw You</span>',
    ' <q>As the old adage goes: ‘Men plan, and God laughs.</q><span class="d-block fw-bold"> ― Marcus Tullius Cicero</span>',
    ' <q>Hitler had the right idea, he was just an underachiever.</q><span class="d-block fw-bold"> ― Bill Hicks</span>',
    ' <q>If you tell the truth, you do not have to remember anything.</q><span class="d-block fw-bold"> ― Mark Twain</span>',
    ' <q>Be the change that you wish to see in the world.</q><span class="d-block fw-bold"> ― Mahatma Gandhi</span>',
    ' <q>You only live once, but if you do it right, once is enough.</q><span class="d-block fw-bold"> ― Mae West</span>',
    ' <q>Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.</q><span class="d-block fw-bold"> ― Bernard M. Baruch</span>',
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()* quotes.length)
    document.getElementById('qouteOutput').innerHTML = quotes[randomNumber];
}