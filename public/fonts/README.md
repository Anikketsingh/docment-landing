# Filson Soft Font Files

Currently, the website is using Outfit (a Google Font) as a temporary replacement for Filson Soft.

If you want to use the actual Filson Soft font:

1. Purchase or license Filson Soft from:
   - [Mostardesign Type Foundry](https://www.mostardesign.com/fonts/filson-soft)
   - [MyFonts](https://www.myfonts.com/collections/filson-soft-font-mostardesign-type-foundry)
   - [Adobe Fonts](https://fonts.adobe.com/fonts/filson-soft) (if you have an Adobe Creative Cloud subscription)

2. Convert the font files to woff2 format if they're not already in that format.

3. Update the layout.tsx file to use the local font files instead of the Google Font alternative.

## Implementation Instructions

After obtaining the font files, you'll need to:

1. Place the font files in this directory
2. Update the app/layout.tsx file to use localFont instead of the Google Font

Example code for layout.tsx:

```typescript
import localFont from "next/font/local";

// Replace this with your actual font files
const filsonSoft = localFont({
  src: [
    {
      path: './fonts/FilsonSoftRegular.woff2',  // Adjust path as needed
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FilsonSoftMedium.woff2',   // Adjust path as needed
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FilsonSoftBold.woff2',     // Adjust path as needed
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-filson-soft',
});
```