import _slugify from "slugify";
import { decode } from "html-entities";

export function slugify(text: string) {
    // First decode any HTML entities in the text
    const decodedText = decode(text);
    
    // Then create a slug from the decoded text
    return _slugify(decodedText, {
        remove: /[*+~.()'"!:@]/g, // Remove special characters
        lower: true, // Convert to lowercase
        strict: true, // Strip special characters
        trim: true, // Trim leading/trailing spaces
    });
}