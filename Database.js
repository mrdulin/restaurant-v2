const appetizers = [
    {id: 1, engName: 'Gyoza', engDescription: 'Korean dumplings made with pork', korName: 'Gyoza', korDescription: 'Some korean words here', price: 10.99, allergy: '', spice: 0, image: '/DSC04218.JPG'},

    {id: 2, engName: 'Kimbop', engDescription: 'Rice bowl with meat and egg', korName: 'Kimbop in korean', korDescription: 'Some korean words here', price: 9.99, allergy: '', spice: 3, image: '/DSC04213.JPG'},

    {id: 3, engName: 'Gyoza', engDescription: 'Korean dumplings made with pork', korName: 'Gyoza', korDescription: 'Some korean words here', price: 10.99, allergy: '', spice: 0, image: '/DSC04218.JPG'},

    {id: 4, engName: 'Kimbop', engDescription: 'Rice bowl with meat and egg', korName: 'Kimbop in korean', korDescription: 'Some korean words here', price: 9.99, allergy: '', spice: 3, image: '/DSC04213.JPG'},

    {id: 5, engName: 'Gyoza', engDescription: 'Korean dumplings made with pork', korName: 'Gyoza', korDescription: 'Some korean words here', price: 10.99, allergy: '', spice: 0, image: '/DSC04218.JPG'},

    {id: 6, engName: 'Kimbop', engDescription: 'Rice bowl with meat and egg', korName: 'Kimbop in korean', korDescription: 'Some korean words here', price: 9.99, allergy: '', spice: 3, image: '/DSC04213.JPG'},

    {id: 7, engName: 'Gyoza', engDescription: 'Korean dumplings made with pork', korName: 'Gyoza', korDescription: 'Some korean words here', price: 10.99, allergy: '', spice: 0, image: '/DSC04218.JPG'},

    {id: 8, engName: 'Kimbop', engDescription: 'Rice bowl with meat and egg', korName: 'Kimbop in korean', korDescription: 'Some korean words here', price: 9.99, allergy: '', spice: 3, image: '/DSC04213.JPG'},
];

const listApps = () => {
    return [...appetizers]
};

module.exports = {listApps: listApps}