'use strict';

const items = [{
    "Word": "service",
    "Count": 15847
},

{
    "Word": "customer",
    "Count": 13295
},

{
    "Word": "call",
    "Count": 12418
},

{
    "Word": "time",
    "Count": 9261
},

{
    "Word": "representative",
    "Count": 9093
},

{
    "Word": "issue",
    "Count": 8721
},

{
    "Word": "phone",
    "Count": 8576
},

{
    "Word": "rep",
    "Count": 6770
},

{
    "Word": "problem",
    "Count": 6308
},

{
    "Word": "resolve",
    "Count": 6297
},

{
    "Word": "bill",
    "Count": 5890
},

{
    "Word": "back",
    "Count": 4671
},

{
    "Word": "long",
    "Count": 4634
},

{
    "Word": "good",
    "Count": 4564
},

{
    "Word": "years",
    "Count": 4490
},

{
    "Word": "told",
    "Count": 4197
},

{
    "Word": "internet",
    "Count": 4153
},

{
    "Word": "pay",
    "Count": 4089
},

{
    "Word": "change",
    "Count": 3959
},

{
    "Word": "month",
    "Count": 3937
},

{
    "Word": "price",
    "Count": 3904
},

{
    "Word": "offer",
    "Count": 3777
},

{
    "Word": "last",
    "Count": 3749
},

{
    "Word": "helpful",
    "Count": 3711
},

{
    "Word": "great",
    "Count": 3683
},

{
    "Word": "plan",
    "Count": 3351
},

{
    "Word": "better",
    "Count": 3348
},

{
    "Word": "spoke",
    "Count": 3301
},

{
    "Word": "thank",
    "Count": 3294
},

{
    "Word": "experience",
    "Count": 3185
},

{
    "Word": "person",
    "Count": 3141
},

{
    "Word": "wait",
    "Count": 3115
},

{
    "Word": "again",
    "Count": 3051
},

{
    "Word": "contact",
    "Count": 2981
},

{
    "Word": "deal",
    "Count": 2959
},

{
    "Word": "tv",
    "Count": 2920
},

{
    "Word": "company",
    "Count": 2857
},

{
    "Word": "make",
    "Count": 2847
},

{
    "Word": "work",
    "Count": 2769
},

{
    "Word": 2,
    "Count": 2762
},

{
    "Word": "happy",
    "Count": 2722
},

{
    "Word": "account",
    "Count": 2688
},

{
    "Word": "people",
    "Count": 2591
},

{
    "Word": "feel",
    "Count": 2543
},

{
    "Word": "times",
    "Count": 2511
},

{
    "Word": "made",
    "Count": 2451
},

{
    "Word": "home",
    "Count": 2439
},

{
    "Word": "cancel",
    "Count": 2401
},

{
    "Word": "talk",
    "Count": 2376
},

{
    "Word": "hour",
    "Count": 2312
},

{
    "Word": "agent",
    "Count": 2297
},

{
    "Word": 3,
    "Count": 2157
},

{
    "Word": "give",
    "Count": 2150
},

{
    "Word": "cable",
    "Count": 2132
},

{
    "Word": "understand",
    "Count": 2108
},

{
    "Word": "package",
    "Count": 2101
},

{
    "Word": "don't",
    "Count": 2082
},

{
    "Word": "speak",
    "Count": 2058
},

{
    "Word": "bell",
    "Count": 2022
},

{
    "Word": "provider",
    "Count": 1966
},

{
    "Word": "explain",
    "Count": 1955
},

{
    "Word": "charge",
    "Count": 1945
},

{
    "Word": "day",
    "Count": 1942
},

{
    "Word": "excellent",
    "Count": 1930
},

{
    "Word": "find",
    "Count": 1930
},

{
    "Word": "year",
    "Count": 1925
},

{
    "Word": "received",
    "Count": 1924
},

{
    "Word": "answer",
    "Count": 1899
},

{
    "Word": "best",
    "Count": 1873
},

{
    "Word": "thanks",
    "Count": 1854
},

{
    "Word": "product",
    "Count": 1838
},

{
    "Word": "loyal",
    "Count": 1786
},

{
    "Word": "frustrate",
    "Count": 1785
},

{
    "Word": "technician",
    "Count": 1753
},

{
    "Word": "switch",
    "Count": 1747
},

{
    "Word": "knowledgeable",
    "Count": 1724
},

{
    "Word": "question",
    "Count": 1720
},

{
    "Word": "transfer",
    "Count": 1693
},

{
    "Word": "value",
    "Count": 1692
},

{
    "Word": "want",
    "Count": 1676
},

{
    "Word": "solve",
    "Count": 1670
},

{
    "Word": "i'm",
    "Count": 1653
},

{
    "Word": "satisfy",
    "Count": 1641
},

{
    "Word": "line",
    "Count": 1635
},

{
    "Word": "nothing",
    "Count": 1624
},

{
    "Word": "system",
    "Count": 1617
},

{
    "Word": "channel",
    "Count": 1609
},

{
    "Word": "ignite",
    "Count": 1580
},

{
    "Word": "option",
    "Count": 1579
},

{
    "Word": "email",
    "Count": 1576
},

{
    "Word": "hope",
    "Count": 1574
},

{
    "Word": "contract",
    "Count": 1569
},

{
    "Word": "ask",
    "Count": 1561
},

{
    "Word": "disappointed",
    "Count": 1560
},

{
    "Word": "number",
    "Count": 1560
},

{
    "Word": "cost",
    "Count": 1546
},

{
    "Word": "fix",
    "Count": 1541
},

{
    "Word": "previous",
    "Count": 1534
},

{
    "Word": "business",
    "Count": 1456
},

{
    "Word": "put",
    "Count": 1451
}
]

// tests for the condition against all the values inside the array.
const isEvery = items.every((item) => {
    return item.Count > 0;
});

console.log(isEvery);