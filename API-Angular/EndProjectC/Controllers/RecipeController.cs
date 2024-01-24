using EndProjectC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EndProjectC.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        public List<Recipe> GetAllRecipes()
        {
            return DB.RecipeList;
        }
        [HttpGet]
        public Recipe GetRecipeById(int id)
        {
            Recipe u = DB.RecipeList.FirstOrDefault(p => p.Id.Equals(id));
            return u;
        }
        [HttpPost]
        public Recipe AddRecipe(Recipe recipe)
        {
            Recipe r = new Recipe(recipe.Name, recipe.CategoryId, recipe.PreparationTimeInMinute, recipe.Level, recipe.AddDate, recipe.Layers, recipe.Preparation, recipe.UserId, recipe.Image, recipe.IsDisplay); ;
            DB.RecipeList.Add(r);
            return r;
        }
        [HttpPut]
        public Recipe UpdateRecipe(int recipeId,Recipe recipe)
        {
            Recipe r = DB.RecipeList.FirstOrDefault<Recipe>(p=>p.Id==recipe.Id);
            r.Name = recipe.Name;
            r.Level = recipe.Level;
            r.CategoryId = recipe.CategoryId;
            r.PreparationTimeInMinute = recipe.PreparationTimeInMinute;
            r.Preparation = recipe.Preparation;
            r.Layers = recipe.Layers;
            return r;
        }
        [HttpGet]
        public List<Recipe> GetRecipesByCategoryId(int categoryId)
        {
            return DB.RecipeList.Where(p => p.CategoryId == categoryId).ToList();
        }

    }
}
