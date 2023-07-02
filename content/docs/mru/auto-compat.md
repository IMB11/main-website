---
title: Automatic Compatability Entrypoints
---

MRU automatically calls the `mru-compat-x` entrypoint (where X is the mod id) for all installed mods.

This is recursive, so for example, any jar-in-jar mods will also be considered an installed mod.

## Usage

Create a class which implements the `CompatabilityEntrypoint` interface:

```java
public class MyCompatEntrypoint implements CompatabilityEntrypoint {
    @Override
    public void initialize() {
        ...
    }
}
```

Next, add it to the `mru-compat-x` (where X is the mod id) entrypoint in your `fabric.mod.json`:

```json
"entrypoints": {
    "mru-compat-x": [
      "my.mod.compat.MyCompatEntrypoint"
    ],
}
```

If the mod specified is installed, this entrypoint will run.