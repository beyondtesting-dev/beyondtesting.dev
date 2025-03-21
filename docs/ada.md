---
id: ada
title: DbC in Ada
sidebar_position: 3
slug: /ada
---

# Design by Contract in Ada

**Ada** has built-in support for Design by Contract through its **aspect specification syntax**, introduced in **Ada 2012**. This allows you to specify preconditions, postconditions, and type/class invariants directly in the code — all checked at runtime.

When used with **SPARK**, these contracts can also be **statically verified**, making Ada one of the few languages that supports both runtime and formal correctness guarantees.

---

## How Contracts Work in Ada

Ada uses **aspect clauses** to attach contracts to procedures, functions, and types.

### Preconditions and Postconditions

```ada
procedure Deposit (Amount : in Positive) with
  Pre  => Amount > 0,
  Post => Account_Balance = Account_Balance'Old + Amount;
```

- `Pre` is the **precondition**: the amount must be positive
- `Post` is the **postcondition**: ensures the balance increases accordingly
- `'Old` refers to the value before execution (snapshot semantics)

## Invariants

You can define invariants on types using `Type_Invariant`:

```ada
type Account is record
   Balance : Integer := 0;
end record
with Type_Invariant => (Balance >= 0);
```

This ensures that an `Account`'s `Balance` can **never go negative**, across all operations.

---

## Runtime vs Static Checking

- In standard Ada, contracts are enforced at **runtime**
- With **SPARK Ada**, you can perform **static verification** of contract correctness — no test cases required

This makes Ada a powerful choice for **high-integrity, safety-critical systems**, like aerospace, defense, and rail.

---

## Why Ada Matters

Ada treats contracts as **first-class constructs**, not just annotations or comments.

- Contracts are part of the **language spec**
- You can enforce them at runtime **without external libraries**
- With SPARK, you can achieve **formal verification** — machine-checked correctness

---

## Resources

- [AdaCore: Intro to Contracts](https://blog.adacore.com/the-case-for-contracts)
- [Ada Reference Manual (Contracts)](https://learn.adacore.com/courses/intro-to-ada/chapters/contracts.html)
- [SPARK Language](https://www.adacore.com/about-spark)
