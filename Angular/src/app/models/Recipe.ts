import Layer from "./Layer";
export default class Recipe{
    constructor(
        public Name:string
        ,public CategoryId:number
        ,public PreparationTimeInMinute:number
        ,public Level:number,
        public Layers:Layer[],
        public Preparation:string[],
        public UserId:number
        ,public Image:string,
        public IsDisplay:boolean,public AddDate?,public Id?){
    }
}