import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDocs,
  writeBatch,
} from '@angular/fire/firestore';
import { CustomerModel } from '../models/customer.model';
import { Observable } from 'rxjs';
import { customerData } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersCollectionRef = collection(this.firestore, 'customers');

  constructor(private firestore: Firestore) {}

  customerData: CustomerModel[] = customerData;

  getCustomers(): Observable<CustomerModel[]> {
    return collectionData(this.customersCollectionRef, {
      idField: 'id',
    }) as Observable<CustomerModel[]>;
  }

  public async initializeDb(): Promise<void> {
    await this.dropCollection('customers');
    await this.uploadCollection('customers', customerData);
  }

  private async dropCollection(customers: string): Promise<void> {
    console.log(`Dropping collection ${customers}`);

    const c = collection(this.firestore, customers);
    const snapshot = await getDocs(c);

    const batch = writeBatch(this.firestore);
    for (let doc of snapshot.docs) {
      batch.delete(doc.ref);
    }
    await batch.commit();

    console.log('Done!');
    console.log('Data:', customerData);
  }

  private async uploadCollection(customers: string, data: CustomerModel[]) {
    console.log(`Uploading collection ${customers}`);

    const collectionRef = collection(this.firestore, customers);
    const batch = writeBatch(this.firestore);
    data.forEach((data) => {
      const ref = doc(collectionRef);
      batch.set(ref, data);
    });
    await batch.commit();

    console.log('Done!');
    console.log('Data:', data);
  }
}
