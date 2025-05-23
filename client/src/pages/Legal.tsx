import React from 'react';
import { useRoute } from 'wouter';

const Legal: React.FC = () => {
  const [match, params] = useRoute('/legal/:type');
  
  if (!match || !params) {
    return <div>Page not found</div>;
  }
  
  const { type } = params;
  
  // Title and content based on legal page type
  let title = '';
  let content = null;
  
  switch (type) {
    case 'terms':
      title = 'Allgemeine Geschäftsbedingungen';
      content = <TermsContent />;
      break;
    case 'privacy':
      title = 'Datenschutzerklärung';
      content = <PrivacyContent />;
      break;
    case 'imprint':
      title = 'Impressum';
      content = <ImprintContent />;
      break;
    default:
      return <div>Page not found</div>;
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-4">
            {title}
          </h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

const TermsContent: React.FC = () => (
  <>
    <p className="font-medium">Stand: Mai 2025</p>
    
    <h2>1. Geltungsbereich</h2>
    <p>
      Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln das Vertragsverhältnis zwischen dem Gast/Kunden/Veranstalter, nachfolgend "Gast" genannt, und dem Stocken Hotel, nachfolgend "Hotel" genannt, im Rahmen der Zimmerbuchung, Buchung von Veranstaltungsräumen und allen für den Gast erbrachten weiteren Leistungen und Lieferungen des Hotels.
    </p>
    
    <h2>2. Vertragsabschluss</h2>
    <p>
      2.1 Der Vertrag kommt durch die Annahme des Antrags des Gastes durch das Hotel zustande. Dem Hotel steht es frei, die Zimmerbuchung in Textform zu bestätigen.
    </p>
    <p>
      2.2 Bei Buchungen über die hoteleigene Website kommt der Vertrag erst mit Zugang der Buchungsbestätigung vom Hotel an den Gast zustande.
    </p>
    
    <h2>3. Zimmerbereitstellung, -übergabe und -rückgabe</h2>
    <p>
      3.1 Der Gast erwirbt keinen Anspruch auf die Bereitstellung bestimmter Zimmer, soweit dieses nicht ausdrücklich vereinbart wurde.
    </p>
    <p>
      3.2 Gebuchte Zimmer stehen dem Gast ab 15:00 Uhr des vereinbarten Anreisetages zur Verfügung. Der Gast hat keinen Anspruch auf frühere Bereitstellung.
    </p>
    <p>
      3.3 Am vereinbarten Abreisetag sind die Zimmer dem Hotel spätestens um 11:00 Uhr geräumt zur Verfügung zu stellen. Danach kann das Hotel aufgrund der verspäteten Räumung des Zimmers für dessen vertragsüberschreitende Nutzung bis 18:00 Uhr 50% des vollen Logispreises (Listenpreises) in Rechnung stellen, ab 18:00 Uhr 90%.
    </p>
    
    <h2>4. Stornierungsbedingungen</h2>
    <p>
      4.1 Stornierungen müssen schriftlich erfolgen und vom Hotel bestätigt werden.
    </p>
    <p>
      4.2 Bei Stornierung der Reservierung durch den Gast fallen folgende Stornierungsgebühren an:
    </p>
    <ul>
      <li>bis 14 Tage vor Anreise: kostenfrei</li>
      <li>13 bis 7 Tage vor Anreise: 50% des vereinbarten Preises</li>
      <li>6 bis 2 Tage vor Anreise: 80% des vereinbarten Preises</li>
      <li>1 Tag vor Anreise oder bei Nichtanreise: 90% des vereinbarten Preises</li>
    </ul>
    
    <h2>5. Zahlungsbedingungen</h2>
    <p>
      5.1 Das Hotel akzeptiert folgende Zahlungsmittel: Barzahlung, EC-Karte, Visa, MasterCard und American Express.
    </p>
    <p>
      5.2 Bei Aufenthalten von mehr als 5 Tagen ist das Hotel berechtigt, Zwischenrechnungen zu erstellen.
    </p>
    <p>
      5.3 Das Hotel ist berechtigt, bei Vertragsschluss oder danach eine angemessene Vorauszahlung oder Sicherheitsleistung zu verlangen.
    </p>
    
    <h2>6. Haftung</h2>
    <p>
      6.1 Das Hotel haftet für von ihm zu vertretende Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
    </p>
    <p>
      6.2 Für abhanden gekommene oder beschädigte Sachen haftet das Hotel dem Gast nach den gesetzlichen Bestimmungen, jedoch nur bis zu einem Höchstbetrag von CHF 3.500.
    </p>
    <p>
      6.3 Der Gast haftet für alle Schäden am Gebäude oder Inventar, die durch ihn, seine Begleiter oder seine Gäste verursacht werden.
    </p>
    
    <h2>7. Schlussbestimmungen</h2>
    <p>
      7.1 Änderungen und Ergänzungen des Vertrages oder dieser Geschäftsbedingungen bedürfen der Textform.
    </p>
    <p>
      7.2 Erfüllungs- und Zahlungsort sowie ausschließlicher Gerichtsstand ist Baar, Schweiz.
    </p>
    <p>
      7.3 Es gilt schweizerisches Recht.
    </p>
  </>
);

const PrivacyContent: React.FC = () => (
  <>
    <p className="font-medium">Stand: Mai 2025</p>
    
    <h2>1. Verantwortlicher</h2>
    <p>
      Verantwortlich für die Datenverarbeitung ist:
    </p>
    <p>
      Pontera GmbH i.G<br />
      handelnd unter dem Namen „Boutique Hotel Stocken by Pontera"<br />
      Krätzernstraße 10<br />
      9014 St. Gallen<br />
      Schweiz<br />
      Tel.: +41 79 300 01 61<br />
      E-Mail: datenschutz@hotelstocken.ch
    </p>
    
    <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
    <p>
      Wir erheben und speichern folgende personenbezogene Daten:
    </p>
    <ul>
      <li>Anrede, Vorname, Nachname</li>
      <li>Adresse</li>
      <li>E-Mail-Adresse</li>
      <li>Telefonnummer</li>
      <li>Geburtsdatum</li>
      <li>Kreditkartendaten oder Bankverbindung</li>
      <li>Informationen, die für die Erfüllung des Aufenthalts notwendig sind (z.B. Anreisezeit, besondere Ernährungswünsche)</li>
    </ul>
    
    <h2>3. Zweck der Datenverarbeitung</h2>
    <p>
      Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:
    </p>
    <ul>
      <li>Zur Erfüllung vertraglicher Pflichten (Zimmerbuchung, Zusatzleistungen)</li>
      <li>Zur Kommunikation mit Ihnen</li>
      <li>Zur Abwicklung von Zahlungen</li>
      <li>Für unsere Buchhaltung</li>
      <li>Für Marketingzwecke (nur mit Ihrer ausdrücklichen Einwilligung)</li>
    </ul>
    
    <h2>4. Rechtsgrundlage der Datenverarbeitung</h2>
    <p>
      Die Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten ist:
    </p>
    <ul>
      <li>Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO)</li>
      <li>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</li>
      <li>Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
      <li>Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO)</li>
    </ul>
    
    <h2>5. Dauer der Speicherung</h2>
    <p>
      Wir speichern Ihre personenbezogenen Daten so lange, wie es für die Erfüllung der oben genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.
    </p>
    
    <h2>6. Weitergabe von Daten an Dritte</h2>
    <p>
      Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:
    </p>
    <ul>
      <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
      <li>Die Weitergabe zur Abwicklung des Vertrages erforderlich ist</li>
      <li>Eine gesetzliche Verpflichtung zur Weitergabe besteht</li>
    </ul>
    
    <h2>7. Cookies</h2>
    <p>
      Unsere Website verwendet Cookies, um Ihnen eine bessere Nutzererfahrung zu bieten. Details zu den verwendeten Cookies und wie Sie diese kontrollieren können, finden Sie in unserer Cookie-Richtlinie.
    </p>
    
    <h2>8. Ihre Rechte</h2>
    <p>
      Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
    </p>
    <ul>
      <li>Recht auf Auskunft</li>
      <li>Recht auf Berichtigung</li>
      <li>Recht auf Löschung</li>
      <li>Recht auf Einschränkung der Verarbeitung</li>
      <li>Recht auf Datenübertragbarkeit</li>
      <li>Widerspruchsrecht</li>
      <li>Recht auf Widerruf einer Einwilligung</li>
    </ul>
    
    <h2>9. Kontakt bei Fragen zum Datenschutz</h2>
    <p>
      Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
    </p>
    <p>
      E-Mail: datenschutz@hotelstocken.ch<br />
      Tel: +41 79 300 01 61
    </p>
  </>
);

const ImprintContent: React.FC = () => (
  <>
    <p className="font-medium">Stand: Mai 2025</p>
    
    <h2>Kontaktadresse</h2>
    <p>
      Pontera GmbH i.G<br />
      handelnd unter dem Namen „Boutique Hotel Stocken by Pontera"<br />
      Krätzernstraße 10<br />
      9014 St. Gallen<br />
      Schweiz
    </p>
    <p>
      Tel.: +41 79 300 01 61<br />
      E-Mail: info@hotelstocken.ch
    </p>
    
    
    <h2>Geschäftsführung</h2>
    <p>
      Devris Harman, Hotel Manager
    </p>
    
    <h2>Haftungsausschluss</h2>
    <p>
      Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen, soweit kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
    </p>
    
    <h2>Urheberrechte</h2>
    <p>
      Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschließlich der Firma Pontera GmbH. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
    </p>
    
    <h2>Bildnachweis</h2>
    <p>
      Alle auf dieser Website verwendeten Bilder stammen aus den folgenden Quellen:<br />
      © Pontera GmbH (eigene Aufnahmen)
    </p>
  </>
);

export default Legal;
