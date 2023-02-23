import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

const getDetails = (toEmail, language) => {
  const subject = {
    he: "לינק למפגש הסברה למורים - Isra-Gem",
    en: "Isra-Gem Competition: Information Meeting for Teachers",
  };
  const text = {
    he: `שלום רב,
אנחנו שמחים להזמין אותך למפגש ההסברה על תחרות Isra-Gem.
המפגש יתקיים באופן דיגיטלי בשני מועדים:
יום רביעי (01.03) בשעה 18:00 ויום ראשון (05.03) בשעה 18:00.
להלן הלינקים למפגשים:
<לינקים>

נשמח לראותכם,
צוות Isra-Gem.`,
    en: `Hi there,
You're invited to an informative meeting about the Isra-Gem competition, which will be held digitally on two dates:
Wednesday (03.01) at 18:00 and Sunday (03.05) at 18:00.
Below are the links to the meetings:

<links>
We hope to see you there.


Best regards,
The Isra-Gen team`,
  };

  return {
    from: process.env.EMAIL_USER, // sender address
    to: toEmail, // list of receivers
    subject: subject[language], // Subject line
    text: text[language], // plain text body
  };
};

export default async function handler(req, res) {
  const request_obj = JSON.parse(req.body);
  const { email, language } = request_obj;

  let info;
  try {
    info = await transporter.sendMail(getDetails(email, language));
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(
      `${new Date().toISOString()} - an error has occurred: ${JSON.stringify(
        { info, error },
        null,
        2
      )}`
    );
    res.status(500).json({ success: false });
  }
}
