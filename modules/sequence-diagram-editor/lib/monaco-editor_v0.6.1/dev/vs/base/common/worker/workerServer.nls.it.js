/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(8f43cf5d0d3d233c9ba1c9085f2bb529f834c841)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/base/common/worker/workerServer.nls.it", {
	"vs/base/common/errors": [
		"{0}. Codice errore: {1}",
		"Autorizzazione negata (HTTP {0})",
		"Autorizzazione negata",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Errore di connessione sconosciuto ({0})",
		"Si è verificato un errore di connessione sconosciuto. La connessione a Internet è stata interrotta oppure il server al quale si è connessi è offline.",
		"{0}: {1}",
		"Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.",
		"Si è verificato un errore di sistema ({0})",
		"Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.",
		"{0} ({1} errori in totale)",
		"Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.",
		"Non implementato",
		"Argomento non valido: {0}",
		"Argomento non valido",
		"Stato non valido: {0}",
		"Stato non valido",
		"Non è stato possibile caricare un file obbligatorio. Non si è più connessi a Internet oppure il server a cui si è connessi è offline. Per riprovare, aggiornare il browser.",
		"Non è stato possibile caricare un file obbligatorio. Riavviare l\'applicazione e riprovare. Dettagli: {0}",
	],
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/editor/common/config/defaultConfig": [
		"Contenuto editor",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"Si è verificato un errore della modalità durante la suddivisione in token dell\'input.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Testo normale",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Dichiarazioni del linguaggio per contributes.",
		"ID del linguaggio.",
		"Alias di nome per il linguaggio.",
		"Estensioni di file associate al linguaggio.",
		"Nomi file associati al linguaggio.",
		"Criteri GLOB dei nomi file associati al linguaggio.",
		"Tipi MIME associati al linguaggio.",
		"Espressione regolare corrispondente alla prima riga di un file del linguaggio.",
		"Percorso relativo di un file che contiene le opzioni di configurazione per il linguaggio.",
		"Il valore di `contributes.{0}` è vuoto",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"Il valore di `contributes.{0}` non è valido. È prevista una matrice.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: la dipendenza `{0}` è sconosciuta.",
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: non è stato possibile attivare la dipendenza `{0}`.",
		"L\'attivazione dell\'estensione `{0}` non è riuscita. Motivo: sono presenti più di 10 livelli di dipendenze (molto probabilmente un ciclo di dipendenze).",
		"L\'attivazione dell\'estensione `{0}` non è riuscita: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"La descrizione dell\'estensione restituita è vuota",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `object`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string`",
		"Valore previsto di `main` ({0}) da includere nella cartella dell\'estensione ({1}). L\'estensione potrebbe non essere più portatile.",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"Nome visualizzato per l\'estensione usato nella raccolta di Visual Studio Code.",
		"Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell\'estensione.",
		"Banner usato nel marketplace di Visual Studio Code.",
		"Colore del banner nell\'intestazione pagina del marketplace di Visual Studio Code.",
		"Tema colori per il tipo di carattere usato nel banner.",
		"Editore dell\'estensione Visual Studio Code.",
		"Eventi di attivazione per l\'estensione Visual Studio Code.",
		"Dipendenze ad altre estensioni. L\'identificatore di un\'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.",
		"Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.",
		"Tutti i contributi dell\'estensione Visual Studio Code rappresentati da questo pacchetto.",
	]
});