---
id: eiffel
title: DbC in Eiffel
description: Come il Design by Contract è integrato nel linguaggio Eiffel con precondizioni, postcondizioni e invarianti nativi.
sidebar_position: 4
slug: /eiffel
hide_table_of_contents: false
---

# Design by Contract in Eiffel

**Eiffel** è la culla del Design by Contract — il linguaggio in cui questo paradigma è nato ed è stato pienamente realizzato.

Nel mondo Eiffel, i contratti **non sono opzionali**. Fanno parte del linguaggio, sono applicati per impostazione predefinita, sia in fase di esecuzione che negli strumenti di supporto.

---

## Come funzionano i contratti in Eiffel

Eiffel supporta:

- **Precondizioni**: `require`
- **Postcondizioni**: `ensure`
- **Invarianti**: blocchi `invariant` nelle classi

Questi controlli vengono eseguiti **automaticamente** prima e dopo l'esecuzione dei metodi, nonché quando lo stato dell'oggetto viene letto o modificato.

---

### Esempio

```eiffel
class
    ACCOUNT

create
    make

feature {NONE} -- Inizializzazione

    make (initial_balance: INTEGER)
        do
            balance := initial_balance
        ensure
            balance_set: balance = initial_balance
        end

feature -- Accesso

    balance: INTEGER

feature -- Modifica

    deposit (amount: INTEGER)
        require
            positive_amount: amount > 0
        do
            balance := balance + amount
        ensure
            balance_increased: balance = old balance + amount
        end

invariant
    non_negative_balance: balance >= 0

end
```

Questo esempio garantisce che:

- i depositi siano positivi (`require`)
- il nuovo saldo sia corretto (`ensure`)
- il saldo non sia mai negativo (`invariant`)

---

## Cosa rende Eiffel speciale

Eiffel offre tuttora l'**implementazione più pura e completa** del Design by Contract:

- I **contratti sono profondamente integrati**: influenzano il modo in cui si modella, si progetta e si ragiona sul software
- Strumenti come **AutoProof** supportano la verifica statica dei contratti
- Il linguaggio promuove un approccio del tipo: **"la correttezza prima di tutto"**

## Risorse

- [Eiffel e il Design by Contract](https://www.eiffel.org/doc/solutions/Design_by_Contract_and_Assertions)
- [Documentazione ufficiale di Eiffel](https://www.eiffel.org/documentation)
