---
title: Contracts vs Traditional Testing
description: Two diagrams that visually compare traditional unit testing with Design by Contract, and show what contracts can replace.
sidebar_position: 2
hide_table_of_contents: false
---

# What Contracts Replace

Most developers have a mental model that looks like this:

## Traditional Testing

```
✅ test_valid_input_returns_expected_value
❌ test_invalid_input_throws_error
✅ test_edge_case_minimum_value
✅ test_edge_case_maximum_value
✅ test_internal_state_consistency
❌ test_null_input
✅ test_output_format
```

Seven test cases. One function. And you’re never sure if you missed one.

---

## Design by Contract

```
Precondition: input must be a positive integer
Postcondition: output is a string matching /^[a-z]+$/
Invariant: internal buffer is never null
```

Three simple rules. No surprises. Always enforced.

---

## Visual Comparison

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
  A[Test Case 1] --> Z
  B[Test Case 2] --> Z
  C[Test Case 3] --> Z
  D[Test Case 4] --> Z
  Z[Target Function]

  subgraph Traditional Testing
    A
    B
    C
    D
  end

  X[Precondition] --> T[Target Function with Contracts]
  T --> Y[Postcondition]
  Y --> I[Invariant]

  subgraph Design by Contract
    X
    Y
    I
  end
```

---

> Traditional tests wrap the function with dozens of cases.  
> Design by Contract wraps it with truth.
