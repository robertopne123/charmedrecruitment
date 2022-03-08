const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    New Customer: ${body.newCustomer}\r\n
    Property Type: ${body.propertyType}\r\n
    Connection: ${body.connection}\r\n
    Call Back Time: ${body.callBackTime}`;

  const data = {
    to: "connections@swapmyenergy.co.uk",
    cc: "contact@swapmyenergy.co.uk",
    from: "support@swapmyenergy.co.uk",
    subject: "Connections Form Submission - " + body.ref,
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
