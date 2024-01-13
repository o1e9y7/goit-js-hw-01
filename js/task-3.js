function getElementWidth(content, padding, border) {
    
    content = content.replace(",", ".");
    padding = padding.replace(",", ".");
    border = border.replace(",", ".");


    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    
   
    return  content + (padding * 2) + (border * 2);
}