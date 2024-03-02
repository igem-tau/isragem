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
    pre_meetings_info,
    meetings,
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
        <p>${pre_meetings_info}</p>
        ${meetings
          .map(
            ({ info, link }) => `<p>${info} - <a href="${link}">${link}</a><p/>`
          )
          .join("")}
        <p>${post_links}</p>
        <br />
        <p>${closing},</p>
        <p>${signature}.</p>
      </div>`;
};

const heTexts = {
  greetings: "שלום רב",
  invite: "תודה רבה לך על הרשמתך לתחרות ISRA-GEM 2024!",
  pre_meetings_info: "",
  meetings: [
    {
      info: "",
      link: "",
    }
],
  post_links: "בקרוב ישלח לך מייל עם פרטים נוספים.",
  closing: "תודה ויום טוב,",
  signature: "צוות TAU iGEM 2024",
};

const enTexts = {
  greetings: "Hi there",
  invite:
    "Thank you for your registration to ISRA-GEM competition!",
  pre_meetings_info: "",
  meetings: [
    {
      info: "",
      link: "",
    }
],
  post_links: "Soon an email we be sent to you with further information.",
  closing: "Thank you and have a nice day,",
  signature: "TAU iGEM Team 2024",
};

const texts = {
  he: heTexts,
  en: enTexts,
};

const getDetails = (toEmail, language) => {
  const subject = {
    he: "Isra-Gem הרשמה לתחרות",
    en: "Isra-Gem Competition",
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
  if (req.method == "POST") {
    let info;
    try {
      const { email, language } = req.body;
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
  } else {
    // 405 Method Not Allowed
    res.status(405).json({ message: "Invalid api usage" });
  }
}
