const orders = [
    {
        orderNumber: 1005,
        customer: "Jordan Lee",
        total: 84.99,
        priority: 2
    },
    {
        orderNumber: 1002,
        customer: "Taylor Smith",
        total: 149.50,
        priority: 1
    },
    {
        orderNumber: 1008,
        customer: "Morgan Davis",
        total: 42.75,
        priority: 3
    },
    {
        orderNumber: 1001,
        customer: "Alex Johnson",
        total: 199.99,
        priority: 1
    },
    {
        orderNumber: 1004,
        customer: "Casey Brown",
        total: 59.99,
        priority: 2
    },
    {
        orderNumber: 1003,
        customer: "Riley Wilson",
        total: 120.00,
        priority: 1
    },
    {
        orderNumber: 1006,
        customer: "Jamie Martinez",
        total: 75.50,
        priority: 2
    },
    {
        orderNumber: 1007,
        customer: "Drew Taylor",
        total: 99.99,
        priority: 3
    }
];
// Bubble sort time complexity: O(n^2) in all cases
function bubbleSortByTotal(arr) {
    let swapCount = 0
    let comparisonCount = 0;
    let swapping = true;

    while (swapping) {
        swapping = false;
        for (let i = 0; i < arr.length - 1; i++) {
            comparisonCount++;
            if (arr[i].total > arr[i + 1].total) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapCount++;
                swapping = true;
            }
        }
    }
    return { swapCount, comparisonCount, arr };
};
console.log(`Bubble Sort Result: json${JSON.stringify(bubbleSortByTotal([...orders]))}`);

// Selection sort time complexity: O(n^2) in all cases
function selectionSortByTotal(arr) {
    let swapCount = 0;
    let comparisonCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            comparisonCount++;
            if (arr[j].total < arr[minIndex].total) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swapCount++;
        }
    }

    return { swapCount, comparisonCount, arr };
};
console.log(`Selection Sort Result: json${JSON.stringify(selectionSortByTotal([...orders]))}`);

// Insertion sort time complexity: O(n^2) in worst case, O(n) in best case
function insertionSortByTotal(arr) {
    let swapCount = 0;
    let comparisonCount = 0;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j].total > current.total) {
            comparisonCount++;
            arr[j + 1] = arr[j];
            swapCount++;
            j--;
        }
        arr[j + 1] = current;
    }
    return { swapCount, comparisonCount, arr };
}
console.log(`Insertion Sort Result: json${JSON.stringify(insertionSortByTotal([...orders]))}`)

/* In this sample array Insertion sort makes the fewest comparisons with only 14 comparisons.
Selection sort made the fewest swaps with 6 swaps.
*/

