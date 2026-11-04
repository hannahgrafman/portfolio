export interface ContactFields { name: string; email: string; message: string; website: string; }
export function validateContact(data: ContactFields): Partial<Record<keyof ContactFields,string>> {
 const errors:Partial<Record<keyof ContactFields,string>>={};
 if(data.name.trim().length<2||data.name.length>100)errors.name='Please enter a name between 2 and 100 characters.';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)||data.email.length>254)errors.email='Please enter a valid email address.';
 if(data.message.trim().length<10||data.message.length>5000)errors.message='Please enter a message between 10 and 5,000 characters.';
 return errors;
}
