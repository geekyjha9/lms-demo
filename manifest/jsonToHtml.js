class JsonToHtml {
    // Initiates the conversion process
    static convert(json) {
        return JsonToHtml.convertNode(json);
    }

    // Recursively converts the JSON nodes to HTML
    static convertNode(node) {
        // If the node is an array, process each item individually
        if (Array.isArray(node)) {
            return node.map(JsonToHtml.convertNode).join('');
        }

        // Create the opening tag and add attributes
        let html = `<${node.tag}`;
        for (const attrName in node.attributes) {
            html += ` ${attrName}="${node.attributes[attrName]}"`;
        }
        html += '>';

        // Add the node's content if it exists
        if (node.content) {
            html += node.content;
        }

        // Recursively process child nodes, if any
        if (node.children && node.children.length > 0) {
            html += node.children.map(JsonToHtml.convertNode).join('');
        }

        // Close the tag
        html += `</${node.tag}>`;

        // Return the HTML representation of the current node
        return html;
    }
}

export { JsonToHtml }
