const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}`;

  const data = {
    to: "payments@swapmyenergy.co.uk",
    cc: "contact@swapmyenergy.co.uk",
    from: "support@swapmyenergy.co.uk",
    subject: "Payments Form Submission - " + body.ref,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);

  const data2 = {
    to: body.email,
    from: "support@swapmyenergy.co.uk",
    subject: "Welcome to Swap My Energy",
    templateId: "d-623b808be3a343f593b76989d8f0c96c",
    dynamicTemplateData: {
      name: body.name,
      ref: body.ref,
    },
  };

  await mail.send(data2);

  res.status(200).json({ status: "Ok" });
};
