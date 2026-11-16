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

    removeRoad(locationA, locationB) {
        if (!this.adjacencyList.has(locationA) || !this.adjacencyList.has(locationB)) {
            return false;
        }

        if (!this.adjacencyList.get(locationA).includes(locationB)) {
            return false;
        }

        this.adjacencyList.set(
            locationA,
            this.adjacencyList.get(locationA).filter(location => location !== locationB)
        );

        this.adjacencyList.set(
            locationB,
            this.adjacencyList.get(locationB).filter(location => location !== locationA)
        );

        return true;
    }

    removeLocation(location) {
        if (!this.adjacencyList.has(location)) {
            return false;
        }

        for (const connectedLocation of this.adjacencyList.get(location)) {
            this.removeRoad(location, connectedLocation);
        }

        this.adjacencyList.delete(location);

        return true;
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

console.log("\nhasLocation(location): Return true if the location exists. Otherwise, return false.");
console.log("hasLocation('Warehouse'):", deliveryGraph.hasLocation("Warehouse")); // true
console.log("hasLocation('Mall'):", deliveryGraph.hasLocation("Mall")); // false

console.log("\nhasRoad(locationA, locationB): Return true if a direct road connects the two locations. Otherwise, return false.");
console.log("hasRoad('Warehouse', 'Downtown'):", deliveryGraph.hasRoad("Warehouse", "Downtown")); // true
console.log("hasRoad('Warehouse', 'Mall'):", deliveryGraph.hasRoad("Warehouse", "Mall")); // false

console.log("\ngetConnections(location): Return the locations directly connected to the requested location. If getConnections() receives a location that does not exist, it should return an empty array.");
console.log("getConnections('University'):", deliveryGraph.getConnections("University")); // ["Hospital", "Downtown"]
console.log("getConnections('Mall'):", deliveryGraph.getConnections("Mall")); // []

console.log("\nroad must be removed from both locations because the graph is undirected.");
console.log("removeRoad('University', 'Hospital'):", deliveryGraph.removeRoad("University", "Hospital")); // true
console.log("getConnections('University'):", deliveryGraph.getConnections("University")); // ["Downtown"]
console.log("getConnections('Hospital'):", deliveryGraph.getConnections("Hospital")); // ["North Station", "Shopping Center"]

console.log("\nlocation should not leave its name inside another location's connection list.");
console.log("removeLocation('Shopping Center'):", deliveryGraph.removeLocation("Shopping Center")); // true
console.log("hasLocation('Shopping Center'):", deliveryGraph.hasLocation("Shopping Center")); // false
console.log("getConnections('Hospital'):", deliveryGraph.getConnections("Hospital")); // ["North Station"]
console.log("getConnections('Downtown'):", deliveryGraph.getConnections("Downtown")); // ["Warehouse", "University"]