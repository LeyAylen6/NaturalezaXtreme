const nodemailer = require("nodemailer");
const templatePayment = require('./../../utils/templates/payments')

const nodemailerController = async() => {
    
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
      
    let template = templatePayment()
    
    const email = await transporter.sendMail({
        from: '"NaturalezaXtreme" <NaturalezaXtreme@outlook.com>', 
        to: "leiisalguero@gmail.com",  
        subject: template.subject, 
        html: template.html
    });

    console.log("Message sent: %s", email.messageId);

    transporter.sendMail(email, function (error: any, info: any) { 
        if(error){ 
            console.log("Error al enviar email"); 
        } else{ 
            console.log("Correo enviado correctamente"); 
        } 
        transporter.close(); 
    });
}

export default nodemailerController;
