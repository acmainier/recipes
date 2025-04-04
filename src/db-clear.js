import prisma from "../prisma/prisma-client.js";

async function main() {
  await prisma.ingredient.deleteMany();
  await prisma.step.deleteMany();
  await prisma.recipe.deleteMany();
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
