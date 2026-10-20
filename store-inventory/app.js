class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
        this.count = 0;

        for (let i = 0; i < size; i++) {
            this.buckets[i] = [];
        }
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
        const bucket = this.buckets[index];

        for (const item of bucket) {
            if (item.key === key) {
                item.value = value;
                return;
            }
        }
        bucket.push({ key, value });
        this.count++;

        const loadFactor = this.count / this.buckets.length;
        if (loadFactor > 0.75) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (const item of bucket) {
            if (item.key === key) {
                return item.value;
            }
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (const item of bucket) {
            if (item.key === key) {
                return true;
            }
        }
        return false;
    }

    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.count--;
                return true;
            }
        }
        return false;
    }
    
    resize() {
        const oldBuckets = this.buckets;
        this.buckets = new Array(oldBuckets.length * 2);
        this.count = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
        for (const bucket of oldBuckets) {
            for (const item of bucket) {
                this.set(item.key, item.value);
            }
        }
        console.log(`HashTable resized from ${oldBuckets.length} buckets to ${this.buckets.length} buckets`);
    }
}

const inventory = new HashTable(5);

const mouse = {
    name: "Wireless Mouse",
    price: 24.99,
    quantity: 15
};

const keyboard = {
    name: "Mechanical Keyboard",
    price: 69.99,
    quantity: 8
};

const monitor = {
    name: "4K Monitor",
    price: 299.99,
    quantity: 5
};

const headphones = {
    name: "Noise-Cancelling Headphones",
    price: 199.99,
    quantity: 12
};

const webcam = {
    name: "HD Webcam",
    price: 49.99,
    quantity: 20
};

const ba = {
    name: "collision test"
};

console.assert(inventory.set("mouse", mouse) === undefined, "Failed to add mouse to inventory");
console.assert(inventory.set("keyboard", keyboard) === undefined, "Failed to add keyboard to inventory");
console.assert(inventory.set("monitor", monitor) === undefined, "Failed to add monitor to inventory");
console.assert(inventory.set("headphones", headphones) === undefined, "Failed to add headphones to inventory");
console.assert(inventory.set("webcam", webcam) === undefined, "Failed to add webcam to inventory");
console.assert(inventory.set("ba", ba) === undefined, "Failed to add ba to inventory");
console.log("Inventory items added:", inventory.buckets);

console.assert(inventory.get("mouse") === mouse, "Failed to retrieve mouse from inventory");
console.assert(inventory.get("laptop") === null, "Failed to return null for non-existent item in inventory");

console.log("Item in inventory:", inventory.get("mouse"));
console.assert(inventory.set("mouse", { name: "Wireless Mouse", price: 19.99, quantity: 10 }) === undefined, "Failed to update mouse in inventory");
console.log("Updated item in inventory:", inventory.get("mouse"));

console.assert(inventory.has("keyboard") === true, "Failed to check existence of keyboard in inventory");

console.assert(inventory.delete("ba") === true, "Failed to delete ba from inventory");
console.log("Inventory after deleting ba:", inventory.buckets);

console.log("Final Summary: The store used a hash table to store products by their names as keys. The hash function converts the keys into indices for the array of buckets. A bucket is a place in the hashtable where key value pairs can be stored. When a collision occurs the hashtable uses seperate chaining to store both pairs in the same bucket. When the load factor exceeds 0.75vthe hashtable is resized to maintain fast search times.")
