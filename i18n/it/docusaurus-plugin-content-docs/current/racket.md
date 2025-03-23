---
id: racket
title: DbC in Racket
description: In Racket i contratti sono costrutti del linguaggio — ecco come abilitano correttezza a livello di funzioni, strutture e moduli.
sidebar_position: 7
slug: /racket
hide_table_of_contents: false
---

# Design by Contract in Racket

**Racket** offre uno dei sistemi di contratti più flessibili ed espressivi tra tutti i linguaggi di programmazione — ed è integrato direttamente nel linguaggio.

I contratti in Racket sono **costrutti del linguaggio**, il che significa che possono essere definiti, composti e applicati come qualsiasi altra funzione. Sono applicati **dinamicamente all'interfaccia dei moduli**, rendendoli ideali per garantire la **correttezza a livello di componente**.

---

## Come funzionano i contratti in Racket

### Contratti per funzioni

Puoi associare contratti alle funzioni usando `define/contract`:

```racket
(define/contract (add x y)
  (-> exact-integer? exact-integer? exact-integer?)
  (+ x y))
```

- Input: sia `x` che `y` devono essere interi esatti
- Output: anche il risultato deve essere un intero esatto

## Contratti per struct (invarianti)

I contratti possono essere applicati anche agli struct, per imporre invarianti:

```racket
(struct posn (x y)
  #:transparent)

(define/contract (make-posn x y)
  (-> number? number? (struct/c posn positive? positive?))
  (posn x y))
```

- Garantisce che `x` e `y` siano positivi — un invariante strutturale

## Contratti per moduli

Una delle funzionalità più potenti di Racket: puoi applicare contratti all'**interfaccia di un intero modulo**:

```racket
(provide
 (contract-out
  [deposit (-> positive? account? account?)]
  [withdraw (-> positive? account? account?)]))
```

- Questi contratti sono applicati **all'interfaccia del modulo**, incoraggiando un design difensivo tra componenti

## Contratti componibili

I contratti in Racket sono **componibili** — puoi creare contratti complessi usando funzioni composte.

Esempi:

- `listof` per contratti su liste
- `->` per funzioni
- `struct/c`, `hash/c` e altri

Questo rende Racket un **linguaggio ideale per sperimentare un'architettura orientata ai contratti**.

---

## Limitazioni

- **Nessun controllo statico**: tutti i contratti vengono verificati in fase di esecuzione
- **Performance**: i contratti possono incidere negativamente sulla performance se ne si fa un uso eccessivo
- **Non orientato agli oggetti**: i contratti funzionano meglio con moduli e pattern funzionali

---

## Cosa rende Racket speciale

Racket non si limita a _supportare_ i contratti — li tratta come uno **strumento fondamentale di programmazione**.

- Ideale per didattica, prototipazione e ricerca
- Perfetto per garantire **correttezza a livello di componente**
- Incoraggia lo sviluppo **basato su contratti**, anziché una semplice validazione degli input

Racket è un linguaggio che prende i contratti sul serio — e ti offre strumenti altrettanto seri per usarli.

---

## Risorse

- [Guida a Racket: Contratti](https://docs.racket-lang.org/guide/contract-boundaries.html)
- [Riferimento Racket: Contratti](https://docs.racket-lang.org/reference/contracts.html)
- [Repository GitHub di Racket](https://github.com/racket/racket)
- [Scarica Racket](https://download.racket-lang.org/) — include DrRacket, l'IDE consigliato
