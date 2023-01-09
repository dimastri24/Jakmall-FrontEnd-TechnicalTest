export const SHIPMENT = {
    gosend: { name: 'GO-SEND', cost: 15000, due: 'Today' },
    jne: { name: 'JNE', cost: 9000, due: 'In 2 days' },
    personal: { name: 'Personal Courier', cost: 29000, due: 'In 1 day' },
};

export const PAYMENT = {
    ewallet: { name: 'e-Wallet', balance: 1500000 },
    bank: { name: 'Bank Transfer' },
    virtual: { name: 'Virtual Account' },
};

export const DROPSHIP = 5900;

export const DEFAULT_STATE = {
    isDropshipper: true,
    email: '',
    dropshipperName: '',
    phoneNumber: '',
    dropshipperPhone: '',
    deliveryAddress: '',
    shipment: '',
    payment: 'ewallet',
};

export const emailPatern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const phonePatern =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
