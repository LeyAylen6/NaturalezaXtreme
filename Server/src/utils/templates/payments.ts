const payment = (status: string) => {

    const URL_DEPLOY = process.env;

    let statusPayment: string = '';
    let img: string = '';

    if(status === 'approved') {
        statusPayment = 'Thank you for your purchase!'
        img = 'https://xhclpi.stripocdn.email/content/guids/CABINET_c0e87147643dfd412738cb6184109942/images/151618429860259.png'
        
    } else {
        statusPayment = 'your payment was declined';
        img = 'https://hpy.stripocdn.email/content/guids/CABINET_d0083983c1a429c1d9272e38a5b350a3/images/1401618430238266.png'
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
        }
    )
}

export default payment;
