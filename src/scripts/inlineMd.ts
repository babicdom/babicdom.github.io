/**
 * Minimal inline-markdown renderer for frontmatter strings (tip summaries,
 * entry descriptions) that are displayed outside a markdown <Content /> body.
 * Escapes HTML, then supports `code`, **bold** and *italic* spans.
 * Use with set:html on an element carrying the .md-inline class.
 */
export function inlineMd(text: string): string {
    const escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return escaped
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
