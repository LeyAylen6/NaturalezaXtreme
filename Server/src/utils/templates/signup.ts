module.exports = () => {
    
    const URL_DEPLOY = process.env;

    return (
        {
            subject: 'Welcome to NatureXtreme',
            html: `    
                <div style="text-align: center"> 
                    <img src='https://github.com/LeyAylen6/NaturalezaXtreme/blob/dev/Client/src/assets/logo_nodemailer.jpg?raw=true' style="width:350px"/>
                    <h2 style="text-align: center; font-size: 40px">We are happy to have you with us!</h2> 
                    <br/>
                    <img src='https://hpy.stripocdn.email/content/guids/CABINET_54100624d621728c49155116bef5e07d/images/84141618400759579.png' style="width:200px"/>
                    <br/>
                    <br/>
                    <br/>
                    <p style="font-size:22px">You can see all the products in the online store</p>
                    <br/>
                    <br/>
                    <button style="width:200px; height:50px; background-color:#5c68e2; border:none; border-radius:7px; text-align: center; font-size: 22px; cursor:pointer">
                       <a href='${URL_DEPLOY}' style="text-decoration: none; color: black">SHOP NOW</a>
                    </button>
                </div> 
                `
        }
    )
}
