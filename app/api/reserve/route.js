// app/api/reserve/route.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      date,
      time,
      guests,
      occasion,
      phone,
      request: specialRequest,
    } = data;

    // Nodemailer transporter setup (Gmail ka example)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sharmagaurav6926@gmail.com",
        pass: "tuce qflw qtsv ykfu",
      },
    });

    // Email content
    const mailOptions = {
      from: "sharmagaurav6926@gmail.com",
      to: email, // User ka email
      subject: "Your Reservation is Confirmed!",
      html: `
       <!DOCTYPE html>
<html>
<head>
    <title>Reservation Confirmed</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

a{
text-decoration: none;
color: #A84D06
}
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            color: #000;
            padding: 40px 20px 0px;
            text-align: center;
        }
        .header h1 {
            font-family: 'Playfair Display', serif;
            margin: 0;
            font-size: 32px;
            font-weight: 700;
        }
        .header p {
            font-size: 18px;
            margin: 10px 0 0;
            font-weight: 300;
        }
        .content {
            padding: 30px;
        }
        .content h2 {
            font-family: 'Playfair Display', serif;
            color: #A84D06;
            font-weight: 700;
            margin-top: 0;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        .details-list {
            list-style-type: none;
            padding: 0;
            margin: 20px 0;
        }
        .details-list li {
            background-color: #f9f9f9;
            margin-bottom: 10px;
            padding: 15px;
            border-left: 4px solid #A84D06;
            border-radius: 5px;
            font-size: 16px;
        }
        .details-list strong {
            color: #333;
            font-weight: 600;
            margin-right: 5px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #e9e9e9;
            color: #555;
            font-size: 14px;
        }
        .logo-img {
            width: 200px;
            height: auto;
            display: block;
            margin: 0 auto 20px;

        }
        @media (max-width: 600px) {
            .container {
                margin: 20px;
            }
.logo-img {
            width: 200px;
            height: auto;
            display: block;
            margin: 0px -10px;

        }

        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://verdant-bublanina-f445dd.netlify.app/intro.png" alt="Your Brand Logo" class="logo-img">
            <h1>Reservation Confirmed!</h1>
            <p>We are excited to welcome you.</p>
        </div>
        
        <div class="content">
            <p style="color: #333;">Hello ${name},</p>
            <p style="color: #333;">Your table at our restaurant has been successfully booked. We've saved a spot just for you and can't wait to serve you!</p>
            
            <h2>Your Reservation Details</h2>
            <ul class="details-list">
                <li><strong>Date:</strong> ${date}</li>
                <li><strong>Gmail:</strong> ${email}</li>
                <li><strong>Time:</strong> ${time}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Guests:</strong> ${guests}</li>
                <li><strong>Occasion:</strong> ${occasion}</li>
                <li><strong>Special Request:</strong> ${specialRequest}</li>
            </ul>
            
            <p style="color: #333;">For any changes or questions, please contact us directly at <a href="tel:9981148990"> 99811-48990, <a href="tel:8269925555">82699-25555</a> or <a href="mailto:teagathergrand@gmail.com ">teagathergrand@gmail.com.</a></p>
            
        </div>
        
        <div class="footer">
            <p>&copy;Teagather Grand | <a href="https://verdant-bublanina-f445dd.netlify.app" >https://verdant-bublanina-f445dd.netlify.app</a></p>
        </div>
    </div>
</body>
</html>
      `,
    };

    // Email content for owner
    const OwnerMailInfo = {
      from: "sharmagaurav6926@gmail.com",
      to: "gauravdl91197@gmail.com", // owner ka email
      subject: "New Reservation Confirmed!",
      html: `
       <!DOCTYPE html>
<html>
<head>
  <title>New Reservation Confirmed</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    a {
      text-decoration: none;
      color: #A84D06;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      color: #000;
      padding: 40px 20px 0px;
      text-align: center;
    }
    .header h1 {
      font-family: 'Playfair Display', serif;
      margin: 0;
      font-size: 32px;
      font-weight: 700;
    }
    .header p {
      font-size: 18px;
      margin: 10px 0 0;
      font-weight: 300;
    }
    .content {
      padding: 30px;
    }
    .content h2 {
      font-family: 'Playfair Display', serif;
      color: #A84D06;
      font-weight: 700;
      margin-top: 0;
      border-bottom: 2px solid #ddd;
      padding-bottom: 10px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #e9e9e9;
      color: #555;
      font-size: 14px;
    }
    .logo-img {
      width: 200px;
      height: auto;
      display: block;
      margin: 0 auto 20px;
    }
    @media (max-width: 600px) {
      .container {
        margin: 20px;
      }
      .logo-img {
        width: 200px;
        height: auto;
        display: block;
        margin: 0px -10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Reservation Request!</h1>
      <p>A new table has been booked.</p>
    </div>
    <div class="content">
      <p style="color: #333;">Hello Teagather Grand Team,</p>
      <p style="color: #333;">A new reservation has been made. Please find the details below:</p>
      <h2>Reservation Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Gmail:</strong> ${email}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Occasion:</strong> ${occasion}</p>
      <p><strong>Special Request:</strong> ${specialRequest}</p>
      <p style="color: #333;">Please ensure all necessary preparations are made for this reservation.</p>
    </div>
    <div class="footer">
      <p>&copy; Teagather Grand | <a href="https://verdant-bublanina-f445dd.netlify.app">https://verdant-bublanina-f445dd.netlify.app</a></p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // **Telegram Bot credentials**

    const telegramBotToken = "8441706499:AAFiu6tfI2y21FjY4RyqZRrwEidJRPWwPSc"; // यहां अपना टोकन डालें
    const ownerChatId = "949157779"; // यहां अपनी चैट ID डालें // **Telegram message for the business owner**

    const telegramMessage = `
    ✨🍽 New Table Booking Alert! 🍽✨

👤 Name: ${name}
📧 Gmail: ${email}
📞 Contact: ${phone}
📅 Date: ${date}
⏰ Time: ${time}
👥 Guests: ${guests} People
🎉 Occasion: ${occasion}
📝 Special Request: ${specialRequest}
        `;

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(OwnerMailInfo),

      axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,

        {
          chat_id: ownerChatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }
      ),
    ]);

    console.log("Reservation confirmed and email sent.");
    return NextResponse.json(
      { message: "Reservation confirmed please check  your gmail." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing reservation or sending email:", error);
    return NextResponse.json(
      { message: "Reservation failed." },
      { status: 500 }
    );
  }
}
