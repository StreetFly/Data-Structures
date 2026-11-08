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

const bubbleSortByTotal = (orders) => {
    let swapCount = 0
    let comparisonCount = 0;
    let swapping = true;

    while (swapping) {
        swapping = false;
        for (let i = 0; i < orders.length - 1; i++) {
            comparisonCount++;
            if (orders[i].total > orders[i + 1].total) {
                [orders[i], orders[i + 1]] = [orders[i + 1], orders[i]];
                swapCount++;
                swapping = true;
            }
        }
    }
    console.log(`Swapped ${swapCount} times`);
    console.log(`Compared ${comparisonCount} times`);
    return orders;
};
console.log(bubbleSortByTotal(orders));

