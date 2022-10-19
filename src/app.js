const mongoose = require('mongoose')
const validator = require ('validator')
mongoose.connect("mongodb://localhost:27017/ajaysingh").then(()=>{
    console.log("connection successfully ....")
}).catch((err)=>{
    console.log(err)
});


const playlistSchema = new mongoose.Schema({
    name:String,
    course:String,
    videos:Number,
    author:String,
    email:String,
    email:{
        type:String,
        unique:true,
        validate(value)
        {
    
            if(!validator.isEmail(value)){
              throw new Error(console.log("Invalid email"))      
            }
            
        }
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }

})


const Playlist = new mongoose.model("Playlist",playlistSchema);


const CreateDocument = async()=>{
    try{
        const reactPlaylist = new Playlist({
            name:"React",
            course:"frontend",
            videos:80,
            author:"ajay",
            email:"ajsindh@gmaiwl.com",
            active:true
        })
       
        const result = await Playlist.insertMany([reactPlaylist]);
        console.log(result);
        
    }catch{
        (err)=>{
  console.log(err)
        }

    }
}
CreateDocument();

