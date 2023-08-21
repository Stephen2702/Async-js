console.log('person1 shows ticket');
console.log('person2 shows ticket');

const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 2000);
});

const preMovie = async () => {
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const getCandy = new Promise((resolve, reject) => {
        setTimeout(() => resolve('candy'), 3000);
    });

    const getCoke = new Promise((resolve, reject) => {
        setTimeout(() => resolve('coke'), 3000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

    const coldDrinks = await getColdDrinks;

    return { ticket, coldDrinks };
};

preMovie().then(({ ticket, coldDrinks }) => {
    console.log(`person4 shows ${ticket}`);
    console.log(`person4 shows ${coldDrinks}`);
});

console.log('person4 shows ticket');
