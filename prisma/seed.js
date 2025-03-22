import prisma from "./prisma-client.js";

async function main() {
  const carbonara = await prisma.recipe.upsert({
    where: { name: "Ultimate spaghetti carbonara" },
    update: {},
    create: {
      name: "Ultimate spaghetti carbonara",
      createdAt: new Date(),
      ingredients: {
        create: [
          { name: "100g pancetta" },
          { name: "50g pecorino cheese" },
          { name: "50g parmesan" },
          { name: "3 large eggs" },
          { name: "350g spaghetti" },
          { name: "2 plump garlic cloves, peeled and left whole" },
          { name: "50g unsalted butter" },
          { name: "sea salt and freshly ground black pepper" },
        ],
      },
      steps: {
        create: [
          { name: "Put a large saucepan of water on to boil." },
          {
            name: "Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.",
          },
          {
            name: "Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.",
          },
          {
            name: "Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
          },
          {
            name: "Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.",
          },
          {
            name: "While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.",
          },
          {
            name: "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.",
          },
          {
            name: "Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Don’t worry if a little water drops in the pan as well (you want this to happen) and don’t throw the pasta water away yet.",
          },
          {
            name: "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
          },
          {
            name: "Take the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
          },
          {
            name: "Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You don’t want it wet, just moist. Season with a little salt, if needed.",
          },
          {
            name: "Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived.",
          },
        ],
      },
    },
  });

  const muffins = await prisma.recipe.upsert({
    where: { name: "12 Chocolate chip muffins" },
    update: {},
    create: {
      name: "12 Chocolate chip muffins",
      createdAt: new Date(),
      ingredients: {
        create: [
          { name: "250g self-raising flour" },
          { name: "1 tsp bicarbonate of soda" },
          {
            name: "150g chocolate chips, milk, white, dark or a mix of all three",
          },
          { name: "100g golden caster sugar" },
          { name: "2 eggs, lightly beaten" },
          { name: "150ml natural yogurt" },
          { name: "100g unsalted butter, melted" },
        ],
      },
      steps: {
        create: [
          {
            name: "Heat the oven to 200C/180C fan/gas 6 and line a 12-hole muffin tin with paper cases.",
          },
          {
            name: "Sift the flour and bicarbonate of soda into a large bowl.",
          },
          {
            name: "Stir in the chocolate chips and sugar.",
          },
          {
            name: "Add the beaten eggs, yogurt and butter, and stir to combine. It doesn’t matter if the mixture looks a bit lumpy, it’s more important not to overmix or the muffins will turn out tough.",
          },
          {
            name: "Fill the paper cases and bake for 20-25 mins until risen and golden brown.",
          },
          {
            name: "Transfer to a rack to cool – or eat slightly warm. Will keep in an airtight container for three days.",
          },
        ],
      },
    },
  });
  console.log({ carbonara, muffins });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
