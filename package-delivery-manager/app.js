const packages = [
    {
        trackingNumber: "PKG1001",
        customer: "Jordan Lee",
        address: "120 Pine Street",
        priority: 2
    },
    {
        trackingNumber: "PKG1002",
        customer: "Taylor Smith",
        address: "45 Oak Avenue",
        priority: 1
    },
    {
        trackingNumber: "PKG1003",
        customer: "Morgan Davis",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1004",
        customer: "Casey Johnson",
        address: "300 Cedar Lane",
        priority: 2
    },
    {
        trackingNumber: "PKG1005",
        customer: "Riley Brown",
        address: "150 Maple Drive",
        priority: 1
    },
    {
        trackingNumber: "PKG1006",
        customer: "Alex Taylor",
        address: "75 Birch Boulevard",
        priority: 3
    },
    {
        trackingNumber: "PKG1007",
        customer: "Jordan Lee",
        address: "120 Pine Street",
        priority: 2
    },
    {
        trackingNumber: "PKG1008",
        customer: "Taylor Smith",
        address: "45 Oak Avenue",
        priority: 1
    },
    {
        trackingNumber: "PKG1009",
        customer: "Morgan Davis",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1010",
        customer: "Casey Johnson",
        address: "300 Cedar Lane",
        priority: 2
    }
];

function linearSearch(array, target) {
    let comparisons = 0;
    for (let i = 0; i < array.length; i++) {
        comparisons++;
        if (array[i].trackingNumber.toLowerCase().trim() === target.toLowerCase().trim()) {
            console.log(`Linear Search Comparisons: ${comparisons}`);
            return array[i];
        }
    }
    return null;
}

console.log(linearSearch(packages, "pkg1001  "));
console.log(linearSearch(packages, "PKG1005"));
console.log(linearSearch(packages, "PKG9999"));

function binarySearch(array, target) {
    let comparisons = 0;
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        comparisons++;
        if (array[mid].trackingNumber.toLowerCase().trim() === target.toLowerCase().trim()) {
            console.log(`Binary Search Comparisons: ${comparisons}`);
            return array[mid];
        }
        if (array[mid].trackingNumber.toLowerCase().trim() < target.toLowerCase().trim()) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return null;
}

console.log(binarySearch(packages, "pkg1002  "));
console.log(binarySearch(packages, "PKG1008"));
console.log(binarySearch(packages, "PKG9999"));

console.log(`Final Summary: The delivery company can use linear or binary search to find packages by their tracking number.
    The linear search checks every index of the array until the tracking number is found and the binary search checks the
    mid point and depending on if that is higher or lower than the tracking number it uses the left or right half of the array
    to check the mid point again cutting the array in half repeatedly until the package is found. The data needs to be sorted 
    for the binary search to work so that the comparissons of greater than or lesser than are accurate. Binary search makes fewer
    comparisons in the worst case scenario. Linear search is still useful in unsorted arrays and binary search is a better choice in larger 
    datasets`)
