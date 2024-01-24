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
    public class UserController : ApiController
    {
        [HttpGet]
        public List<User> GetAllUsers()
        {
            return DB.UserList;
        }
        [HttpPost]
        public IHttpActionResult Login(dynamic obj)
        {
            string password = obj.Password;
            string name = obj.Name;
            User t = DB.UserList.FirstOrDefault(r => r.Name == name && r.Password == password);
            if (t != null)
                return Ok(t);
            t = DB.UserList.FirstOrDefault(r => r.Name == name);
            if (t != null)
                return Ok(true);
            return Ok(false);



        }
        [HttpPost]
        public IHttpActionResult Register(User user)
        {
            User t = DB.UserList.FirstOrDefault(r => r.Name == user.Name && r.Password == user.Password);
            if (t != null)
                return Ok(false);
            t = DB.UserList.FirstOrDefault(r => r.Name == user.Name);
            if (t != null)
                return Ok(true);
            User u = new User(user.Name, user.Address, user.Mail, user.Password);
            DB.UserList.Add(u);
           
            return Ok(u);



        }
        //[HttpGet]
        //public User GetUserByNameAndPass(string name)
        //{
        //    User u = DB.UserList.FirstOrDefault(p => p.Name.Equals(name));
        //    return u;
        //}
        //GetUserById
        [HttpGet]
        public User GetUserById(int id)
        {
            User u = DB.UserList.FirstOrDefault<User>(p => p.Id == id);
            return u;
        }
        //[HttpPost]
        //public User AddUser(User user)
        //{
        //    User u = new User(user.Name, user.Address, user.Mail, user.Passward);
        //    DB.UserList.Add(u);
        //    return u;
        //}
    }
}
