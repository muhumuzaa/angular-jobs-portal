import { Injectable } from '@angular/core';
import { Job, fake_jobs } from '../local_jobs';
import { Observable, map, of, retryWhen } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
  constructor(private firestore: AngularFirestore) { }

  getJobs(): Observable<Job[]>{
    return this.firestore.collection<Job>('jobs').snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Job;
        const id = a.payload.doc.id;
        return { ...data, id};
      }))
    )
  }

  getJobById(id: string): Observable<Job | undefined>{
    // const job = fake_jobs.find(job => job.id === id);
    // return of(job)
    return this.firestore.doc<Job>(`jobs/${id}`).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data();
        if(data){
          return {...data, id: action.payload.id};
        }else{
          return undefined;
        }
      })
    )
  }
  
}
