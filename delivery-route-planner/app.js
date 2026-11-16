class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addLocation(location) {
        if (this.adjacencyList.has(location)) {
            return false;
        }
        this.adjacencyList.set(location, []);
        return true;
    }

    addRoad(locationA, locationB) {
        if (!this.adjacencyList.has(locationA) || !this.adjacencyList.has(locationB)) {
            return false;
        }

        if (!this.adjacencyList.get(locationA).includes(locationB)) {
            this.adjacencyList.get(locationA).push(locationB);
        }

        if (!this.adjacencyList.get(locationB).includes(locationA)) {
            this.adjacencyList.get(locationB).push(locationA);
        }

        return true;
    }

    hasLocation(location) {
        return this.adjacencyList.has(location);
    }

    hasRoad(locationA, locationB) {
        if (!this.adjacencyList.has(locationA) || !this.adjacencyList.has(locationB)) {
            return false;
        }
        return this.adjacencyList.get(locationA).includes(locationB);
    }

    getConnections(location) {
        if (!this.adjacencyList.has(location)) {
            return [];
        }
        return this.adjacencyList.get(location);
    }
}

const deliveryGraph = new Graph();
deliveryGraph.addLocation("Warehouse");
deliveryGraph.addLocation("Downtown");
deliveryGraph.addLocation("Airport");
deliveryGraph.addLocation("North Station");
deliveryGraph.addLocation("Shopping Center");
deliveryGraph.addLocation("University");
deliveryGraph.addLocation("Hospital");

console.log('deliveryGraph after adding locations:', deliveryGraph);

deliveryGraph.addRoad("Warehouse", "Downtown");
deliveryGraph.addRoad("Warehouse", "Airport");
deliveryGraph.addRoad("Shopping Center", "Downtown");
deliveryGraph.addRoad("University", "Hospital");
deliveryGraph.addRoad("University", "Downtown");
deliveryGraph.addRoad("Airport", "North Station");
deliveryGraph.addRoad("Hospital", "North Station");
deliveryGraph.addRoad("Hospital", "Shopping Center");

console.log('deliveryGraph after adding roads:', deliveryGraph);

console.log(deliveryGraph.hasLocation("Warehouse")); // true
console.log(deliveryGraph.hasLocation("Mall")); // false
console.log(deliveryGraph.hasRoad("Warehouse", "Downtown")); // true
console.log(deliveryGraph.hasRoad("Warehouse", "Mall")); // false
console.log(deliveryGraph.getConnections("University")); // ["Hospital", "Downtown"]
console.log(deliveryGraph.getConnections("Mall")); // []