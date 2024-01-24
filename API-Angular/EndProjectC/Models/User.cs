using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EndProjectC.Models
{
    public class User
    {
        private static int idForAll ;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public User(string name, string address, string mail, string password)
        {
            this.Id = User.idForAll++;
            Name = name;
            Address = address;
            Mail = mail;
            Password = password;
        }
        static User()
        {
            idForAll = 1001;
        }
        public User()
        {

        }
            
       
    }
}