const Html = {
    escapeHTML: (str: string) => str.replace(
        /[&<>'"]/g,
        tag => (({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;',
        } as {[propName: string]: string})[tag] || tag)
    ),
    unescapeHTML: (str: string) => str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
        (({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': "'",
            '&quot;': '"'
        } as {[propName: string]: string})[tag] || tag)
    ),
}

export default Html;