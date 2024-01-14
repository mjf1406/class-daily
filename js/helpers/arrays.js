Array.prototype.random = function() {
    if (this.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
}
Array.prototype.getUniqueValuesOfKey = function(key) {
    const unique = new Set(this.map(item => item[key]));
    return Array.from(unique);
};