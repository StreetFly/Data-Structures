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
}

const deliveryGraph = new Graph();
deliveryGraph.addLocation("Warehouse");
deliveryGraph.addLocation("Downtown");
deliveryGraph.addLocation("Airport");

console.log('deliveryGraph after adding locations:', deliveryGraph);

deliveryGraph.addRoad("Warehouse", "Downtown");
deliveryGraph.addRoad("Warehouse", "Airport");

console.log('deliveryGraph after adding roads:', deliveryGraph);