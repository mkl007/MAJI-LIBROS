export const generateISBN = () => {
    let isbn = '978';
    for (let i = 0; i < 9; i++) {
        isbn += Math.floor(Math.random() * 10);
    }

    let checksum = 0;
    for (let i = 0; i < 12; i++) {
        checksum += (isbn[i] * ((i % 2 === 0) ? 1 : 3));
    }
    checksum = (10 - (checksum % 10)) % 10;
    isbn += checksum;

    return isbn;
};