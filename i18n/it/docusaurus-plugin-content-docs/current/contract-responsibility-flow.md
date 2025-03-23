---
title: Di chi è la responsabilità?
description: Come viene stabilita la responsabilità tra chiamante e funzione chiamata.
sidebar_position: 3
hide_table_of_contents: false
---

# Di chi è la responsabilità?

Il Design by Contract non si limita a rilevare gli errori — indica **chi è responsabile** quando qualcosa va storto.

I contratti rendono tutto esplicito:

- Le **precondizioni** devono essere soddisfatte da chi **chiama** la funzione
- Le **postcondizioni** e le **invarianti** devono essere rispettate da chi **implementa** la funzione

Se un contratto viene violato, non c'è ambiguità su chi abbia sbagliato — la responsabilità è scritta nel codice.

---

## Diagramma

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "transparent",
    "primaryColor": "#0D1B2A",
    "primaryTextColor": "#ffffff",
    "primaryBorderColor": "#4ECDC4",
    "lineColor": "#005A9C",
    "secondaryColor": "#13283F",
    "tertiaryColor": "#1B3550",
    "clusterBkg": "#0D1B2A",
    "clusterBorder": "#4ECDC4",
    "fontFamily": "Inter, sans-serif",
    "fontSize": "16px",
    "textColor": "#ffffff",
    "secondaryTextColor": "#ffffff",
    "tertiaryTextColor": "#ffffff"
  }
}}%%
flowchart TD
  Caller[Chiamante] --> A[Verifica precondizione]
  A -->|Valida| B[Funzione]
  A -->|Violata| F[Errore del chiamante 🛑]

  B --> C[Verifica postcondizione]
  C -->|Valida| D[Restituzione del risultato]
  C -->|Violata| G[Errore nel contratto della funzione ⚠️]
```

---

> Il Design by Contract non si limita a segnalare un errore — ti dice _perché_ è successo, e _di chi è la responsabilità_.
