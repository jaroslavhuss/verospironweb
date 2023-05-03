import { useState } from 'react';
const Contact: React.FC = () => {
  const [openContactForm, setOpenContactForm] = useState<boolean>(false);
  const [jmenoAPrijmenti, setJmenoAPrijmenti] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [zprava, setZprava] = useState<string>('');

  //onSubmit

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validation of jmenoAPrijmenti can not be empty
    if (jmenoAPrijmenti.length === 0) {
      alert('Jméno a příjmení nemůže být prázdné');
      return;
    }
    //validation of email - email must be valid by the known regular expression
    const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
    if (!emailRegex.test(email)) {
      alert('Email není validní');
      return;
    }
    //validation of zprava - zprava can not be empty
    if (zprava.length === 0) {
      alert('Zpráva nemůže být prázdná');
      return;
    }
    //validation of zprava - zprava must be longer than 10 characters
    if (zprava.length < 10) {
      alert('Zpráva musí být delší než 10 znaků');
      return;
    }
    //validation of zprava - zprava must be shorter than 1000 characters
    if (zprava.length > 1000) {
      alert('Zpráva musí být kratší než 1000 znaků');
      return;
    }

    //validation of zprava - zprava must not contain any of the following words: 'kurva', 'píča', 'sračka', 'kokot', 'debil', 'idiot', 'hovno', 'prdel', 'pica', 'sračka', 'kokot', 'debil', 'idiot', 'hovno', 'prdel'
    const zpravaWords = zprava.split(' ');
    const forbiddenWords = [
      'kurva',
      'píča',
      'sračka',
      'kokot',
      'debil',
      'idiot',
      'hovno',
      'prdel',
      'pica',
      'sračka',
      'kokot',
      'debil',
      'idiot',
      'hovno',
      'prdel',
    ];
    for (let i = 0; i < zpravaWords.length; i++) {
      if (forbiddenWords.includes(zpravaWords[i])) {
        alert('Zpráva obsahuje zakázané slovo');
        return;
      }
    }
    //Validation of zprava - zprava can not contain any links
    const zpravaLinks = zprava.split(' ');
    for (let i = 0; i < zpravaLinks.length; i++) {
      if (zpravaLinks[i].includes('http://') || zpravaLinks[i].includes('https://')) {
        alert('Zpráva nemůže obsahovat odkazy');
        return;
      }
    }
    //Validation of zprava - zprava can not contain any phone numbers
    const zpravaPhoneNumbers = zprava.split(' ');
    for (let i = 0; i < zpravaPhoneNumbers.length; i++) {
      if (zpravaPhoneNumbers[i].includes('+420') || zpravaPhoneNumbers[i].includes('+421')) {
        alert('Zpráva nemůže obsahovat telefonní čísla');
        return;
      }
    }
    //Validation of zprava - zprava can not contain any email addresses
    const zpravaEmails = zprava.split(' ');
    for (let i = 0; i < zpravaEmails.length; i++) {
      if (zpravaEmails[i].includes('@')) {
        alert('Zpráva nemůže obsahovat emailové adresy');
        return;
      }
    }

    //Here will be a submit to the Strapi backend on url https://private.gswps.eu:10443/api/contak-from-antikoncepces where the payload will be {name, email, message}. For this call fetch api will be used. All possible errors will be handled.

    const submitdata: Response = await fetch('https://private.gswps.eu:10443/api/contak-from-antikoncepces', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { name: jmenoAPrijmenti, email: email, message: zprava },
      }),
    });

    if (submitdata.status < 300) {
      alert('Zpráva byla úspěšně odeslána');
      setOpenContactForm(false);
      setJmenoAPrijmenti('');
      setEmail('');
      setZprava('');
    } else {
      alert('Zprávu se nepodařilo odeslat');
    }
  };

  return (
    <div>
      {!openContactForm && (
        <button
          className="p-2 rounded-lg text-white font-bold bg-cyan-600 hover:scale-105 transition-all duration-700 ease-in-out"
          onClick={() => setOpenContactForm(!openContactForm)}
        >
          Otevřít kontaktní formulář
        </button>
      )}

      {openContactForm && (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl font-bold mt-5">Kontaktní formulář</h1>
          <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
            <input
              className="p-2 m-2 rounded-lg w-full border"
              type="text"
              placeholder="Jméno a příjmení"
              value={jmenoAPrijmenti}
              onChange={({ target }) => {
                setJmenoAPrijmenti(target.value);
              }}
            />
            <input
              className="p-2 m-2 rounded-lg w-full border"
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
            <textarea
              className="p-2 m-2 rounded-lg w-full border"
              placeholder="Zpráva"
              value={zprava}
              onChange={({ target }) => {
                setZprava(target.value);
              }}
            />
            <input
              type="submit"
              value="odeslat"
              className="p-2 m-2 rounded-lg text-white font-bold bg-cyan-600 hover:scale-105 transition-all duration-700 ease-in-out"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
