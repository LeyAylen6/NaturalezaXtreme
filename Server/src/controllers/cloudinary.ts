const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'dn3tgaige', 
    api_key: '747595874346852', 
    api_secret: '***************************' 
});


// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// { public_id: "olympic_flag" }, 
// function(error, result) {
//     console.log(result); 
// });