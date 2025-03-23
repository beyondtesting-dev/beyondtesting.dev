---
id: ada
title: DbC in Ada
description: Come Ada e SPARK applicano il Design by Contract sia in fase di esecuzione che con verifica statica, grazie a funzionalità native del linguaggio.
slug: /ada
sidebar_position: 5
hide_table_of_contents: false
---

# Design by Contract in Ada

**Ada** offre un supporto nativo al Design by Contract grazie alla sintassi **aspect specification**, introdotta con **Ada 2012**. Questa permette di specificare precondizioni, postcondizioni e invarianti di tipo o di classe direttamente nel codice — tutte verificate in fase di esecuzione.

Con l'uso di **SPARK**, questi contratti possono anche essere **verificati staticamente**, rendendo Ada uno dei pochi linguaggi a offrire garanzie di correttezza sia **dinamiche** che **formali**.

---

## Come funzionano i contratti in Ada

Ada utilizza le **aspect clause** per associare i contratti a procedure, funzioni e tipi.

### Precondizioni e postcondizioni

```ada
procedure Deposit (Amount : in Positive) with
  Pre  => Amount > 0,
  Post => Account_Balance = Account_Balance'Old + Amount;
```

- `Pre` è la **precondizione**: l'importo deve essere positivo
- `Post` è la **postcondizione**: garantisce che il saldo aumenti correttamente
- `'Old` si riferisce al valore prima dell'esecuzione (semantica di snapshot, o snapshot semantics)

## Invarianti

Puoi definire invarianti sui tipi utilizzando `Type_Invariant`:

```ada
type Account is record
   Balance : Integer := 0;
end record
with Type_Invariant => (Balance >= 0);
```

Questo garantisce che il `Balance` di un `Account` **non sia mai negativo**, in tutte le operazioni.

---

## Controllo in esecuzione vs verifica statica

- Nel linguaggio Ada standard, i contratti vengono applicati in fase di **esecuzione**
- Con **SPARK Ada**, è possibile eseguire una **verifica statica** della correttezza dei contratti — **senza scrivere test**

Questo rende Ada una scelta molto valida per sistemi **ad alta affidabilità**, in ambienti aerospaziali, ferroviari, nella Difesa.

---

## Cosa rende Ada speciale

In Ada i contratti sono **costrutti del linguaggio**, non semplici commenti o annotazioni.

- I contratti sono parte integrante delle **specifiche del linguaggio**
- Possono essere applicati in esecuzione **senza librerie esterne**
- Grazie a SPARK, è possibile ottenere una **verifica formale** — ovvero il controllo automatico di correttezza

---

## Risorse

- [AdaCore: Introduzione ai contratti](https://blog.adacore.com/the-case-for-contracts)
- [Manuale ufficiale di Ada (Sezione Contratti)](https://learn.adacore.com/courses/intro-to-ada/chapters/contracts.html)
- [Linguaggio SPARK](https://www.adacore.com/about-spark)
