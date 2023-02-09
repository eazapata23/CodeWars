// Prorating Subscriptions
// Background
// Our company has started selling to larger customers, so we are creating subscription tiers with different feature sets to cater to our customers’ unique needs. We previously charged every customer a flat fee per month, but now we plan on charging for the number of users active on the customer's subscription plan. As a result, we're changing our billing system.

// Instructions
// You’ve picked up the work item to implement the logic to compute the monthly charge:

// Prorating Subscriptions (#8675309)
// We'd like you to implement a monthlyCharge function to calculate the total monthly bill for a customer.

// Customers are billed based on their subscription tier. We charge them a prorated amount for the portion of the month each user’s subscription was active. For example, if a user was activated or deactivated part way through the month, then we charge them only for the days their subscription was active.

// We want to bill customers for all days users were active in the month (including any activation and deactivation dates, since the user had some access on those days).

// Notes
// Here’s an idea of how we might go about this:

// Calculate a daily rate for the subscription tier
// For each day of the month, identify which users had an active subscription on that day
// Multiply the number of active users for the day by the daily rate to calculate the total for the day
// Return the running total for the month at the end


// Computes the monthly charge for a given subscription
// @returns {number} the total monthly bill for the customer in cents, rounded
//to the nearest cent. For example, a bill of $20.00 should return 2000.
//If there are no active users or the subscription is null, returns 0.

//@param {string} month - Always present 
//Has the following structure:
// "2022-04" // April 2022 in YYYY-MM format

//@param {object} subscription - May be null
//If present, has the following structure:
//{
// 'id': 763,
// 'customerId': 328,
// 'mohnthlyPriceInCents':359 //price per active user per month

// }

//@param {array} users - May be empty, but not null
// Has the following structure:
// [
//     {
// 'id':1,
// 'name': "Employee #1",
// 'customerId': 1,

// when this user started
//'activatedOn': new Date("2021-11-04"),

//Last day to bill for user
//should bill up to and including this date
// since user had some access on this date
// 'deactivatedOn': new Date("2022-04-10")
// },
// {
// 'id':2,
// 'name': "Employee #2",
// 'customerId': 1,

// when this user started
//'activatedOn': new Date("2021-12-04"),

//hasn't been deactivated yet
//'deactivatedOn': null
// },
// ]


function monthlyCharge(month, subscription, users) {

}

// // Helper functions
// Takes a Date instance and returns a Date which is the first day of that month. For example:

// firstDayOfMonth(new Date(2022, 3, 17)) // => new
// Date(2022, 3, 1)

// Input type:Date
// Output type: Date

function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

// Takes a Date object and returns a Date which is the last day of that month.Date

// lastDayOfMonth(new Date(2022, 3,17)) // => new Date(2022,3,31)
// // Input type:Date
// // Output type: Date

function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

// Takes a Date object and returns a Date which is the next Day 
// for example:

// nextDay(new Date(2022, 3, 17)) // => new Date(2022, 3, 18)
// nextDay(new Date(2022, 3, 31)) // => new Date(2022, 4, 1)
// // // Input type:Date
// // // Output type: Date

function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}