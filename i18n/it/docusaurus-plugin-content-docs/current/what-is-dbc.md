---
id: intro
slug: /
title: Cos'è il Modello di Progettazione per Contratto?
description: Scopri i concetti fondamentali del Design by Contract — precondizioni, postcondizioni e invarianti — e come si confrontano con i test tradizionali.
sidebar_position: 1
hide_table_of_contents: false
---

# Cos'è il Modello di Progettazione per Contratto?

Il **Modello di Progettazione per Contratto (Design by Contract o, abbreviato, DbC)** è un metodo di scrittura del codice che documenta e fa rispettare le proprie aspettative — non solo tramite commenti o test, ma attraverso precise espressioni direttamente nel sorgente.

Alla base, il DbC definisce tre elementi per ogni funzione o metodo:

- **Precondizioni** — Cosa deve essere vero _prima_ dell'esecuzione
- **Postcondizioni** — Cosa garantisce _dopo_ l'esecuzione
- **Invarianti** — Cosa deve essere _sempre_ vero per un oggetto

Pensalo come un contratto formale tra svariate parti del tuo codice:  
_"Io prometto di fornirti input validi, tu prometti di fare il tuo lavoro e lasciare lo stato in condizioni valide."_

---

## Perché dovrebbe interessarti?

Perché **i contratti intercettano i bug nel punto in cui si manifestano** — nei punti critici e dove meno ce lo si aspetta.

Invece di scrivere valanghe di test sperando di aver coperto ogni possibile scenario, il DbC **verifica il tuo programma automaticamente**. Ti avvisa _tempestivamente_ nel momento in cui i termini del contratto vengono violati.

Meno test. Più garanzie.

---

## DbC e testing tradizionale: un confronto

|                                       | Test Tradizionali | Design by Contract |
| ------------------------------------- | ----------------- | ------------------ |
| ✅ Trova i bug                        | Sì                | Sì                 |
| 🧠 Documenta gli assunti              | A volte           | Sempre             |
| 🧪 Richiede test                      | Sì                | Non sempre         |
| ⚠️ Va in errore in fase di esecuzione | Sì                | Sì (ma prima)      |
| 🔁 Richiede manutenzione              | Sì                | Minima             |

Non si escludono a vicenda — ma il DbC può **sostituire buona parte dei tuoi test**, specialmente per la logica interna.

---

## Dunque è solo validazione degli input?

No. La validazione degli input protegge dagli errori dell'utente.  
I contratti, invece, prevengono gli **errori in fase di sviluppo** — ovvero le violazioni della logica del codice.

Il DbC genera fiduci _nel codice stesso_, ed è questa la sua forza.

---

## Come faccio a provarlo?

Questi linguaggi supportano nativamente il Design by Contract — è integrato nel compilatore o nel runtime, senza aggiungere librerie:

- [**Eiffel**](/kb/eiffel): la culla del Design by Contract. I contratti sono parte integrante del linguaggio e vengono applicati di default.
- [**Ada**](/kb/ada): include precondizioni, postcondizioni e invarianti come parte integrante del linguaggio (dal 2012), con supporto formale tramite SPARK per sistemi ad alta affidabilità.
- [**D**](/kb/d): supporta i contratti `in` e `out` direttamente nelle dichiarazioni di funzione, rendendo il DbC una parte naturale del processo di sviluppo.
- [**Racket**](/kb/racket): offre un sistema di contratti profondamente integrato nel linguaggio. I contratti sono entità di primo livello e possono essere applicati a funzioni, strutture, classi e moduli — permettendo allo sviluppatore di far rispettare precondizioni, postcondizioni e invarianti in fase di runtime.

---

In altri ambienti, in particolare con Python, il Design by Contract è disponibile **tramite librerie**:

- [**icontract**](https://github.com/Parquery/icontract): una libreria DbC per Python con supporto per precondizioni, postcondizioni e invarianti tramite annotazioni/decorator.
- [**deal**](https://github.com/life4/deal): una libreria che supporta controlli di runtime e anche analisi statica.

Questi strumenti possono introdurre funzionalità simili ai contratti in Python, la cui esecuzione rimane **facoltativa**. L'integrazione con il linguaggio o il runtime è limitata rispetto alle soluzioni native.
