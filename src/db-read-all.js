import prisma from "../prisma/db-server.js";

async function main() {
  const recipe = await prisma.recipe.findMany({
    include: {
      ingredients: true,
      steps: true,
    },
  });
  console.log(recipe);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // eslint-disable-next-line no-undef
    process.exit(1);
  });
