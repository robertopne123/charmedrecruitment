const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Bill Reference: ${body.ref}`;

  const data = {
    to: "support@swapmyenergy.co.uk",
    cc: "contact@swapmyenergy.co.uk",
    from: "support@swapmyenergy.co.uk",
    subject: "Business Energy Form Submission - " + body.ref,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  console.log(req.body.bill);

  await mail.send(data);

  const data2 = {
    to: body.email,
    from: "support@swapmyenergy.co.uk",
    subject: "Welcome to Swap My Energy Business",
    templateId: "d-803518d92360429b8e435140dc889912",
    dynamicTemplateData: {
      name: body.name,
      ref: body.ref,
    },
  };

  await mail.send(data2);

  res.status(200).json({ status: "Ok" });
};
