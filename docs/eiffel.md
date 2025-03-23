---
id: eiffel
title: DbC in Eiffel
description: How Design by Contract is built into the Eiffel language with native preconditions, postconditions, and invariants.
sidebar_position: 4
slug: /eiffel
hide_table_of_contents: false
---

# Design by Contract in Eiffel

**Eiffel** is the birthplace of Design by Contract — the language where the concept was first introduced and fully realized.

Contracts are **not optional** in Eiffel. They're part of the language's DNA and enforced by default, both at runtime and in tooling.

---

## How Contracts Work in Eiffel

Eiffel supports:

- **Preconditions**: `require`
- **Postconditions**: `ensure`
- **Invariants**: `invariant` blocks in classes

These are checked **automatically** before/after method execution and when object state is accessed or modified.

---

### Example

```eiffel
class
    ACCOUNT

create
    make

feature {NONE} -- Initialization

    make (initial_balance: INTEGER)
        do
            balance := initial_balance
        ensure
            balance_set: balance = initial_balance
        end

feature -- Access

    balance: INTEGER

feature -- Element change

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

This example:

- Ensures deposits are positive (`require`)
- Guarantees the new balance is correct (`ensure`)
- Maintains the class invariant that balance is never negative

---

## Why Eiffel Matters

Eiffel remains the **purest and most complete implementation** of Design by Contract:

- **Contracts are not bolted on** — they shape how you model, design, and reason about software
- **Tooling like AutoProof** supports static verification of contracts
- The **language encourages correctness-first thinking** — not just testing after the fact

## Resources

- [Eiffel and Design by Contract](https://www.eiffel.org/doc/solutions/Design_by_Contract_and_Assertions)
- [Official Eiffel Documentation](https://www.eiffel.org/documentation)
