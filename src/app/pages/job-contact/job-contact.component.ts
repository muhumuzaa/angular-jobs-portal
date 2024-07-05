import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/local_jobs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-contact',
  templateUrl: './job-contact.component.html',
  styleUrls: ['./job-contact.component.css']
})
export class JobContactComponent implements OnInit {

  jobForm!: FormGroup;
  job: Job | undefined;
  constructor(
    private route: ActivatedRoute,
    private service: JobService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
   
    const jobId = this.route.snapshot.paramMap.get('id');
    console.log(jobId)
    if(jobId){
     this.service.getJobById(jobId).subscribe(data => this.job = data);
    }
  }


  onJobSubmit(): void {
    
      alert('Application submitted');
      this.router.navigateByUrl("/jobs")

      
    
  }

}
