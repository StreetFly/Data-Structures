class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
    }

    hash(key) {
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.buckets.length;
    }

    set(key, value) {
        const index = this.hash(key);
        this.buckets[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.buckets[index];
    }

    has(key) {
        const index = this.hash(key);
        return this.buckets[index] !== undefined;
    }

    delete(key) {
        const index = this.hash(key);
        if (this.buckets[index] !== undefined) {
            delete this.buckets[index];
            return true;
        }
        return false;
    }
}