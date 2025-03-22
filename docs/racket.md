---
id: racket
title: DbC in Racket
description: Racket treats contracts as first-class citizens—see how they enable function, struct, and module-level correctness.
sidebar_position: 6
slug: /racket
hide_table_of_contents: false
---

# Design by Contract in Racket

**Racket** offers one of the most flexible and expressive contract systems of any programming language — and it’s built directly into the language.

Contracts in Racket are **first-class values**, meaning you can define, compose, and apply them like any other function. They're enforced **dynamically at module boundaries**, making them ideal for **component-level correctness**.

---

## How Contracts Work in Racket

### Function Contracts

You can attach contracts to functions using `define/contract`:

```racket
(define/contract (add x y)
  (-> exact-integer? exact-integer? exact-integer?)
  (+ x y))
```

- Inputs: both `x` and `y` must be exact integers
- Output: must also be an exact integer

## Struct (Invariant) Contracts

Contracts can also be applied to data structures, enforcing invariants:

```racket
(struct posn (x y)
  #:transparent)

(define/contract (make-posn x y)
  (-> number? number? (struct/c posn positive? positive?))
  (posn x y))
```

- Ensures that `x` and `y` are positive — a structural invariant

## Module Contracts

One of Racket’s most powerful features: you can contract an **entire module interface**:

```racket
(provide
 (contract-out
  [deposit (-> positive? account? account?)]
  [withdraw (-> positive? account? account?)]))
```

- This enforces contracts `at the module boundary`, promoting defensive design between components

## Composable Contracts

Contracts in Racket are **composable** — you can build complex contracts using higher-order functions.

Examples:

- `listof` to contract lists
- `->` for functions
- `struct/c`, `hash/c`, and more

This makes Racket an **ideal language for experimenting with contract-driven architecture**.

---

## Limitations

- **No static checking**: all contracts are enforced at runtime
- **Performance**: contract-heavy code can slow down execution if used indiscriminately
- **Not object-oriented**: contracts are better suited to modules and functional patterns

---

## Why Racket Matters

Racket doesn’t just _support_ contracts — it treats them as a **fundamental programming tool**.

- Ideal for teaching, rapid prototyping, and research
- Perfect for **component-level correctness**
- Encourages **thinking in contracts**, not just validating inputs

If you want to **build correct software by design**, Racket is a language that takes contracts seriously — and gives you serious tools to work with.

---

## Resources

- [Racket Guide: Contracts](https://docs.racket-lang.org/guide/contract-boundaries.html)
- [Racket Reference: Contracts](https://docs.racket-lang.org/reference/contracts.html)
- [Racket GitHub Repository](https://github.com/racket/racket)
- [Download Racket](https://download.racket-lang.org/) — includes DrRacket, the recommended IDE
