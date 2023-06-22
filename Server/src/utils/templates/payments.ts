module.exports = (status: string) => {

    const URL_DEPLOY = process.env;

    let statusPayment: string = '';
    let img: string = '';

    if(status === 'approved') {
        statusPayment = 'Thank you for your purchase!'
        img = 'https://xhclpi.stripocdn.email/content/guids/CABINET_c0e87147643dfd412738cb6184109942/images/151618429860259.png'
        // img = 'https://w7.pngwing.com/pngs/1013/469/png-transparent-computer-icons-check-mark-symbol-ok-miscellaneous-angle-logo.png'

    } else {
        statusPayment = 'your payment was declined';
        img = 'https://hpy.stripocdn.email/content/guids/CABINET_d0083983c1a429c1d9272e38a5b350a3/images/1401618430238266.png'
        // img = 'https://static.vecteezy.com/system/resources/thumbnails/009/344/493/small/x-transparent-free-png.png'
    }

    return (
        {
            subject: 'Your purchase in natureXtreme',
            html: `    
                <div style="text-align: center">
                    <img src='./../../../../Client/src/assets/logo_nodemailer.jpg' style="width:350px"/>
                    <h2 style="text-align: center; font-size: 40px">${statusPayment}</h2> 
                    <img src=${img} style="width: 250px"/>
                    <br/>
                    <br/>
                    <br/>
                    <p style="font-size:22px">You can see the details of your purchase by clicking</p>
                    <button style="width:200px; height:50px; background-color:#5c68e2; border:none; border-radius:7px; text-align: center; font-size: 22px; cursor:pointer">
                        <a href='${URL_DEPLOY}/login-signup' style="text-decoration: none; color: black">HERE</a>
                    </button>
                </div> 
                `

            //     /<div style="text-align: center"> 
            //     <img src='./../../../../Client/src/assets/logo_nodemailer.jpg' style="width:350px"/>
            //     <h2 style="text-align: center; font-size: 40px">We are happy to have you with us!</h2> 
            //     <img src='https://hpy.stripocdn.email/content/guids/CABINET_54100624d621728c49155116bef5e07d/images/84141618400759579.png' style="width:200px"/>
            //     <br/>
            //     <br/>
            //     <br/>
            //     <p style="font-size:22px" >You can see the details of your purchase by clicking</p>
            //     <button style="width:200px; height:50px; background-color:#5c68e2; border:none; border-radius:7px; text-align: center; font-size: 30px; cursor:pointer">
            //         Here
            //     </button>
            // </div> 

                // (REDIRIGIR AL DETALLE DE LA COMPRA BY ID. CON COOKIES REGISTRAR SU CUENTA)
        }
    )
}
