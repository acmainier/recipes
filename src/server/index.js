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

app.post("/recipes/newRecipe", async (req, res) => {
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

app.post("/recipes/editRecipe/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const ingredients = req.body.ingredients.map((ingredient) => {
    return {
      name: ingredient.name,
      recipeId: id,
    };
  });
  const steps = req.body.steps.map((step) => {
    return {
      name: step.name,
      recipeId: id,
    };
  });

  try {
    const results = await prisma.$transaction([
      prisma.ingredient.deleteMany({
        where: {
          recipeId: id,
        },
      }),
      prisma.ingredient.createMany({
        data: ingredients,
      }),
      prisma.step.deleteMany({
        where: {
          recipeId: id,
        },
      }),
      prisma.step.createMany({
        data: steps,
      }),
      prisma.recipe.update({
        where: {
          id,
        },
        data: {
          name: req.body.name,
        },
        include: {
          ingredients: true,
          steps: true,
        },
      }),
    ]);
    res.json(results[4]);
  } catch (e) {
    console.log("something went wrong", e);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

// DELETE recipe 1 from recipes/delete/1 in database in JSON

app.delete("/recipes/deleteRecipe/:id", async (req, res) => {
  const deleteIngredients = prisma.ingredient.deleteMany({
    where: {
      recipeId: parseInt(req.params.id, 10),
    },
  });

  const deleteSteps = prisma.step.deleteMany({
    where: {
      recipeId: parseInt(req.params.id, 10),
    },
  });

  const deleteRecipe = prisma.recipe.delete({
    where: {
      id: parseInt(req.params.id, 10),
    },
  });

  try {
    const transaction = await prisma.$transaction([
      deleteIngredients,
      deleteSteps,
      deleteRecipe,
    ]);
    return transaction;
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
