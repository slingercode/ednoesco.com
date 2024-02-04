import { join } from "node:path";

/** Function that return the relative path for a local font.
 *
 * Used for the library `astro-font`.
 */
export const makeRelativeFontPath = (folderName: string, fontName: string) =>
  join(process.cwd(), "public", "static", "fonts", folderName, fontName);
