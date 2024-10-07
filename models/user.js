const {Schema} = require(mongoose);

const userSchema = new Schema({

    fullName:{
        type:String,
        required : true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    salt:{
        type:String,
        require:true,
    },

    password:{
        type: String,
        require: true,

    },

    profileImageURL:{
        type:String,
    },
    role:{
        type:String,
        enum:[USER,ADMIN],
        default:"USER",
    },
},{timestamps:true});