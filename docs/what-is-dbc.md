---
id: intro
slug: /
title: What is Design by Contract?
description: Learn the core concepts of Design by Contract—preconditions, postconditions, and invariants—and how it compares to traditional testing.
sidebar_position: 1
hide_table_of_contents: false
---

# What is Design by Contract?

**Design by Contract (DbC)** is a way of writing code that _documents and enforces its own expectations_ — not just through comments or tests, but through executable conditions.

At its core, DbC defines three things for every function or method:

- **Preconditions** — What must be true _before_ it runs
- **Postconditions** — What it guarantees _after_ it runs
- **Invariants** — What must _always_ be true for an object

Think of it like a legal contract between different parts of your code:  
_"I promise to give you valid input, you promise to do your job and leave things in a valid state."_

---

## Why should you care?

Because **contracts catch bugs where they happen** — at the boundaries of logic.

Instead of writing 50 tests hoping to cover every edge case, DbC makes your program **self-verifying**. It tells you _immediately_ when something breaks its promise.

Less testing. More trust.

---

## How does it compare to testing?

|                          | Traditional Tests | Design by Contract |
| ------------------------ | ----------------- | ------------------ |
| ✅ Finds bugs            | Yes               | Yes                |
| 🧠 Documents assumptions | Sometimes         | Always             |
| 🧪 Requires test cases   | Yes               | Not always         |
| ⚠️ Fails at runtime      | Yes               | Yes (but sooner)   |
| 🔁 Needs maintenance     | Yes               | Minimal            |

They're not mutually exclusive — but DbC can **replace a large chunk of your testing**, especially for internal logic.

---

## Isn't this just input validation?

No. Input validation protects from user mistakes.  
Contracts protect from **developer mistakes** — violations of your own logic.

DbC enforces trust _within your codebase_. That's what makes it powerful.

---

## Where can I see it in action?

These languages have **native support** for Design by Contract — it's built into the compiler or core runtime, not bolted on with libraries or frameworks:

- [**Eiffel**](/kb/eiffel): the birthplace of Design by Contract. Contracts are part of the language's identity and enforced by default.
- [**Ada**](/kb/ada): includes preconditions, postconditions, and invariants as part of the language (since Ada 2012), with formal support in SPARK for critical systems.
- [**D**](/kb/d): supports `in` and `out` contracts directly in function declarations, making DbC a natural part of the development process.
- [**Racket**](/kb/racket): offers a contract system deeply integrated into the language. Contracts are first-class values and can be applied to functions, data structures, classes, and modules — enabling full preconditions, postconditions, and invariants at runtime.

---

In other ecosystems, particularly Python, Design by Contract is implemented via **third-party libraries**:

- [**icontract**](https://github.com/Parquery/icontract): a dedicated DbC library for Python with support for preconditions, postconditions, and invariants using decorators.
- [**deal**](https://github.com/life4/deal): a contract library that supports runtime checks and even static analysis.

These tools can bring contract-like behavior into Python, but enforcement remains **opt-in**, and integration with the language/runtime is limited compared to native solutions.
