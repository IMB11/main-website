---
title: Color Standards
description: Documentation on the color standards that M.R.U provides.
---

These standards are, and will be, used by any UI that my mods provide.

The `Colors` class provides methods and utilities related to colors:

Most of it is self explanatory.

```java
public class Colors {
    public static final int BG = 0xFF1D1D1D;
    public static final int ELEVATED = 0xFF2D3134;
    public static final int ELEVATED_HOVER = 0xFF54585C;
    public static final int ACCENT_A = 0xFF16A5A0;
    public static final int ACCENT_B = 0xFFAC4312;

    public static final int ALPHA_100 = 0xFF;
    public static final int ALPHA_75 = 0xBF;
    public static final int ALPHA_50 = 0x7F;
    public static final int ALPHA_25 = 0x40;
    public static final int ALPHA_0 = 0x00;

    public static final int WHITE = 0xFFFFFFFF;
    public static final int DARK_GRAY = 0xFF5A5A5A;

    public static int withAlpha(int color, int alpha);

    public static int getAlpha(int color);
    public static int getRed(int color);
    public static int getGreen(int color);
    public static int getBlue(int color);

    public static int interpolateTwoColors(float tickDelta, int color1, int color2);
}
```