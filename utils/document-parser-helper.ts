import type { VNode } from "vue";
import { h } from "vue";

export function safeParseHtmlElements(htmlString: string): HTMLElement[] {
  const validTags: Set<string> = new Set([
    "div",
    "span",
    "p",
    "a",
    "ul",
    "ol",
    "li",
    "img",
    "section",
    "article",
    "header",
    "footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "strong",
    "em",
    "table",
    "thead",
    "tbody",
    "tr",
    "td",
    "th",
    "form",
    "input",
    "button",
    "label",
    "textarea",
    "select",
    "option",
    "br",
    "hr",
    "nav",
    "main",
    "figure",
    "figcaption",
    "blockquote",
    "pre",
    "code",
    "iframe",
    "video",
    "audio",
    "source",
  ]);

  const parser = new DOMParser();
  const doc: Document = parser.parseFromString(htmlString, "text/html");
  const validElements: HTMLElement[] = [];

  doc.body.childNodes.forEach((node: ChildNode) => {
    if (
      node.nodeType === Node.ELEMENT_NODE &&
      node instanceof HTMLElement &&
      validTags.has(node.tagName.toLowerCase())
    ) {
      validElements.push(node);
    }
  });

  return validElements;
}

export function htmlToVueVNodes(htmlString: string): VNode[] {
  const elements = safeParseHtmlElements(htmlString);

  return elements.map((el) => {
    const tag = el.tagName.toLowerCase();
    const attrs: Record<string, string> = {};

    // grab attributes
    for (const attr of Array.from(el.attributes)) {
      attrs[attr.name] = attr.value;
    }

    // if element has children, recursively handle them (text or nested elements)
    const children: (string | VNode)[] = [];

    for (const child of Array.from(el.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        children.push(child.textContent || "");
      } else if (
        child.nodeType === Node.ELEMENT_NODE &&
        child instanceof HTMLElement
      ) {
        const nestedVNode = htmlToVueVNodes(child.outerHTML);
        children.push(...nestedVNode); // flatten it in
      }
    }

    return h(tag, attrs, children);
  });
}
