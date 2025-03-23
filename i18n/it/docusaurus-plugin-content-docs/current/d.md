---
id: d
title: DbC in D
description: Come il linguaggio D supporta il Design by Contract tramite i blocchi nativi in, out e invariant.
sidebar_position: 6
slug: /d
hide_table_of_contents: false
---

# Design by Contract in D

Il linguaggio **D** supporta nativamente il Design by Contract — è parte integrante della sua sintassi sin dalla nascita.

Tramite i blocchi `in`, `out` e `invariant`, D consente di esprimere direttamente nel codice **precondizioni**, **postcondizioni** e **invarianti**. Questi contratti sono **verificati in fase di esecuzione** e l'uso di tale meccanismo è incoraggiato per via dell'approccio di D incentrato su **correttezza** ed **espressività**.

---

## Come funzionano i contratti in D

### Precondizioni e postcondizioni

Usa i blocchi `in` e `out` all'interno delle funzioni:

```d
int deposit(int currentBalance, int amount)
in {
    assert(amount > 0); // Precondizione
}
out(result) {
    assert(result == currentBalance + amount); // Postcondizione
}
body {
    return currentBalance + amount;
}
```

- Il blocco `in` viene eseguito **prima** della funzione — deve essere soddisfatto per procedere
- Il blocco `out(result)` viene eseguito **dopo** — serve a validare il risultato
- `body` contiene la logica vera e propria della funzione

## Invarianti

Puoi definire **invarianti di classe** con il blocco `invariant`:

```d
class Account {
    int balance;

    this(int initial) {
        balance = initial;
    }

    void deposit(int amount)
    in {
        assert(amount > 0);
    }
    out {
        assert(balance >= 0);
    }
    body {
        balance += amount;
    }

    invariant {
        assert(balance >= 0);
    }
}
```

- Il blocco `invariant` viene verificato **prima e dopo ogni chiamata a un metodo pubblico**
- Serve a garantire la **correttezza dello stato interno dell'oggetto**

---

## Controllo in fase di compilazione

I contratti in D possono essere **abilitati o disabilitati** in base ai flag di compilazione:

- Usa `-release` per disabilitarli (ad esempio, in produzione)
- Mantienili **attivi in sviluppo** per ottenere la massima sicurezza

---

## Cosa rende D speciale

Il supporto ai contratti in D è:

- **Nativo e parte del linguaggio**
- **Chiaro e idiomatico** — senza decoratori o boilerplate
- Progettato per intercettare i bug **lì dove si presentano**, non dopo

D trova un buon equilibrio tra **prestazioni da linguaggio di sistema** ed **espressività di alto livello**, risultando una scelta interessante per chi mette la correttezza al primo posto.

---

## Risorse

- [Specifica del linguaggio D: Contratti](https://dlang.org/spec/contracts.html)
- [Tour del linguaggio D: Contract programming](https://tour.dlang.org/tour/en/gems/contract-programming)
- [DLang su GitHub](https://github.com/dlang)
