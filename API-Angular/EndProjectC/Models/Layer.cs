using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EndProjectC.Models
{
    public class Layer
    {
        public string Description { get; set; }
        public List<string> Components { get; set; }

        public Layer(string description, List<string> components)
        {
            Description = description;
            Components = components;
        }
        public Layer()
        {

        }
    }
}