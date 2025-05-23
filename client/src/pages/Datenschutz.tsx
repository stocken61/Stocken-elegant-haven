import React from 'react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies</h2>
            <p className="mb-4">
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
              Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className="mb-4">
              Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. 
              Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. 
              Solche Cookies helfen uns, Sie bei Rückkehr auf unsere Website wiederzuerkennen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Welche Cookies verwenden wir?</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Technisch notwendige Cookies:</strong> Diese sind für die Grundfunktionen der Website erforderlich</li>
              <li><strong>Präferenz-Cookies:</strong> Speichern Ihre Einstellungen und Präferenzen</li>
              <li><strong>Statistik-Cookies:</strong> Helfen uns zu verstehen, wie Besucher mit der Website interagieren</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kontakt und Buchungsanfragen</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
              Anschlussfragen bei uns gespeichert.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ihre Rechte</h2>
            <p className="mb-4">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>unentgeltlich Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten</li>
              <li>Ihre Daten berichtigen, sperren oder löschen zu lassen</li>
              <li>Ihre Einwilligung zur Datenverarbeitung zu widerrufen</li>
              <li>sich bei der Aufsichtsbehörde zu beschweren</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Kontakt</h2>
            <p className="mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-semibold">Boutique Hotel Stocken</p>
              <p>Krätzernstraße 10</p>
              <p>9014 St. Gallen, Schweiz</p>
              <p>E-Mail: contact@hotelstocken.com</p>
              <p>Telefon: +41 79 300 01 61</p>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}