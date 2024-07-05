import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/local_jobs';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job!: Job;

  @Input() editButton = false;
  @Input() deleteButton = false;
  @Input() applyButton = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteJob(): void{
    alert('deleting job')
  }

}
