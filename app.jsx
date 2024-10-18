import React from "react";
import { createRoot } from "react-dom/client";

function Recipe () {
  return <div>
    <h1>Ultimate spaghetti carbonara recipe</h1>
    <div>
      <div>
        <h2>Details</h2>
        <ul>
          <li>Difficulty: Easy</li>
          <li>Servings: 4</li>
          <li>Prep time: 20 min</li>
          <li>Keywords: pasta, bacon, creamy</li>
        </ul>
        <h2>Ingredients</h2>
        <ul>
          <li>100g pancetta</li>
          <li>50g pecorino cheese</li>
          <li>50g parmesan</li>
          <li>3 large eggs</li>
          <li>350g spaghetti</li>
          <li>2 plump garlic cloves, peeled and left whole</li>
          <li>50g unsalted butter</li>
          <li>sea salt and freshly ground black pepper</li>
        </ul>
        <h2>Method</h2>
        <div>
          <h3>Step 1</h3>
          <p>Put a large saucepan of water on to boil.</p>
        </div>
        <div>
          <h3>Step 2</h3>
          <p>
            Finely chop the 100g pancetta, having first removed any rind. Finely
            grate 50g pecorino cheese and 50g parmesan and mix them together.
          </p>
        </div>
        <div>
          <h3>Step 3</h3>
          <p>
            Beat the 3 large eggs in a medium bowl and season with a little
            freshly grated black pepper. Set everything aside.
          </p>
        </div>
        <div>
          <h3>Step 4</h3>
          <p>
            Add 1 tsp salt to the boiling water, add 350g spaghetti and when the
            water comes back to the boil, cook at a constant simmer, covered,
            for 10 minutes or until al dente (just cooked).
          </p>
        </div>
        <div>
          <h3>Step 5</h3>
          <p>
            Squash 2 peeled plump garlic cloves with the blade of a knife, just
            to bruise it.
          </p>
        </div>
        <div>
          <h3>Step 6</h3>
          <p>
            While the spaghetti is cooking, fry the pancetta with the garlic.
            Drop 50g unsalted butter into a large frying pan or wok and, as soon
            as the butter has melted, tip in the pancetta and garlic.
          </p>
        </div>
        <div>
          <h3>Step 7</h3>
          <p>
            Leave to cook on a medium heat for about 5 minutes, stirring often,
            until the pancetta is golden and crisp. The garlic has now imparted
            its flavour, so take it out with a slotted spoon and discard.
          </p>
        </div>
        <div>
          <h3>Step 8</h3>
          <p>
            Keep the heat under the pancetta on low. When the pasta is ready,
            lift it from the water with a pasta fork or tongs and put it in the
            frying pan with the pancetta. Don’t worry if a little water drops in
            the pan as well (you want this to happen) and don’t throw the pasta
            water away yet.
          </p>
        </div>
        <div>
          <h3>Step 9</h3>
          <p>
            Mix most of the cheese in with the eggs, keeping a small handful
            back for sprinkling over later.
          </p>
        </div>
        <div>
          <h3>Step 10</h3>
          <p>
            Take the pan of spaghetti and pancetta off the heat. Now quickly
            pour in the eggs and cheese. Using the tongs or a long fork, lift up
            the spaghetti so it mixes easily with the egg mixture, which
            thickens but doesn’t scramble, and everything is coated.
          </p>
        </div>
        <div>
          <h3>Step 11</h3>
          <p>
            Add extra pasta cooking water to keep it saucy (several tablespoons
            should do it). You don’t want it wet, just moist. Season with a
            little salt, if needed.
          </p>
        </div>
        <div>
          <h3>Step 12</h3>
          <p>
            Use a long-pronged fork to twist the pasta on to the serving plate
            or bowl. Serve immediately with a little sprinkling of the remaining
            cheese and a grating of black pepper. If the dish does get a little
            dry before serving, splash in some more hot pasta water and the
            glossy sauciness will be revived.
          </p>
        </div>
      </div>
      <img
        src="./img/carbonara.jpg"
        alt="A picture of pasta carbonara"
        class="recipe-picture"
      />
    </div>
    <div>
      <h2>Tips...</h2>
      <p>
        Pasta water can be dripped in as you transfer the spaghetti to the hot
        frying pan. Everything mingles to make a light, silky smooth sauce.
      </p>
    </div>
  </div>;
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<Recipe />);
