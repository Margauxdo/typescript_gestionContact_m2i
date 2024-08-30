export class Contact{
    private firstName:string;
    private lastName:string;
    private dateOfBirth:Date;
    private email:string;
    private phoneNumber:string;

    public constructor(firstName:string, lastName:string , dateOfBirth:Date, email:string, phoneNumber:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public get getfirstName(): string{
     return this.firstName;
    }

    
    public get getLastName() : string {
        return this.lastName;
    }

    public get getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    public get getEmail(): string {
        return this.email;
    }

    public get getPhoneNumber(): string {
        return this.phoneNumber;
    }
    
    public set setFirstName(firstName: string){
        this.firstName = firstName;
    }
    
    public set setLastName(lastName: string){
        this.lastName = lastName;
    }
    
    public set setDateOfBirth(dateOfBirth: Date){
        this.dateOfBirth = dateOfBirth;
    }
    
    public set setEmail(email: string){
        this.email = email;
    }
    
    public set setPhoneNumber(phoneNumber: string){
        this.phoneNumber = phoneNumber;
    }
    
}