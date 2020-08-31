var Html = {
    escapeHTML: function (str) { return str.replace(/[&<>'"]/g, function (tag) { return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&#39;',
        '"': '&quot;',
    }[tag] || tag); }); },
    unescapeHTML: function (str) { return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {
        return ({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': '\'',
            '&quot;': '"'
        }[tag] || tag);
    }); },
};
export default Html;
