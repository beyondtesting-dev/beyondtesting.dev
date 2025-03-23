---
title: Contratti vs Testing Tradizionale
description: Due diagrammi che confrontano visivamente il testing tradizionale con il Design by Contract, e mostrano cosa possono sostituire i contratti.
sidebar_position: 2
hide_table_of_contents: false
---

# Contratti o test?

Quando si pensa al testing, molti sviluppatori preparano una lunga lista di casi da scrivere e mantenere. Un approccio che spesso sembra infinito e, talvolta, fragile.

## Testing tradizionale

```
✅ test_input_valido_restituisce_valore_atteso
❌ test_input_non_valido_genera_errore
✅ test_valore_limite_minimo
✅ test_valore_limite_massimo
✅ test_coerenza_stato_interno
❌ test_input_nullo
✅ test_formato_output
```

Sette test per una sola funzione. E non puoi mai essere certo di aver coperto tutti gli scenari.

---

## Design by Contract

```
Precondizione: l’input deve essere un intero positivo
Postcondizione: l’output è una stringa che rispetta /^[a-z]+$/
Invariante: il buffer interno non è mai nullo
```

Tre regole chiare, sempre rispettate. Nessuna sorpresa.

---

## Confronto visivo

### Testing tradizionale

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "transparent",
    "primaryColor": "#0D1B2A",
    "primaryTextColor": "#ffffff",
    "secondaryTextColor": "#ffffff",
    "tertiaryTextColor": "#ffffff",
    "textColor": "#ffffff",
    "primaryBorderColor": "#4ECDC4",
    "lineColor": "#005A9C",
    "secondaryColor": "#13283F",
    "tertiaryColor": "#1B3550",
    "clusterBkg": "#0D1B2A",
    "clusterBorder": "#4ECDC4"
  }
}}%%
flowchart TD
  A[Primo Test] --> Z
  B[Secondo Test] --> Z
  C[Terzo Test] --> Z
  D[Quarto Test] --> Z
  Z[Funzione testata]

  subgraph Scenari di test
    A
    B
    C
    D
  end
```

### Design by Contract

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "transparent",
    "primaryColor": "#0D1B2A",
    "primaryTextColor": "#ffffff",
    "secondaryTextColor": "#ffffff",
    "tertiaryTextColor": "#ffffff",
    "textColor": "#ffffff",
    "primaryBorderColor": "#4ECDC4",
    "lineColor": "#005A9C",
    "secondaryColor": "#13283F",
    "tertiaryColor": "#1B3550",
    "clusterBkg": "#0D1B2A",
    "clusterBorder": "#4ECDC4"
  }
}}%%
flowchart TD
  X[Precondizione] --> T[Funzione con contratto]
  T --> Y[Postcondizione]
  Y --> I[Invariante]

  subgraph Flusso
    X
    Y
    I
  end
```

---

> I test tradizionali cercano di coprire ogni possibilità.  
> Il Design by Contract dà certezze.
