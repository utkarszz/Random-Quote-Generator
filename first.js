const quotes = [
"Success is not final; failure is not fatal. It is the courage to continue that counts. — Winston Churchill",
"It is better to fail in originality than to succeed in imitation. — Herman Melville",
"The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
"Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. — Dale Carnegie",
"Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race. — Calvin Coolidge",
"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind. — Mister Rogers",
"Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable. — John Wooden",
"I never dreamed about success. I worked for it. — Estée Lauder",
"Success is getting what you want; happiness is wanting what you get. — W. P. Kinsella",
"It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid instead of trying to be very intelligent. — Charlie Munger",
"You can't be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute. — Tina Fey",
"When I believe in something, I'm like a dog with a bone. — Melissa McCarthy",
"And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom. — Anaïs Nin",
"The standard you walk past is the standard you accept. — David Hurley",
"I've searched all the parks in all the cities and found no statues of committees. — Gilbert K. Chesterton",
"Success is stumbling from failure to failure with no loss of enthusiasm. — Winston Churchill",
"Keep your eyes on the stars and your feet on the ground. — Theodore Roosevelt",
"Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence. — Eleanor Roosevelt",
"Perfection is not attainable. But if we chase perfection we can catch excellence. — Vince Lombardi"
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
  const index = Math.floor(Math.random()*21);

  quote.textContent = quotes[index];
})