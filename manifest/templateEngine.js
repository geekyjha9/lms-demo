class TemplateEngine {
    // Initiates the conversion process
    static populate(template, data) {
        return TemplateEngine.convertNode(template, data);
    }

    // Replaces placeholders in the template with corresponding data
    static interpolate(template, data) {
        return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return data.hasOwnProperty(key) ? data[key] : match;
        });
    }

    // Recursively converts the template nodes to JSON
    static convertNode(nodeData, data) {
        // If the node should be repeated, process each item individually
        // If data itself is an array, use it directly
        if (nodeData.repeat && Array.isArray(data)) {
            return data.map(dataItem => TemplateEngine.convertNode(nodeData, dataItem));
        }
        if (nodeData.repeat && data[nodeData.repeat]) {
            return data[nodeData.repeat].map(dataItem => TemplateEngine.convertNode(nodeData, dataItem));
        } else {
            // Create a JSON representation of the current node
            const node = { tag: nodeData.tag, attributes: {}, content: '', children: [] };

            // Process node attributes, interpolating values as necessary
            if (nodeData.attributes) {
                for (const attrName in nodeData.attributes) {
                    node.attributes[attrName] = TemplateEngine.interpolate(nodeData.attributes[attrName], data);
                }
            }

            // Interpolate the node's content if it exists
            if (nodeData.content) {
                node.content = TemplateEngine.interpolate(nodeData.content, data);
            }

            // Recursively process child nodes, if any
            if (nodeData.children && nodeData.children.length > 0) {
                node.children = nodeData.children.map(childNode => {
                    if (childNode.repeat && !data[childNode.repeat]) {
                        return null;
                    }
                    return TemplateEngine.convertNode(childNode, data);
                }).filter(child => child !== null);
            }

            // Return the JSON representation of the current node
            return node;
        }
    }
}



export { TemplateEngine }