/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Mysterious Cookie found Missing!!',
    date: 'March 11th, 2020',
    firstParagraph: `Bonbon sesame snaps dragée lemon drops jujubes bear claw cake topping donut. Cookie wafer muffin gingerbread icing halvah danish caramels. Bear claw cupcake cake sweet pudding muffin cookie cheesecake. Cake cake liquorice tart cookie halvah chocolate. Candy canes cake tootsie roll chocolate sweet roll. Powder chupa chups toffee cookie wafer. Gummi bears tootsie roll sweet. Chocolate bar bear claw chocolate cake pastry. Chocolate lemon drops sweet roll. Chocolate bar chocolate apple pie gingerbread chocolate. Sweet pastry donut lemon drops bonbon. Marzipan croissant chocolate sesame snaps cotton candy soufflé. Candy sweet roll tart bear claw. Bear claw candy canes cotton candy ice cream icing wafer jelly tart pastry.`,

    secondParagraph: `Toffee caramels macaroon candy lollipop ice cream tart tiramisu. Pie marzipan carrot cake ice cream halvah cheesecake. Jelly cake caramels gummies. Chocolate cake donut carrot cake fruitcake cupcake icing. Carrot cake chocolate tiramisu cake gingerbread marzipan. Halvah marshmallow gummi bears jelly-o fruitcake candy canes. Cotton candy cake donut ice cream chupa chups pudding ice cream. Ice cream marzipan bonbon croissant cotton candy gingerbread topping lollipop jujubes. Sesame snaps bear claw soufflé jelly-o liquorice cookie soufflé. Sweet roll oat cake pastry ice cream danish powder liquorice. Bear claw tiramisu soufflé candy canes bonbon brownie. Sesame snaps pie oat cake caramels topping candy. Muffin jelly-o chocolate dessert jujubes.`,

    thirdParagraph: `Brownie toffee cheesecake toffee apple pie muffin. Dragée gingerbread jelly-o. Oat cake candy canes tiramisu gummi bears fruitcake. Ice cream bear claw jelly beans macaroon marzipan tart sesame snaps pudding. Liquorice marzipan croissant tiramisu soufflé jelly croissant sesame snaps topping. Sweet roll dessert powder chocolate lollipop jelly beans icing. Tart biscuit carrot cake chupa chups biscuit pastry oat cake bear claw. Carrot cake pastry bear claw gingerbread. Sugar plum cheesecake sweet roll cheesecake marshmallow. Tootsie roll cookie dessert fruitcake. Lollipop lemon drops tiramisu carrot cake gingerbread lollipop tart. Jujubes lollipop danish bear claw liquorice sweet. Cake lemon drops lollipop chupa chups cupcake cake jelly beans danish macaroon. Jelly beans icing ice cream cheesecake oat cake.`
  },
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: ✅
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above. ✅

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component. ✅

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.✅

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.✅
*/

//MY CODE HERE 

//Step 1: Create a function that creates a component. You will want your component to look like the template below: 
//Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

 function createArticle(info){
  //create new elements
  const article = document.createElement('div')
  const h2 = document.createElement('h2')
  const date = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const btn = document.createElement('span')

  //setup the structure/parent:child of our elements
  article.append(h2, date, p1, p2, p3, btn)

  //add classes the elements
  article.classList.add('article')
  date.classList.add('date')
  btn.classList.add('expandButton')

  //add textContent
  h2.textContent = info.title
  date.textContent = info.date
  p1.textContent = info.firstParagraph
  p2.textContent = info.secondParagraph
  p3.textContent = info.thirdParagraph
  btn.textContent = 'expand Button'

  //Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
  btn.addEventListener('click', (event) =>{
    // console.log('button was clicked!', event.target) testing
    article.classList.toggle('article-open')
  })

  //return the entire component
    return article
 }

//grab the parent
const parent = document.querySelector('.articles')

//Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
// data.map(showData => {
//   console.log("let's console the data!", showData.date)
  parent.append(createArticle(showData))
  
  return data
})
