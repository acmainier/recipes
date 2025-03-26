import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
const port = 3000;

// GET all recipes in /recipes from database in JSON

app.get("/recipes", async (req, res) => {
  const recipes = await prisma.recipe.findMany({
    include: {
      ingredients: true,
      steps: true,
    },
  });
  res.send(recipes);
});

// GET recipe 1 in /recipes/1 from database in JSON

app.get("/recipes/:id", async (req, res) => {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: parseInt(req.params.id, 10),
    },
    include: {
      ingredients: true,
      steps: true,
    },
  });
  res.send(recipe);
});

// POST new recipe from /recipes/new to database in JSON

app.post("/recipes/new", async (req, res) => {
  const newRecipe = await prisma.recipe.create({
    data: {
      name: req.body.name,
      createdAt: new Date(),
      ingredients: {
        create: req.body.ingredients,
      },
      steps: {
        create: req.body.steps,
      },
    },
  });
  res.json(newRecipe.id);
});

// POST update recipe 1 from recipes/update/1 to database in JSON


// DELETE recipe 1 from recipes/delete/1 in database in JSON

app.delete("/recipes/delete/:id", async (req) => {

const deleteIngredients = prisma.ingredient.deleteMany({
    where: {
      recipeId: parseInt(req.params.id, 10),   
    }
})

const deleteSteps = prisma.step.deleteMany({
    where: {
      recipeId: parseInt(req.params.id, 10),   
    }
})

const deleteRecipe = prisma.recipe.delete({
    where: {
id: parseInt(req.params.id, 10),
    },
})
await prisma.$transaction([deleteIngredients, deleteSteps, deleteRecipe])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
