---
id: d
title: Dbc in D
sidebar_position: 4
slug: /d
---

# Design by Contract in D

The **D programming language** has native support for Design by Contract — built right into its syntax from day one.

Using the `in`, `out`, and `invariant` blocks, D allows you to express **preconditions**, **postconditions**, and **invariants** directly in your code. These contracts are **enforced at runtime**, and their use is encouraged as part of D’s overall focus on correctness and expressiveness.

---

## How Contracts Work in D

### Preconditions and Postconditions

Use `in` and `out` blocks inside functions:

```d
int deposit(int currentBalance, int amount)
in {
    assert(amount > 0); // Precondition
}
out(result) {
    assert(result == currentBalance + amount); // Postcondition
}
body {
    return currentBalance + amount;
}
```

- `in` block: runs before the function body — must be satisfied to proceed
- `out(result)` block: runs after — validates the result
- `body`: the actual function logic

## Invariants

You can define **class invariants** with the `invariant` block:

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

- The `invariant` block is checked **before and after any public method call**
- It enforces **object-level correctness**

---

## Runtime Control

Contracts in D are compiled in or out depending on build flags:

- Use `-release` to disable them (e.g., in production)
- Keep them **on during development** for full safety

---

## Why D Matters

D’s contract support is:

- **First-class and part of the language**
- **Readable and idiomatic** — no decorators or boilerplate
- Designed to help catch bugs **where they happen**, not after

It strikes a great balance between **systems-level performance** and **high-level expressiveness**, making it a strong choice for correctness-minded developers.

---

## Resources

- [D Language Spec: Contracts](https://dlang.org/spec/contracts.html)
- [D Language Tour: Contracts](https://tour.dlang.org/tour/en/gems/contract-programming)
- [DLang GitHub](https://github.com/dlang)