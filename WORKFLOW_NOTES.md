# Workflow Notes

- **Checkout Proof:** The first listing shows the runner's initial workspace before repository checkout; the second shows the checked-out repository contents.
- **Subfolder Builder:** The checkout step is not affected by the default working directory because `defaults.run` applies only to shell `run` steps, not action steps.
- **Ordered Pipeline:** After the deliberate `setup` failure, `verify` and `finish` are skipped, not failed, because their `needs` dependencies did not succeed and their steps never ran.