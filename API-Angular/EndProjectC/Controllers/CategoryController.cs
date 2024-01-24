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
    public class CategoryController : ApiController
    {
        // GET: api/Category
        public List<Category> GetAllCategories()
        {
            return DB.CategoryList;
        }

        // GET: api/Category/5
        public Category GetCategoryById(int id)
        {
            return DB.CategoryList.FirstOrDefault(o => o.Id == id);
        }

       

      
    }
}
