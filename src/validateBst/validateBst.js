const validateBst = (node, min=null, max=null) => {
    if((min && node.data < min) || (max && node.data > max)) {
        return false;
    }

    if(node.left && node.right) {
        return validateBst(node.left, min !== null ? min : null, node.data) && validateBst(node.right, node.data, max !== null ? max : null);
    }

    if(node.left) {
        return validateBst(node.left, min !== null ? min : null, node.data);
    }

    if(node.right) {
        return validateBst(node.right, node.data, max !== null ? max : null);
    }
    
    return true;
}

module.exports = validateBst;