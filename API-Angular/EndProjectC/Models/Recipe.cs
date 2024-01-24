using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EndProjectC.Models
{
    public class Recipe
    {
        //    //קוד מתכון, שם מתכון, קוד קטגוריה, זמן הכנה בדקות, דרגת קושי 1-5 , תאריך הוספת המתכון לאתר, רשימת הרכיבים (מחרוזות), אופן ההכנה (אוסף מחרוזות), קוד משתמש שהכניס את המתכון, תמונה (מחרוזת של ניתוב), האם להציג (boolean).
        //    constructor(public id:number, public name:string, public categoryId:number,public preparationTimeInMinute:number,
        //     public level:number, public addDate:Date, public componentList:{}[], public Preparation:string[],
        //     public userId:number , public image:string, public ifDisplay:boolean){
        //}
        private static int IdForAll;
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int PreparationTimeInMinute { get; set; }
        public int Level { get; set; }
        public DateTime AddDate { get; set; }
        public List<Layer> Layers { get; set; }
        public List<string> Preparation { get; set; }
        public int UserId { get; set; }
        public string Image { get; set; }
        public bool IsDisplay { get; set; }
        static Recipe()
        {
            IdForAll = 1001;
        }
        public Recipe(string name, int categoryId, int timrInMinute, int level, DateTime addDate,List<Layer> layers, List<string> preparation, 
             int userId, string image, bool isDisplay)
        {
            Id = IdForAll++;
            Name = name;
            CategoryId = categoryId;
            PreparationTimeInMinute = timrInMinute;
            Level = level;
            AddDate = AddDate;
            Layers = layers;
            this.Preparation = preparation;
            UserId = userId;
            Image = image;
            IsDisplay = isDisplay;
        }
        public Recipe()
        {

        }
    }
}