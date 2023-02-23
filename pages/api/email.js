import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

const getHTML = (
  language,
  {
    greetings,
    invite,
    pre_meetings_dates,
    meetings_dates,
    pre_link,
    link,
    post_links,
    closing,
    signature,
  }
) => {
  let containerStyle = "line-height: 0.5rem;";
  if (language == "he") {
    containerStyle += " direction: rtl;";
  }

  return `<div style="${containerStyle}">
        <p>${greetings},</p>
        <br />
        <p>${invite}</p>
        <p>${pre_meetings_dates}</p>
        <p>${meetings_dates}</p>
        <p>${pre_link}</p>
        <a href="${link}" style="display:block; direction: ltr;">${link}</a>
        <p>${post_links}</p>
        <br />
        <p>${closing},</p>
        <p>${signature}.</p>
      </div>`;
};

const heTexts = {
  greetings: "שלום רב",
  invite: "אנחנו שמחים להזמין אותך למפגש הסברה על תחרות Isra-Gem.",
  pre_meetings_dates: "המפגש יתקיים באופן דיגיטלי בשני מועדים:",
  meetings_dates:
    "יום רביעי (01.03) בשעה 18:00  ויום ראשון (05.03) בשעה 18:00.",
  pre_link: "להלן הלינקים למפגשים:",
  link: "https://us02web.zoom.us/j/7081725319",
  post_links: "נשמח לראותכם במפגש.",
  closing: "בברכה",
  signature: "צוות Isra-Gem",
};

const enTexts = {
  greetings: "Hi there",
  invite: "You're invited to an informative meeting about the Isra-Gem",
  pre_meetings_dates:
    "Competition, which will be held digitally on two dates: ",
  meetings_dates: "Wednesday (03.01) at 18:00 and Sunday (03.05) at 18:00. ",
  pre_link: "Below are the links to the meetings:",
  link: "https://us02web.zoom.us/j/7081725319",
  post_links: "We hope to see you there.",
  closing: "Best regards",
  signature: "The Isra-Gem team",
};

const texts = {
  he: heTexts,
  en: enTexts,
};

const getDetails = (toEmail, language) => {
  const subject = {
    he: "לינק למפגש הסברה למורים - Isra-Gem",
    en: "Isra-Gem Competition: Information Meeting for Teachers",
  };
  const html = getHTML(language, texts[language]);

  return {
    from: process.env.EMAIL_USER, // sender address
    to: toEmail, // list of receivers
    subject: subject[language], // Subject line
    html, // html body
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
