const nodemailer = require("nodemailer");
const template1 = require('./../../utils/templates/payments')
const template2 = require('./../../utils/templates/signUp')

const nodemailerController = async(isSignUp: boolean, userEmail: string, status?: string) => {
    
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", 
        port: 587, 
        secure: false, 
        auth: { 
            "type":"login", 
            "user":"NaturalezaXtreme@outlook.com", 
            "pass":"NaturalezaX" 
        }
    });   
      
    let templatePayment = template1(status)
    let templateSignUp = template2()

    const emailToSend = await transporter.sendMail({
        from: 'NaturalezaXtreme@outlook.com', 
        to: userEmail,  
        subject: isSignUp ? templateSignUp.subject : templatePayment.subject,
        html: isSignUp ? templateSignUp.html : templatePayment.html
    });

    transporter.sendMail(emailToSend, function (error: any, transporter: any) { 
        if(error){ 
            console.log("Error al enviar email"); 
        } else{ 
            console.log("Correo enviado correctamente"); 
        } 
        transporter.close(); 
    });
}

export default nodemailerController;
